"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string; type?: "text" | "input" }[]
  >([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [identified, setIdentified] = useState(false);
  const [botReply, setBotReply] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [dots, setDots] = useState(".");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, displayedText]);

  // Animar puntos mientras espera la respuesta (antes de que llegue botReply)
  useEffect(() => {
    if (loading && !botReply) {
      setDisplayedText(dots);
    }
  }, [dots, loading, botReply]);

  // Animación máquina de escribir una vez que llega botReply
  useEffect(() => {
    if (!loading || !botReply) return;

    setDisplayedText("");
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(botReply.slice(0, index) + (dots || ""));
      index++;
      if (index > botReply.length) {
        clearInterval(interval);
        setLoading(false);
        setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
        setBotReply("");
        setDisplayedText(""); // Limpia el texto mostrado para el próximo uso
      }
    }, 20);

    return () => clearInterval(interval);
  }, [loading, botReply, dots]);

  // Ciclo de puntos animados (ahora cicla entre "." ".." "..." sin volver a "")
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, [loading]);

  const handleSend = async (userMessage?: string) => {
    const msg = userMessage || input.trim();
    if (!msg) return;

    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setInput("");

    if (!identified) {
      if (!validateEmail(msg)) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Por favor, ingresa un correo válido." },
        ]);
        return;
      } else {
        setEmail(msg);
        setIdentified(true);
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: `¡Perfecto! Gracias ${msg}. Ahora puedo ayudarte.` },
        ]);
        return;
      }
    }

    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, sessionId: email }),
      });

      const data = await res.json();
      setBotReply(data.reply); // siempre string
    } catch (error: unknown) {
  console.error("Chat error:", error);
  setLoading(false);
  setMessages((prev) => [
    ...prev,
    { from: "bot", text: "Error: no se pudo conectar al chat." },
  ]);
}

  };

  // Mensaje inicial al abrir chat
  const openChat = () => {
    setOpen(true);
    if (messages.length === 0) {
      setMessages([
        {
          from: "bot",
          text: "Hola 👋 Soy Fausto, tu asistente AI. Para ofrecerte un servicio personalizado, necesito tu correo electrónico.",
          type: "input",
        },
      ]);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={openChat}
          className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 flex items-center justify-center text-2xl z-50"
        >
          💬
        </button>
      )}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-end justify-end z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 w-80 max-h-[70vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
            >
              <div className="flex justify-between items-center p-4 bg-gray-800">
                <h3 className="text-white font-bold">Fausto AI</h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white font-bold text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`relative p-3 rounded-2xl max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-blue-600 text-white self-end shadow-md"
                        : "bg-gray-700 text-gray-100 self-start shadow-md"
                    }`}
                  >
                    {msg.text}
                    {msg.from === "bot" && (
                      <span className="absolute bottom-0 left-0 w-3 h-3 bg-gray-700 rotate-45 -mb-1 -ml-1"></span>
                    )}
                  </div>
                ))}
                {loading && (
                  <div
                    className="relative p-3 rounded-2xl max-w-[80%] bg-gray-700 text-gray-100 self-start shadow-md"
                  >
                    {displayedText}
                    <span className="absolute bottom-0 left-0 w-3 h-3 bg-gray-700 rotate-45 -mb-1 -ml-1"></span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 bg-gray-800 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 rounded-xl p-2 bg-gray-700 text-white focus:outline-none shadow-inner"
                  placeholder={
                    identified ? "Escribe un mensaje..." : "Ingresa tu correo"
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <button
                  onClick={() => handleSend()}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold shadow-md"
                >
                  Enviar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}