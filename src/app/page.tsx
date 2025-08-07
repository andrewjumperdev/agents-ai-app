"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import ChatWidget from "./components/ChatWidget";
import { Reveal } from "./components/Reveal";

// Translations for ES, EN, FR
const translations: any = {
es: {
    heroTitle: "¿Tus pedidos y clientes te comen el tiempo?",
    heroDesc:
      "Instalá un Asistente IA que responde por WhatsApp, gestiona pedidos y aumenta tus ventas — sin apps complicadas ni planillas eternas.",
    cta: "🔥 Ver el Asistente en Acción",
    agents: [
      {
        icon: "📦",
        title: "Agente de Pedidos IA",
        desc: "Tus clientes piden por WhatsApp como siempre. El bot toma el pedido, lo registra y avisa a tu equipo en segundos.",
      },
      {
        icon: "📄",
        title: "Agente de Resumen IA",
        desc: "Subí un PDF o doc — recibí un resumen claro con puntos clave directo en tu correo o CRM.",
      },
      {
        icon: "❄️",
        title: "Icebreaker AI",
        desc: "Conecta con leads automáticamente con mensajes que parecen escritos por vos. Más respuestas, menos esfuerzo.",
      },
    ],
    workSteps: [
      "Capturá atención con un chat IA en tu sitio, WhatsApp o Telegram",
      "Generá interés con respuestas y demos instantáneas (menos de 5 min)",
      "Convertí con ofertas irresistibles y formularios integrados al chat",
    ],
    demoTitle: "Probalo Ahora en Vivo",
    demoDesc:
      "Hablá con nuestro bot como si fueras cliente real o reservá una demo personalizada para tu negocio.",
    demoWhatsapp: "💬 Probar en WhatsApp",
    demoCalendly: "📅 Agendar Demo",
    testimonial: {
      quote:
        "Automatizamos el 80% de la gestión con el Agente de Pedidos IA y subimos nuestras ventas un 25% en el primer mes.",
      author: "– Mauricio P., Distribuidor B2B 🇪🇸",
    },
  },
en: {
  heroTitle: "Drowning in orders and support requests?",
  heroDesc:
    "Install an AI Assistant that replies on WhatsApp, processes orders, and grows your business — no extra apps, no stress.",
  cta: "🔥 Watch the Assistant in Action",
  agents: [
    {
      icon: "📦",
      title: "AI Order Agent",
      desc: "Customers order via WhatsApp as usual. The bot takes the order, logs it, and alerts your team instantly.",
    },
    {
      icon: "📄",
      title: "AI Summary Agent",
      desc: "Upload a document or PDF — get a clear summary with insights delivered to your email or CRM.",
    },
    {
      icon: "❄️",
      title: "Icebreaker AI",
      desc: "Engage new leads with smart, personalized messages that look hand-written. More replies, less effort.",
    },
  ],
  workSteps: [
    "Grab attention with AI chat on your site, WhatsApp or Telegram",
    "Spark interest with live demos and instant replies (under 5 min)",
    "Convert leads with irresistible offers and embedded forms",
  ],
  demoTitle: "Try the Agent Live",
  demoDesc:
    "Chat with our bot like a real customer or book a custom demo for your business.",
  demoWhatsapp: "💬 Try on WhatsApp",
  demoCalendly: "📅 Book a Demo",
  testimonial: {
    quote:
      "We automated 80% of our manual work and boosted sales by 25% in the first month using the AI Order Agent.",
    author: "– Alex M., B2B Distributor 🇺🇸",
  },
},
fr: {
  heroTitle: "Débordé par les commandes et les messages clients ?",
  heroDesc:
    "Installez un Assistant IA qui répond sur WhatsApp, gère les commandes et booste vos ventes — sans outils complexes ni perte de temps.",
  cta: "🔥 Voir l’Assistant en Action",
  agents: [
    {
      icon: "📦",
      title: "Agent de Commandes IA",
      desc: "Vos clients commandent via WhatsApp comme d’habitude. Le bot enregistre et transmet la commande à votre équipe automatiquement.",
    },
    {
      icon: "📄",
      title: "Agent de Résumé IA",
      desc: "Téléchargez un PDF ou un document — recevez un résumé clair avec les points clés dans votre mail ou CRM.",
    },
    {
      icon: "❄️",
      title: "Icebreaker IA",
      desc: "Contactez des leads automatiquement avec des messages personnalisés dignes d’un humain. Plus de réponses, moins d’effort.",
    },
  ],
  workSteps: [
    "Attirez l’attention avec un chat IA sur votre site, WhatsApp ou Telegram",
    "Créez de l’intérêt avec des réponses instantanées et des démos en moins de 5 minutes",
    "Convertissez avec des offres irrésistibles et des formulaires intégrés",
  ],
  demoTitle: "Testez l’Agent en Direct",
  demoDesc:
    "Discutez avec notre bot comme un vrai client ou réservez une démo personnalisée pour votre activité.",
  demoWhatsapp: "💬 Tester sur WhatsApp",
  demoCalendly: "📅 Réserver une Démo",
  testimonial: {
    quote:
      "Grâce à l’Agent de Commandes IA, nous avons automatisé 80 % du travail manuel et augmenté nos ventes de 25 %.",
    author: "– Julien L., Distributeur B2B 🇫🇷",
  },
},

};

