import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    console.log("Received message:", message);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    return NextResponse.json({
      response: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { response: "Hubo un error al procesar el mensaje." },
      { status: 500 }
    );
  }
}