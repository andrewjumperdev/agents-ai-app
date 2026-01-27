"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lang } from "../types/types";

interface WhatsAppBubbleProps {
  lang: Lang;
  phoneNumber: string;
}

type Step = "welcome" | "business_type" | "business_size" | "need" | "budget" | "summary";

interface Answers {
  businessType: string;
  businessSize: string;
  need: string;
  budget: string;
}

const translations = {
  es: {
    welcome: {
      title: "Hola! Soy el asistente de Jumper",
      subtitle: "Te ayudaré a encontrar la solución perfecta para tu negocio. Responde algunas preguntas rápidas.",
      cta: "Comenzar",
    },
    business_type: {
      title: "Que tipo de negocio tienes?",
      options: [
        { value: "ecommerce", label: "E-commerce / Tienda online", icon: "🛒" },
        { value: "services", label: "Servicios profesionales", icon: "💼" },
        { value: "retail", label: "Comercio / Retail", icon: "🏪" },
        { value: "agency", label: "Agencia / Consultora", icon: "🎯" },
        { value: "other", label: "Otro tipo de negocio", icon: "🏢" },
      ],
    },
    business_size: {
      title: "Cual es el tamaño de tu equipo?",
      options: [
        { value: "solo", label: "Solo yo", icon: "👤" },
        { value: "small", label: "2-5 personas", icon: "👥" },
        { value: "medium", label: "6-20 personas", icon: "🏠" },
        { value: "large", label: "Más de 20 personas", icon: "🏢" },
      ],
    },
    need: {
      title: "Que te gustaría automatizar?",
      options: [
        { value: "sales", label: "Ventas y seguimiento de clientes", icon: "💰" },
        { value: "support", label: "Atención al cliente", icon: "🎧" },
        { value: "marketing", label: "Marketing y contenido", icon: "📣" },
        { value: "appointments", label: "Gestión de citas", icon: "📅" },
        { value: "all", label: "Todo lo anterior", icon: "🚀" },
      ],
    },
    budget: {
      title: "Cuál es tu presupuesto mensual?",
      options: [
        { value: "starter", label: "Menos de $100/mes", icon: "💵" },
        { value: "growth", label: "$100 - $200/mes", icon: "💰" },
        { value: "scale", label: "Más de $200/mes", icon: "💎" },
        { value: "custom", label: "Necesito cotización", icon: "📋" },
      ],
    },
    summary: {
      title: "Perfecto! Tenemos lo que necesitas",
      subtitle: "Basado en tus respuestas, podemos ayudarte a automatizar tu negocio.",
      cta: "Hablar con un asesor",
      back: "Volver a empezar",
    },
    bubbleText: "Necesitas ayuda?",
  },
  en: {
    welcome: {
      title: "Hi! I'm Jumper's assistant",
      subtitle: "I'll help you find the perfect solution for your business. Answer a few quick questions.",
      cta: "Get Started",
    },
    business_type: {
      title: "What type of business do you have?",
      options: [
        { value: "ecommerce", label: "E-commerce / Online store", icon: "🛒" },
        { value: "services", label: "Professional services", icon: "💼" },
        { value: "retail", label: "Retail / Store", icon: "🏪" },
        { value: "agency", label: "Agency / Consulting", icon: "🎯" },
        { value: "other", label: "Other business type", icon: "🏢" },
      ],
    },
    business_size: {
      title: "What's your team size?",
      options: [
        { value: "solo", label: "Just me", icon: "👤" },
        { value: "small", label: "2-5 people", icon: "👥" },
        { value: "medium", label: "6-20 people", icon: "🏠" },
        { value: "large", label: "More than 20 people", icon: "🏢" },
      ],
    },
    need: {
      title: "What would you like to automate?",
      options: [
        { value: "sales", label: "Sales and customer follow-up", icon: "💰" },
        { value: "support", label: "Customer support", icon: "🎧" },
        { value: "marketing", label: "Marketing and content", icon: "📣" },
        { value: "appointments", label: "Appointment management", icon: "📅" },
        { value: "all", label: "All of the above", icon: "🚀" },
      ],
    },
    budget: {
      title: "What's your monthly budget?",
      options: [
        { value: "starter", label: "Less than $100/month", icon: "💵" },
        { value: "growth", label: "$100 - $200/month", icon: "💰" },
        { value: "scale", label: "More than $200/month", icon: "💎" },
        { value: "custom", label: "Need a quote", icon: "📋" },
      ],
    },
    summary: {
      title: "Perfect! We have what you need",
      subtitle: "Based on your answers, we can help automate your business.",
      cta: "Talk to an advisor",
      back: "Start over",
    },
    bubbleText: "Need help?",
  },
  fr: {
    welcome: {
      title: "Bonjour! Je suis l'assistant Jumper",
      subtitle: "Je vais vous aider à trouver la solution parfaite pour votre entreprise. Répondez à quelques questions.",
      cta: "Commencer",
    },
    business_type: {
      title: "Quel type d'entreprise avez-vous?",
      options: [
        { value: "ecommerce", label: "E-commerce / Boutique en ligne", icon: "🛒" },
        { value: "services", label: "Services professionnels", icon: "💼" },
        { value: "retail", label: "Commerce / Retail", icon: "🏪" },
        { value: "agency", label: "Agence / Conseil", icon: "🎯" },
        { value: "other", label: "Autre type d'entreprise", icon: "🏢" },
      ],
    },
    business_size: {
      title: "Quelle est la taille de votre équipe?",
      options: [
        { value: "solo", label: "Juste moi", icon: "👤" },
        { value: "small", label: "2-5 personnes", icon: "👥" },
        { value: "medium", label: "6-20 personnes", icon: "🏠" },
        { value: "large", label: "Plus de 20 personnes", icon: "🏢" },
      ],
    },
    need: {
      title: "Que souhaitez-vous automatiser?",
      options: [
        { value: "sales", label: "Ventes et suivi clients", icon: "💰" },
        { value: "support", label: "Support client", icon: "🎧" },
        { value: "marketing", label: "Marketing et contenu", icon: "📣" },
        { value: "appointments", label: "Gestion des rendez-vous", icon: "📅" },
        { value: "all", label: "Tout ce qui précède", icon: "🚀" },
      ],
    },
    budget: {
      title: "Quel est votre budget mensuel?",
      options: [
        { value: "starter", label: "Moins de 100€/mois", icon: "💵" },
        { value: "growth", label: "100€ - 200€/mois", icon: "💰" },
        { value: "scale", label: "Plus de 200€/mois", icon: "💎" },
        { value: "custom", label: "Besoin d'un devis", icon: "📋" },
      ],
    },
    summary: {
      title: "Parfait! Nous avons ce qu'il vous faut",
      subtitle: "Basé sur vos réponses, nous pouvons automatiser votre entreprise.",
      cta: "Parler à un conseiller",
      back: "Recommencer",
    },
    bubbleText: "Besoin d'aide?",
  },
};