type Lang = "es" | "en" | "fr";
const LANGS: Lang[] = ["es", "en", "fr"];
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("es");
  const [mounted, setMounted] = useState(false);
  // const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
      setMounted(true);
      const savedLang = localStorage.getItem("lang");
      if (savedLang && LANGS.includes(savedLang as Lang)) {
        setLang(savedLang as Lang);
      }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", String(lang));
      // localStorage.setItem("theme", theme);
      // document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [lang, mounted]);

  if (!mounted) return null;
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-extrabold">Tu Asistente IA</h1>
        <div className="flex items-center gap-2">
          {(["es", "en", "fr"] as Lang[]).map((l) => (
            <button
              key={String(l)}
              onClick={() => setLang(l)}
              className={`text-sm px-3 py-1 rounded-full ${
                lang === l
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
            >
              {String(l).toUpperCase()}
            </button>
          ))}
          {/* <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button> */}
        </div>
      </nav>

      {/* Hero */}
      <Reveal>
        <section className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto px-4 py-10 gap-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-6xl font-bold mb-4">
              {t.heroTitle}
            </h2>
            <p className="text-base md:text-lg mb-6 opacity-80">{t.heroDesc}</p>
            <Link
              href="#demo"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              {t.cta}
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="w-full md:w-1/2 flex justify-center"
          >
            <Image
              src="/hero-illustration.svg"
              alt="Hero illustration"
              width={300}
              height={300}
              className="max-w-full h-auto"
            />
          </motion.div>
        </section>
      </Reveal>

      {/* Agents Section */}
      <Reveal>
        {" "}
        <section className="bg-white dark:bg-gray-900 py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {t.agents.map((a: any, i: number) => (
              <motion.div
                key={i}
                initial="hidden"
                animate="show"
                variants={containerVariants}
                className="p-6 bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl hover:scale-105 transition transform"
              >
                <div className="text-4xl mb-3">{a.icon}</div>
                <h3 className="text-xl font-bold mb-1">{a.title}</h3>
                <p className="text-sm opacity-80">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              {lang === "es" ? "Flujo AIMA" : "AIMA Flow"}
            </h3>
            <ol className="list-decimal list-inside text-left space-y-3 opacity-90">
              {t.workSteps.map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
        </section>
      </Reveal>
      {/* AIMA Flow */}

      <Reveal>
        <section className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="italic text-lg md:text-xl mb-4">
              “{t.testimonial.quote}”
            </blockquote>
            <p className="font-semibold">{t.testimonial.author}</p>
          </div>
        </section>
      </Reveal>
      {/* Testimonial */}

      <Reveal>
        {" "}
        <section id="demo" className="py-16 bg-blue-600 text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.demoTitle}
            </h3>
            <p className="mb-8 opacity-90">{t.demoDesc}</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="https://wa.me/123?text=Demo"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                {t.demoWhatsapp}
              </Link>
              <Link
                href="https://calendly.com/aacpariscr/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                {t.demoCalendly}
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
      {/* Demo CTA */}

      {/* Footer */}
      <footer className="py-6 px-4 bg-gray-50 dark:bg-gray-900 text-center opacity-80 text-sm">
        <p>
          © {new Date().getFullYear()} Jumper Enterprise. Tous droits réservés.
        </p>
      </footer>

      {/* Chat Widget */}
      <ChatWidget lang={lang} />
    </div>
  );
}
