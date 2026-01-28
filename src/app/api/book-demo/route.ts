import clientPromise from "@/app/libs/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const client = await clientPromise;
    const db = client.db();
    await db.collection("demos").insertOne({
      ...data,
      createdAt: new Date(),
    });

    const webhook = process.env.DISCORD_WEBHOOK_URL;
    if (!webhook) {
      console.error("DISCORD_WEBHOOK no definido");
      return NextResponse.json(
        { error: "Discord webhook no definido" },
        { status: 500 }
      );
    }

    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "Nueva Reserva de Demo",
            color: 0x00ff00,
            fields: [
              { name: "Nombre", value: data.name || "N/A", inline: true },
              { name: "Email", value: data.email || "N/A", inline: true },
              { name: "Empresa", value: data.company || "N/A", inline: true },
              { name: "Cargo", value: data.position || "N/A", inline: true },
              { name: "Interés", value: data.interest || "N/A" },
              { name: "Agente", value: data.agent || "N/A", inline: true },
              { name: "Fecha", value: data.date || "N/A", inline: true },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return NextResponse.json(
      { message: "Demo guardada y enviada a Discord" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error guardando demo" },
      { status: 500 }
    );
  }
}