const businessTypeLabels: Record<Lang, Record<string, string>> = {
  es: {
    ecommerce: "E-commerce",
    services: "Servicios profesionales",
    retail: "Comercio/Retail",
    agency: "Agencia/Consultora",
    other: "Otro negocio",
  },
  en: {
    ecommerce: "E-commerce",
    services: "Professional services",
    retail: "Retail/Store",
    agency: "Agency/Consulting",
    other: "Other business",
  },
  fr: {
    ecommerce: "E-commerce",
    services: "Services professionnels",
    retail: "Commerce/Retail",
    agency: "Agence/Conseil",
    other: "Autre entreprise",
  },
};

const needLabels: Record<Lang, Record<string, string>> = {
  es: {
    sales: "Ventas y seguimiento",
    support: "Atención al cliente",
    marketing: "Marketing y contenido",
    appointments: "Gestión de citas",
    all: "Automatización completa",
  },
  en: {
    sales: "Sales and follow-up",
    support: "Customer support",
    marketing: "Marketing and content",
    appointments: "Appointment management",
    all: "Full automation",
  },
  fr: {
    sales: "Ventes et suivi",
    support: "Support client",
    marketing: "Marketing et contenu",
    appointments: "Gestion rendez-vous",
    all: "Automatisation complète",
  },
};

