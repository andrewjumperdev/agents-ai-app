"use client";
import { useEffect } from "react";

export default function VoiceAgent() {
  useEffect(() => {
    // Inyectar el script de ElevenLabs dinámicamente en el cliente
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* @ts-ignore: Custom element not in JSX.IntrinsicElements */}
      <elevenlabs-convai agent-id="agent_7901k34hbzzheb9tj3av3rd9fp0r"></elevenlabs-convai>
    </div>
  );
}
