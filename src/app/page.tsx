"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import DemoModal from "./components/DemoModal";
import WhatsAppBubble from "./components/WhatsAppBubble";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import IntegrationsSection from "./components/IntegrationsSection";
import { translations } from "./libs/translations";
import { Lang } from "./types/types";
import { fbq } from "./utils/fbq";

const LANGS: Lang[] = ["es", "en", "fr"];

/* ─── Agent icon map ──────────────────────────────────────────── */
const agentColors = [
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#f97316",
  "#eab308",
];

const agentIcons = ["📞", "⭐", "📅", "📝", "🗂️", "🛒", "📧", "🏆"];

/* ─── Fade-in section wrapper ─────────────────────────────────── */
const FadeUp = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Dashboard mockup ────────────────────────────────────────── */
const DashboardMockup = ({ lang }: { lang: Lang }) => {
  const [tick, setTick] = useState(0);
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setChatStep((n) => (n < 3 ? n + 1 : n)),
      1400
    );
    return () => clearInterval(t);
  }, []);

  const leads = 247 + (tick % 3);
  const appts = 89 + (tick % 2);

  const chatMessages = [
    {
      from: "lead",
      text: lang === "fr" ? "Bonjour, je cherche plus d'infos 👋" : lang === "en" ? "Hi, looking for more info 👋" : "Hola, busco información 👋",
    },
    {
      from: "bot",
      text:
        lang === "fr"
          ? "Bonjour! Quel est le principal défi de votre entreprise? 🎯"
          : lang === "en"
          ? "Hi! What's your business biggest challenge right now? 🎯"
          : "¡Hola! ¿Cuál es el mayor reto de tu negocio ahora mismo? 🎯",
    },
    {
      from: "lead",
      text:
        lang === "fr"
          ? "Trop de travail manuel, on perd des clients..."
          : lang === "en"
          ? "Too much manual work, losing clients..."
          : "Demasiado trabajo manual, perdemos clientes...",
    },
    {
      from: "bot",
      text:
        lang === "fr"
          ? "Parfait. Je peux automatiser ça. Quand êtes-vous disponible pour une démo? ✅"
          : lang === "en"
          ? "Perfect. I can automate that. When are you available for a demo? ✅"
          : "Perfecto. Puedo automatizar eso. ¿Cuándo tienes disponibilidad para una demo? ✅",
    },
  ];

  const agentStatuses =
    lang === "fr"
      ? [
          { name: "Sales AI", status: "Appel lead #43 en cours", color: "#f59e0b" },
          { name: "Review AI", status: "12 demandes d'avis envoyées", color: "#10b981" },
          { name: "Scheduling AI", status: "3 RDV confirmés aujourd'hui", color: "#3b82f6" },
        ]
      : lang === "en"
      ? [
          { name: "Sales AI", status: "Calling lead #43", color: "#f59e0b" },
          { name: "Review AI", status: "12 review requests sent", color: "#10b981" },
          { name: "Scheduling AI", status: "3 appointments confirmed today", color: "#3b82f6" },
        ]
      : [
          { name: "Sales AI", status: "Llamando lead #43", color: "#f59e0b" },
          { name: "Review AI", status: "12 solicitudes enviadas", color: "#10b981" },
          { name: "Scheduling AI", status: "3 citas confirmadas hoy", color: "#3b82f6" },
        ];

  return (
    <div className="relative">
      {/* Glow halos */}
      <div className="absolute -inset-8 bg-amber-500/8 rounded-3xl blur-3xl pointer-events-none" />
      <div className="absolute -inset-8 bg-violet-500/6 rounded-3xl blur-3xl pointer-events-none" style={{ transform: "translate(20px, -20px)" }} />

      {/* Window chrome */}
      <div className="relative bg-[#0d0d14] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
        {/* Title bar */}
        <div className="bg-[#090910] border-b border-white/8 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-500 font-medium">Jumper AI — Dashboard</span>
          </div>
          <div className="w-16" />
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-3">
          {/* Metrics row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              {
                label: lang === "fr" ? "Leads actifs" : lang === "en" ? "Active leads" : "Leads activos",
                value: leads,
                change: "+34%",
                color: "#f59e0b",
              },
              {
                label: lang === "fr" ? "RDV agendés" : lang === "en" ? "Booked appts" : "Citas agendadas",
                value: appts,
                change: "+28%",
                color: "#10b981",
              },
              {
                label: lang === "fr" ? "Taux rép." : lang === "en" ? "Response rate" : "Tasa respuesta",
                value: "94%",
                change: lang === "fr" ? "Auto" : "Auto",
                color: "#8b5cf6",
              },
            ].map((m, i) => (
              <div key={i} className="bg-[#111118] rounded-xl p-3">
                <p className="text-xs text-gray-500 mb-1">{m.label}</p>
                <p className="text-xl font-bold text-white counter">{m.value}</p>
                <p className="text-xs font-medium mt-0.5" style={{ color: m.color }}>
                  ↑ {m.change}
                </p>
              </div>
            ))}
          </div>

          {/* Active agents */}
          <div className="bg-[#111118] rounded-xl p-3">
            <p className="text-xs text-gray-500 mb-2.5">
              {lang === "fr" ? "Agents actifs" : lang === "en" ? "Active agents" : "Agentes activos"}
            </p>
            <div className="space-y-2">
              {agentStatuses.map((a) => (
                <div key={a.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="live-dot"
                      style={{ background: a.color, boxShadow: `0 0 0 0 ${a.color}40` }}
                    />
                    <span className="text-xs font-semibold text-white">{a.name}</span>
                  </div>
                  <span className="text-xs text-gray-500">{a.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp chat preview */}
          <div className="bg-[#0a1308] rounded-xl p-3 border border-emerald-900/30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-xs text-emerald-400 font-semibold">WhatsApp — Sales AI</span>
              <span className="ml-auto text-xs text-gray-600">
                {lang === "fr" ? "Maintenant" : lang === "en" ? "Just now" : "Ahora"}
              </span>
            </div>
            <div className="space-y-2">
              {chatMessages.slice(0, chatStep + 1).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[85%] rounded-xl px-3 py-2 ${
                    msg.from === "lead"
                      ? "bg-[#1c2e1a] ml-0"
                      : "bg-amber-500/15 border border-amber-500/20 ml-auto"
                  }`}
                >
                  <p className="text-xs text-gray-200 leading-relaxed">{msg.text}</p>
                </motion.div>
              ))}
              {chatStep < 3 && (
                <div className="flex items-center gap-1 px-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="w-1.5 h-1.5 rounded-full bg-gray-600 animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Page ───────────────────────────────────────────────── */
export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("es");
  const [mounted, setMounted] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeAgent, setActiveAgent] = useState<number | null>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const whatsappNumber = "+50661661848";


  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("lang");
    if (saved && LANGS.includes(saved as Lang)) setLang(saved as Lang);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  if (!mounted) return null;
  const t = translations[lang];

  const openDemo = () => {
    fbq("Lead");
    setIsDemoModalOpen(true);
  };

  const handleSelectPlan = (plan: string) => {
    fbq("Lead");
    if (
      plan === "Business+" ||
      plan === "Personalizado" ||
      plan === "Custom" ||
      plan === "Sur mesure"
    ) {
      setIsDemoModalOpen(true);
    } else {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          `Hola, me interesa el plan ${plan} de Jumper AI Agents.`
        )}`,
        "_blank"
      );
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#060609] text-gray-100">
        <Navbar links={[]} lang={lang} setLang={setLang} onOpenDemo={openDemo} />

        {/* ─── HERO ──────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero-bg">
          {/* Background grid */}
          <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

          {/* Glow orbs */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/6 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-6 lg:px-16 pt-28 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              {/* Left: Copy */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 hero-badge mb-8"
                >
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                  {t.heroBadge}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
                >
                  <span className="text-white">{t.heroTitle.split(".")[0]}.</span>
                  <br />
                  <span className="gradient-text-amber">
                    {t.heroTitle.split(".").slice(1).join(".").trim()}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed mb-10"
                >
                  {t.heroDesc}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="flex flex-col sm:flex-row gap-3 mb-10"
                >
                  <button
                    onClick={openDemo}
                    className="btn-primary text-base inline-flex items-center justify-center gap-2 group"
                  >
                    {t.cta}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-secondary text-base"
                  >
                    {t.ctaDemo}
                  </button>
                </motion.div>

                {/* Social proof row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap items-center gap-6"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 font-medium">{t.heroRating}</span>
                  </div>
                  <div className="h-4 w-px bg-white/10" />
                  {t.flashBenefits.map((b, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-sm text-gray-500">
                      <span className="text-base">{b.icon}</span>
                      {b.text}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right: Dashboard mockup */}
              <motion.div
                initial={{ opacity: 0, x: 32, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block"
              >
                <DashboardMockup lang={lang} />
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-5 h-9 rounded-full border border-white/15 flex justify-center pt-1.5"
            >
              <div className="w-1 h-2 bg-amber-500/60 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* ─── TRUST BAR ─────────────────────────────────────── */}
        <div className="border-y border-white/5 bg-[#0d0d14] py-6 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
              <span className="text-xs text-gray-600 font-medium uppercase tracking-widest">
                {t.trustBarLabel || "Confianza de"}
              </span>
              {[
                lang === "fr" ? "Restaurants" : lang === "en" ? "Restaurants" : "Restaurantes",
                lang === "fr" ? "Cliniques" : lang === "en" ? "Clinics" : "Clínicas",
                lang === "fr" ? "Coachs" : lang === "en" ? "Coaches" : "Coaches",
                lang === "fr" ? "Immobilier" : lang === "en" ? "Real Estate" : "Inmobiliarias",
                "E-Commerce",
                lang === "fr" ? "Agences" : lang === "en" ? "Agencies" : "Agencias",
              ].map((sector) => (
                <div
                  key={sector}
                  className="flex items-center gap-2 text-sm text-gray-500 font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── PAIN POINTS ───────────────────────────────────── */}
        {t.painPoints && (
          <section className="py-24 px-6 bg-[#060609]">
            <div className="max-w-6xl mx-auto">
              <FadeUp className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {t.painPointsTitle}
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                  {t.painPointsSubtitle}
                </p>
              </FadeUp>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.painPoints.map((pain, i) => (
                  <FadeUp key={i} delay={i * 0.07}>
                    <div className="pain-card p-6 h-full">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 text-lg">
                          {pain.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2 leading-snug">
                            {pain.title}
                          </h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{pain.desc}</p>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* Bridge CTA */}
              <FadeUp delay={0.5} className="text-center mt-14">
                <div className="inline-flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="h-px w-16 bg-white/10" />
                    <span className="text-sm">
                      {lang === "fr"
                        ? "Jumper automatise tout ça"
                        : lang === "en"
                        ? "Jumper automates all of this"
                        : "Jumper automatiza todo eso"}
                    </span>
                    <div className="h-px w-16 bg-white/10" />
                  </div>
                  <button onClick={openDemo} className="btn-primary inline-flex items-center gap-2">
                    {lang === "fr"
                      ? "Voir comment →"
                      : lang === "en"
                      ? "See how →"
                      : "Ver cómo →"}
                  </button>
                </div>
              </FadeUp>
            </div>
          </section>
        )}

        {/* ─── AGENTS ────────────────────────────────────────── */}
        <section id="agents" className="py-24 px-6 bg-[#0d0d14]">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="text-center mb-16">
              <span className="badge-amber mb-4 inline-block">
                {lang === "fr" ? "Vos agents IA" : lang === "en" ? "Your AI agents" : "Tus agentes IA"}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {t.agentsSectionTitle}
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                {t.agentsSectionSubtitle}
              </p>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.agents.map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: (index % 4) * 0.08, duration: 0.5 }}
                  onMouseEnter={() => setActiveAgent(index)}
                  onMouseLeave={() => setActiveAgent(null)}
                  className="agent-card rounded-2xl p-5 cursor-pointer relative"
                  style={{
                    borderColor: activeAgent === index ? `${agentColors[index]}40` : undefined,
                    boxShadow: activeAgent === index ? `0 0 40px ${agentColors[index]}12` : undefined,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{ backgroundColor: `${agentColors[index]}15`, border: `1px solid ${agentColors[index]}25` }}
                  >
                    {agentIcons[index]}
                  </div>

                  {/* Name label */}
                  {agent.name && (
                    <span
                      className="inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2"
                      style={{
                        backgroundColor: `${agentColors[index]}15`,
                        color: agentColors[index],
                        border: `1px solid ${agentColors[index]}25`,
                      }}
                    >
                      {agent.name}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                    {agent.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{agent.desc}</p>

                  {/* Features */}
                  <AnimatePresence>
                    {activeAgent === index && agent.features && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-white/6 pt-4 space-y-2"
                      >
                        {agent.features.map((f, fi) => (
                          <div key={fi} className="flex items-center gap-2 text-xs text-gray-400">
                            <svg
                              className="w-3.5 h-3.5 flex-shrink-0"
                              style={{ color: agentColors[index] }}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {f}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <FadeUp delay={0.3} className="text-center mt-12">
              <button onClick={openDemo} className="btn-primary inline-flex items-center gap-2">
                {lang === "fr"
                  ? "Voir tous les agents en action"
                  : lang === "en"
                  ? "See all agents in action"
                  : "Ver todos los agentes en acción"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </FadeUp>
          </div>
        </section>

        {/* ─── INDUSTRIES ────────────────────────────────────── */}
        {t.industries && (
          <section className="py-24 px-6 bg-[#060609]">
            <div className="max-w-6xl mx-auto">
              <FadeUp className="text-center mb-14">
                <span className="badge-amber mb-4 inline-block">
                  {lang === "fr" ? "Par secteur" : lang === "en" ? "By industry" : "Por industria"}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {t.industriesTitle}
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                  {t.industriesSubtitle}
                </p>
              </FadeUp>

              {/* Tab bar */}
              <FadeUp className="flex gap-2 overflow-x-auto pb-2 mb-10 no-scrollbar">
                {t.industries.map((ind, i) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(i)}
                    className={`industry-tab ${activeIndustry === i ? "active" : "text-gray-500"}`}
                  >
                    {ind.icon} {ind.label}
                  </button>
                ))}
              </FadeUp>

              {/* Industry panel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#0d0d14] border border-white/7 rounded-2xl overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Left: pain + automations */}
                    <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/7">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">{t.industries[activeIndustry].icon}</span>
                        <h3 className="text-xl font-bold text-white">
                          {t.industries[activeIndustry].label}
                        </h3>
                      </div>

                      {/* Pain */}
                      <div className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/15 rounded-xl mb-6">
                        <span className="text-red-400 text-lg mt-0.5">⚠</span>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {t.industries[activeIndustry].pain}
                        </p>
                      </div>

                      {/* Automations */}
                      <p className="text-xs text-gray-600 uppercase tracking-widest mb-4 font-medium">
                        {lang === "fr" ? "Jumper automatise" : lang === "en" ? "Jumper automates" : "Jumper automatiza"}
                      </p>
                      <div className="space-y-3">
                        {t.industries[activeIndustry].automations.map((auto, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-amber-500/15 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-300">{auto}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: result */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-6">
                        <span className="text-xs text-gray-600 uppercase tracking-widest font-medium">
                          {lang === "fr" ? "Résultat" : lang === "en" ? "Result" : "Resultado"}
                        </span>
                      </div>
                      <div className="bg-amber-500/8 border border-amber-500/20 rounded-xl p-6 mb-8">
                        <p className="text-base text-gray-200 leading-relaxed">
                          &ldquo;{t.industries[activeIndustry].result}&rdquo;
                        </p>
                      </div>
                      <button
                        onClick={openDemo}
                        className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                      >
                        {lang === "fr"
                          ? `Automatiser mon ${t.industries[activeIndustry].label.toLowerCase()}`
                          : lang === "en"
                          ? `Automate my ${t.industries[activeIndustry].label.toLowerCase()}`
                          : `Automatizar mi ${t.industries[activeIndustry].label.toLowerCase()}`}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* ─── PROCESS ───────────────────────────────────────── */}
        {t.process && (
          <section id="process" className="py-24 px-6 bg-[#0d0d14]">
            <div className="max-w-5xl mx-auto">
              <FadeUp className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {t.processTitle}
                </h2>
                <p className="text-lg text-gray-500">{t.processSubtitle}</p>
              </FadeUp>

              <div className="grid md:grid-cols-3 gap-8 relative">
                {t.process.map((step, i) => (
                  <FadeUp key={i} delay={i * 0.12}>
                    <div className="relative text-center p-8 bg-[#111118] border border-white/6 rounded-2xl h-full">
                      {/* Connector line */}
                      {i < t.process!.length - 1 && (
                        <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 w-full h-px bg-gradient-to-r from-amber-500/30 to-transparent z-10" />
                      )}

                      {/* Number */}
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center mx-auto mb-6">
                        <span className="text-amber-400 font-bold text-lg">{step.number}</span>
                      </div>

                      <div className="text-3xl mb-4">{step.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.4} className="text-center mt-12">
                <button onClick={openDemo} className="btn-primary inline-flex items-center gap-2">
                  {lang === "fr"
                    ? "Commencer l'onboarding"
                    : lang === "en"
                    ? "Start onboarding"
                    : "Comenzar onboarding"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </FadeUp>
            </div>
          </section>
        )}

        {/* ─── RESULTS / METRICS ─────────────────────────────── */}
        {t.results && (
          <section className="py-24 px-6 bg-[#060609] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/4 to-violet-500/4 pointer-events-none" />
            <div className="max-w-5xl mx-auto relative z-10">
              <FadeUp className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {t.resultsTitle}
                </h2>
              </FadeUp>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {t.results.map((r, i) => (
                  <FadeUp key={i} delay={i * 0.1}>
                    <div className="text-center p-6 bg-[#0d0d14] border border-white/7 rounded-2xl">
                      <p className="text-4xl md:text-5xl font-extrabold gradient-text-amber mb-2 counter tracking-tight">
                        {r.value}
                      </p>
                      <p className="text-sm font-semibold text-white mb-1">{r.label}</p>
                      {r.desc && <p className="text-xs text-gray-600">{r.desc}</p>}
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── TESTIMONIALS ──────────────────────────────────── */}
        <section id="testimonials" className="py-24 px-6 bg-[#0d0d14]">
          <div className="max-w-6xl mx-auto">
            <FadeUp className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                {t.testimonialTitle}
              </h2>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-6">
              {t.testimonial.map((item, i) => (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="testimonial-card p-8 h-full flex flex-col">
                    <p className="text-gray-400 leading-relaxed mb-6 flex-1 relative z-10 pt-6 text-sm">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 border-t border-white/6 pt-5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                        {item.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{item.author}</p>
                        <p className="text-xs text-gray-500">
                          {item.role}
                          {item.company && `, ${item.company}`}
                        </p>
                      </div>
                      <div className="ml-auto flex">
                        {[0, 1, 2, 3, 4].map((s) => (
                          <svg key={s} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INTEGRATIONS ──────────────────────────────────── */}
        <IntegrationsSection t={t} />

        {/* ─── PRICING ───────────────────────────────────────── */}
        <PricingSection t={t} onSelectPlan={handleSelectPlan} />

        {/* ─── FAQ ───────────────────────────────────────────── */}
        <FAQSection t={t} />

        {/* ─── FINAL CTA ─────────────────────────────────────── */}
        <section id="demo" className="cta-section py-24 px-6">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <FadeUp>
              <span className="inline-block bg-black/15 text-black/80 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                {lang === "fr"
                  ? "Commencez maintenant"
                  : lang === "en"
                  ? "Get started now"
                  : "Empieza hoy"}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-5 tracking-tight leading-tight">
                {t.demoTitle}
              </h2>
              <p className="text-lg text-black/70 mb-10 max-w-xl mx-auto">{t.demoDesc}</p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.whatsappMessage)}`}
                  target="_blank"
                  onClick={() => fbq("Lead")}
                  className="bg-black text-amber-400 px-7 py-4 rounded-xl font-bold text-base hover:bg-gray-900 transition-all inline-flex items-center justify-center gap-3 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.demoWhatsapp}
                </Link>
                <button
                  onClick={openDemo}
                  className="bg-white/20 backdrop-blur text-black px-7 py-4 rounded-xl font-bold text-base hover:bg-white/30 transition-all border-2 border-black/15"
                >
                  {t.demoCalendly}
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-10 text-black/60 text-sm">
                {[
                  t.freeTrialDays || "7 días gratis",
                  lang === "fr"
                    ? "Sans carte bancaire"
                    : lang === "en"
                    ? "No credit card"
                    : "Sin tarjeta de crédito",
                  lang === "fr"
                    ? "Annulez n'importe quand"
                    : lang === "en"
                    ? "Cancel anytime"
                    : "Cancela cuando quieras",
                ].map((text, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-black/50" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ─── FOOTER ────────────────────────────────────────── */}
        <footer className="py-12 px-6 bg-[#060609] border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
                  <span className="text-amber-400 font-black text-sm">J</span>
                </div>
                <div>
                  <span className="font-bold text-white text-lg">
                    Jumper<span className="text-amber-500">AI</span>
                  </span>
                  <p className="text-xs text-gray-600 mt-0.5">{t.footerText}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <Link href={`/blog/${lang}`} className="text-gray-500 hover:text-amber-400 transition-colors">
                  Blog
                </Link>
                <button
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-500 hover:text-amber-400 transition-colors"
                >
                  {lang === "fr" ? "Tarifs" : lang === "en" ? "Pricing" : "Precios"}
                </button>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-500 hover:text-amber-400 transition-colors"
                >
                  FAQ
                </button>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-amber-400 transition-colors"
                >
                  {lang === "fr" ? "Contact" : lang === "en" ? "Contact" : "Contacto"}
                </a>
              </div>

              <a
                href="https://www.linkedin.com/company/jumper-enterprise/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-amber-400 hover:border-amber-500/30 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} lang={lang} />
      <WhatsAppBubble lang={lang} phoneNumber={whatsappNumber} />
    </>
  );
}
