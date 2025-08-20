import { NextResponse } from "next/server";
import OpenAI from "openai";

type ChatCompletionRequestMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  reply: string;
  action: string;
  slots: Record<string, unknown>;
}

// Validación de objeto desconocido a ChatMessage
function isChatMessage(obj: unknown): obj is ChatMessage {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "role" in obj &&
    "content" in obj &&
    ((obj as { role: unknown }).role === "user" ||
      (obj as { role: unknown }).role === "assistant") &&
    typeof (obj as { content: unknown }).content === "string"
  );
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const { message, lang = "es", history = [] } = (body as {
      message?: string;
      lang?: string;
      history?: unknown[];
    }) || {};

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing 'message' in request body" },
        { status: 400 }
      );
    }

    const envKey = process.env.OPENAI_API_KEY;
    if (!envKey)
      return NextResponse.json(
        { error: "OPENAI_API_KEY missing" },
        { status: 500 }
      );

    const businessSummary = "";
    const systemPrompt = `You are an assistant that schedules demos and bookings for this business. ${businessSummary} Always reply in ${
      lang === "es" ? "Spanish" : lang === "fr" ? "French" : "English"
    }. Return valid JSON ONLY with keys: reply, action, slots.`;

    // Validamos history
    const safeHistory: ChatMessage[] = Array.isArray(history)
      ? history.filter(isChatMessage)
      : [];

    // Construimos mensajes para OpenAI
    const messages: ChatCompletionRequestMessage[] = [
      { role: "system", content: systemPrompt },
      ...safeHistory.map((h) => ({
        role: h.role,
        content: h.content,
      })),
      { role: "user", content: message },
    ];

    const openai = new OpenAI({ apiKey: envKey });
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 400,
      temperature: 0.05,
    });

    const raw = completion.choices?.[0]?.message?.content ?? "";

    // Parseo seguro del JSON
    try {
      const parsed: Partial<ChatResponse> = JSON.parse(raw);
      const response: ChatResponse = {
        reply: parsed.reply ?? raw.slice(0, 300),
        action: parsed.action ?? "idle",
        slots: parsed.slots ?? {},
      };
      return NextResponse.json(response);
    } catch {
      return NextResponse.json({
        reply: raw.trim(),
        action: "idle",
        slots: {},
      });
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Chat API error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
