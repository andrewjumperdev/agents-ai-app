"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

type Lang = "es" | "en" | "fr";
type Props = { lang: Lang };

const chatTranslations = {
  es: {
    welcome: "¡Hola! Soy tu asistente IA. Vamos a agendar tu cita 😊",
    placeholder: "Escribe tu respuesta...",
    title: "Agendador IA",
    send: "➤",
    ariaLabel: "Abrir chat",
    confirmYes: "sí",
  },
  en: {
    welcome: "Hi! I'm your AI assistant. Let's schedule your appointment 😊",
    placeholder: "Type your answer...",
    title: "Appointment Scheduler AI",
    send: "➤",
    ariaLabel: "Open chat",
    confirmYes: "yes",
  },
  fr: {
    welcome:
      "Salut ! Je suis votre assistant IA. Programmons votre rendez-vous 😊",
    placeholder: "Écrivez votre réponse...",
    title: "Planificateur IA",
    send: "➤",
    ariaLabel: "Ouvrir le chat",
    confirmYes: "oui",
  },
};

interface AppointmentSlots {
  date?: string;
  time?: string;
  service?: string;
  [key: string]: unknown; // campos extra opcionales
}

interface ChatPayload {
  reply: string;
  action?: "book" | "book_and_confirm" | string;
  slots?: AppointmentSlots;
}

export default function ChatWidget({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [appointment, setAppointment] = useState<AppointmentSlots>({});
  const containerRef = useRef<HTMLDivElement | null>(null);

  const t = chatTranslations[lang];

  // Inicializa conversación cuando se abre o cambia idioma
  useEffect(() => {
    if (!open) return;
    setMessages((prev) => {
      const rest = prev.slice(2); // conserva todo excepto los 2 primeros
      return [`🤖: ${t.welcome}`, `🤖: ${getFirstQuestion(lang)}`, ...rest];
    });
  }, [lang, open, t.welcome]);

  // Scroll automático
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  function getFirstQuestion(l: Lang) {
    if (l === "es") return "¿Qué fecha te gustaría para la cita? (DD/MM/AAAA)";
    if (l === "fr")
      return "À quelle date souhaitez-vous votre rendez-vous ? (JJ/MM/AAAA)";
    return "Which date would you like for your appointment? (DD/MM/YYYY)";
  }

  async function callChatApi(userText: string): Promise<ChatPayload> {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText, lang, context: appointment }),
    });

    const data = (await res.json()) as ChatPayload | { error: string; details?: unknown };
    if (!res.ok) {
      const errMsg =
        "error" in data
          ? `${data.error}${"details" in data && data.details ? " - " + JSON.stringify(data.details) : ""}`
          : "Unknown server error";
      throw new Error(errMsg);
    }

    return data as ChatPayload;
  }

  async function handleSend() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, `🧑: ${text}`]);
    setInput("");

    let payload: ChatPayload;
    try {
      payload = await callChatApi(text);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Error desconocido";
      setMessages((m) => [...m, `🤖: Error técnico: ${message}`]);
      console.error("callChatApi error:", err);
      return;
    }

    const { reply, action, slots } = payload;

    setMessages((m) => [...m, `🤖: ${reply}`]);

    if (slots && typeof slots === "object") {
      setAppointment((prev) => ({ ...prev, ...slots }));
    }

    if (action === "book" || action === "book_and_confirm") {
      try {
        const bookingResp = await fetch("/api/appointments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...appointment, ...slots }),
        });
        if (bookingResp.ok) {
          setMessages((m) => [...m, `🤖: ✅ Cita registrada correctamente.`]);
          setAppointment({});
        } else {
          setMessages((m) => [...m, `🤖: Error al guardar la cita. Intenta de nuevo.`]);
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Error desconocido";
        setMessages((m) => [...m, `🤖: Error técnico: ${message}`]);
      }
    }
  }

  // Al abrir por primera vez, inicializa mensajes
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([`🤖: ${t.welcome}`, `🤖: ${getFirstQuestion(lang)}`]);
    }
  }, [open, messages.length, t.welcome, lang]);

  return (
    <>
      <button
        className="fixed bottom-4 right-4 z-50 bg-blue-600 border-2 border-solid border-white text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label={t.ariaLabel}
      >
        {open ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.28 }}
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
                const [role, ...rest] = msg.split(": ");
                const text = rest.join(": ");
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
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none"
              />
              <button
                onClick={handleSend}
                aria-label={t.send}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
              >
                {t.send}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
