"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

type Lang = "es" | "en" | "fr";

type Props = {
  lang: Lang;
};

const chatTranslations = {
  es: {
    welcome: "¡Hola! Soy tu asistente IA. ¿Cómo puedo ayudarte hoy? 😊",
    placeholder: "Escribe tu mensaje...",
    title: "Tu Asistente IA",
    send: "➤",
    ariaLabel: "Abrir chat",
  },
  en: {
    welcome: "Hi! I'm your AI assistant. How can I help you today? 😊",
    placeholder: "Type your message...",
    title: "Your AI Assistant",
    send: "➤",
    ariaLabel: "Open chat",
  },
  fr: {
    welcome:
      "Salut ! Je suis votre assistant IA. Comment puis-je vous aider ? 😊",
    placeholder: "Écrivez votre message...",
    title: "Votre Assistant IA",
    send: "➤",
    ariaLabel: "Ouvrir le chat",
  },
};

export default function ChatWidget({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const t = chatTranslations[lang];

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([`🤖: ${t.welcome}`]);
    }
  }, [open, lang]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages((prev) => [...prev, `🧑: ${userMessage}`]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: userMessage }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setMessages((prev) => [...prev, `🤖: ${data.response}`]);
  };

  useEffect(() => {
    if (open) {
      setMessages((prevMessages) => {
        if (prevMessages.length === 0) {
          return [`🤖: ${t.welcome}`];
        }
        const firstMsg = prevMessages[0];
        if (firstMsg.startsWith("🤖:")) {
          const rest = prevMessages.slice(1);
          return [`🤖: ${t.welcome}`, ...rest];
        }
        return prevMessages;
      });
    }
  }, [lang, open, t.welcome]);

  useEffect(() => {
    if (containerRef.current)
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-4 right-4 z-50 bg-blue-600 border-2 border-solid border-white text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Abrir chat"
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-[95vw] max-w-sm h-[80vh] sm:h-[500px] flex flex-col bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-2xl rounded-xl"
          >
            <div className="p-3 font-semibold text-sm border-b border-gray-200 dark:border-gray-700">
              {`🤖 ${t.title}`}
            </div>

            <div
              ref={containerRef}
              className="flex-1 overflow-y-auto p-3 space-y-2 text-sm"
            >
              {messages.map((msg, i) => {
                const [role, text] = msg.split(": ");
                const isUser = role.includes("🧑");
                return (
                  <div
                    key={i}
                    className={`max-w-[85%] px-3 py-2 rounded-lg break-words ${
                      isUser
                        ? "bg-blue-100 dark:bg-blue-700 self-end ml-auto text-right"
                        : "bg-gray-200 dark:bg-gray-700 text-left"
                    }`}
                  >
                    {text}
                  </div>
                );
              })}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 p-2 flex items-center gap-2">
              <input
                placeholder={t.placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="..."
              />
              <button onClick={sendMessage} aria-label={t.send} className="...">
                {t.send}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