export default function WhatsAppBubble({ lang, phoneNumber }: WhatsAppBubbleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [answers, setAnswers] = useState<Answers>({
    businessType: "",
    businessSize: "",
    need: "",
    budget: "",
  });

  const t = translations[lang];

  const handleSelect = (field: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));

    // Avanzar al siguiente paso
    const steps: Step[] = ["welcome", "business_type", "business_size", "need", "budget", "summary"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: Step[] = ["welcome", "business_type", "business_size", "need", "budget", "summary"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  const resetChat = () => {
    setStep("welcome");
    setAnswers({
      businessType: "",
      businessSize: "",
      need: "",
      budget: "",
    });
  };

  const generateWhatsAppMessage = () => {
    const businessLabel = businessTypeLabels[lang][answers.businessType] || answers.businessType;
    const needLabel = needLabels[lang][answers.need] || answers.need;

    const messages: Record<Lang, string> = {
      es: `Hola! Vengo del chat de calificación de Jumper.

📊 *Mi perfil:*
• Tipo de negocio: ${businessLabel}
• Tamaño del equipo: ${answers.businessSize === "solo" ? "Solo yo" : answers.businessSize === "small" ? "2-5 personas" : answers.businessSize === "medium" ? "6-20 personas" : "Más de 20 personas"}
• Necesito automatizar: ${needLabel}
• Presupuesto: ${answers.budget === "starter" ? "Menos de $100/mes" : answers.budget === "growth" ? "$100-$200/mes" : answers.budget === "scale" ? "Más de $200/mes" : "Necesito cotización"}

Me gustaría saber más sobre cómo los agentes IA de Jumper pueden ayudar a mi negocio.`,

      en: `Hi! I'm coming from Jumper's qualification chat.

📊 *My profile:*
• Business type: ${businessLabel}
• Team size: ${answers.businessSize === "solo" ? "Just me" : answers.businessSize === "small" ? "2-5 people" : answers.businessSize === "medium" ? "6-20 people" : "More than 20 people"}
• Need to automate: ${needLabel}
• Budget: ${answers.budget === "starter" ? "Less than $100/month" : answers.budget === "growth" ? "$100-$200/month" : answers.budget === "scale" ? "More than $200/month" : "Need a quote"}

I'd like to learn more about how Jumper's AI agents can help my business.`,

      fr: `Bonjour! Je viens du chat de qualification Jumper.

📊 *Mon profil:*
• Type d'entreprise: ${businessLabel}
• Taille de l'équipe: ${answers.businessSize === "solo" ? "Juste moi" : answers.businessSize === "small" ? "2-5 personnes" : answers.businessSize === "medium" ? "6-20 personnes" : "Plus de 20 personnes"}
• Besoin d'automatiser: ${needLabel}
• Budget: ${answers.budget === "starter" ? "Moins de 100€/mois" : answers.budget === "growth" ? "100€-200€/mois" : answers.budget === "scale" ? "Plus de 200€/mois" : "Besoin d'un devis"}

J'aimerais en savoir plus sur comment les agents IA de Jumper peuvent aider mon entreprise.`,
    };

    return encodeURIComponent(messages[lang]);
  };

  const openWhatsApp = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setIsOpen(false);
    resetChat();
  };

  const getProgress = () => {
    const steps: Step[] = ["welcome", "business_type", "business_size", "need", "budget", "summary"];
    const currentIndex = steps.indexOf(step);
    return ((currentIndex) / (steps.length - 1)) * 100;
  };

  return (
    <>
      {/* Burbuja flotante */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative group"
            >
              {/* Efecto de pulso */}
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />

              {/* Botón principal */}
              <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium hidden group-hover:block"
              >
                {t.bubbleText}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-[#1a1a2e] rounded-3xl shadow-2xl overflow-hidden border border-[#2d2d4a]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 relative">
              <button
                onClick={() => {
                  setIsOpen(false);
                  resetChat();
                }}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">Jumper Assistant</h3>
                  <p className="text-white/80 text-sm">Online</p>
                </div>
              </div>

              {/* Progress bar */}
              {step !== "welcome" && (
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${getProgress()}%` }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 min-h-[300px] max-h-[400px] overflow-y-auto">
              <AnimatePresence mode="wait">
                {/* Welcome */}
                {step === "welcome" && (
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="bg-[#252542] rounded-2xl rounded-tl-sm p-4">
                      <h4 className="text-white font-semibold mb-2">{t.welcome.title}</h4>
                      <p className="text-gray-400 text-sm">{t.welcome.subtitle}</p>
                    </div>
                    <button
                      onClick={() => setStep("business_type")}
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                    >
                      {t.welcome.cta}
                    </button>
                  </motion.div>
                )}

                {/* Business Type */}
                {step === "business_type" && (
                  <motion.div
                    key="business_type"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <div className="bg-[#252542] rounded-2xl rounded-tl-sm p-4 mb-4">
                      <h4 className="text-white font-semibold">{t.business_type.title}</h4>
                    </div>
                    {t.business_type.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect("businessType", option.value)}
                        className="w-full flex items-center gap-3 p-3 bg-[#252542] hover:bg-[#2d2d4a] rounded-xl transition-colors text-left group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{option.icon}</span>
                        <span className="text-white">{option.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Business Size */}
                {step === "business_size" && (
                  <motion.div
                    key="business_size"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <div className="bg-[#252542] rounded-2xl rounded-tl-sm p-4 mb-4">
                      <h4 className="text-white font-semibold">{t.business_size.title}</h4>
                    </div>
                    {t.business_size.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect("businessSize", option.value)}
                        className="w-full flex items-center gap-3 p-3 bg-[#252542] hover:bg-[#2d2d4a] rounded-xl transition-colors text-left group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{option.icon}</span>
                        <span className="text-white">{option.label}</span>
                      </button>
                    ))}
                    <button
                      onClick={handleBack}
                      className="w-full py-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      ← Volver
                    </button>
                  </motion.div>
                )}

                {/* Need */}
                {step === "need" && (
                  <motion.div
                    key="need"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <div className="bg-[#252542] rounded-2xl rounded-tl-sm p-4 mb-4">
                      <h4 className="text-white font-semibold">{t.need.title}</h4>
                    </div>
                    {t.need.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect("need", option.value)}
                        className="w-full flex items-center gap-3 p-3 bg-[#252542] hover:bg-[#2d2d4a] rounded-xl transition-colors text-left group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{option.icon}</span>
                        <span className="text-white">{option.label}</span>
                      </button>
                    ))}
                    <button
                      onClick={handleBack}
                      className="w-full py-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      ← Volver
                    </button>
                  </motion.div>
                )}

                {/* Budget */}
                {step === "budget" && (
                  <motion.div
                    key="budget"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <div className="bg-[#252542] rounded-2xl rounded-tl-sm p-4 mb-4">
                      <h4 className="text-white font-semibold">{t.budget.title}</h4>
                    </div>
                    {t.budget.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect("budget", option.value)}
                        className="w-full flex items-center gap-3 p-3 bg-[#252542] hover:bg-[#2d2d4a] rounded-xl transition-colors text-left group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{option.icon}</span>
                        <span className="text-white">{option.label}</span>
                      </button>
                    ))}
                    <button
                      onClick={handleBack}
                      className="w-full py-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      ← Volver
                    </button>
                  </motion.div>
                )}

                {/* Summary */}
                {step === "summary" && (
                  <motion.div
                    key="summary"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div className="bg-[#252542] rounded-2xl rounded-tl-sm p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">✅</span>
                        <h4 className="text-white font-semibold">{t.summary.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm">{t.summary.subtitle}</p>
                    </div>

                    {/* Resumen de respuestas */}
                    <div className="bg-[#252542] rounded-xl p-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Negocio:</span>
                        <span className="text-white">{businessTypeLabels[lang][answers.businessType]}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Equipo:</span>
                        <span className="text-white">
                          {answers.businessSize === "solo" ? (lang === "es" ? "Solo yo" : lang === "en" ? "Just me" : "Juste moi") :
                           answers.businessSize === "small" ? "2-5" :
                           answers.businessSize === "medium" ? "6-20" : "20+"}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Necesidad:</span>
                        <span className="text-white">{needLabels[lang][answers.need]}</span>
                      </div>
                    </div>

                    <button
                      onClick={openWhatsApp}
                      className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      {t.summary.cta}
                    </button>

                    <button
                      onClick={resetChat}
                      className="w-full py-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {t.summary.back}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
              <p className="text-center text-gray-500 text-xs">
                Powered by Jumper Enterprise
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
