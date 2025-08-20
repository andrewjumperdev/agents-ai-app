// app/api/chat/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { translations } from "@/app/libs/translations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, lang = "es", context = {}, history = [] } = body || {};

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Missing 'message' in request body" }, { status: 400 });
    }

    const envKey = process.env.OPENAI_API_KEY;
    if (!envKey) return NextResponse.json({ error: "OPENAI_API_KEY missing" }, { status: 500 });

    const businessSummary = /* tu buildBusinessSummary(lang) */ "";
    const systemPrompt = `You are an assistant that schedules demos and bookings for this business. ${businessSummary} Always reply in ${lang === "es" ? "Spanish" : lang === "fr" ? "French" : "English"}. Return valid JSON ONLY with keys: reply, action, slots.`;

    // history should be array de { role: "user"|"assistant", content: string }
    // validamos y convertimos por seguridad
    const safeHistory = Array.isArray(history)
      ? history
          .filter((m: any) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
          .map((m: any) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content }))
      : [];

    // Construimos el payload para la API manteniendo el system prompt.
    const messages = [
      { role: "system", content: systemPrompt },
      ...safeHistory,
      { role: "user", content: message },
    ];

    const openai = new OpenAI({ apiKey: envKey });
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages as any,
      max_tokens: 400,
      temperature: 0.05,
    });

    const raw = completion.choices?.[0]?.message?.content ?? "";
    // igual que antes: intentar parsear JSON o fallback
    try {
      const parsed = JSON.parse(raw);
      parsed.reply = parsed.reply ?? String(raw).slice(0, 300);
      parsed.action = parsed.action ?? "idle";
      parsed.slots = parsed.slots ?? {};
      return NextResponse.json(parsed);
    } catch {
      return NextResponse.json({ reply: String(raw).trim(), action: "idle", slots: {} });
    }
  } catch (err: any) {
    console.error("Chat API error:", err);
    return NextResponse.json({ error: err?.message ?? "Internal Server Error" }, { status: 500 });
  }
}
