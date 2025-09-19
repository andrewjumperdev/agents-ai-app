import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { message, sessionId } = await req.json();

  try {
    const res = await fetch(
      "https://agents-flow-n8n.omlgrh.easypanel.host/webhook/e5804062-2c42-4917-b4a3-095c47608381",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, sessionId }),
      }
    );

    const data = await res.json();

    // n8n devuelve un array de objetos
    let reply = "";
    if (Array.isArray(data)) {
      reply = data
        .map((item) => item.json?.reply || item.json?.text || "")
        .filter(Boolean)
        .join("\n"); // todos los mensajes concatenados
    } else if (data.reply) {
      reply = data.reply;
    } else {
      reply = "No hay respuesta";
    }

    console.log("Respuesta de n8n:", reply);

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al enviar mensaje a n8n:", error);
    return new Response(
      JSON.stringify({ reply: "Error al conectarse con el chat." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
