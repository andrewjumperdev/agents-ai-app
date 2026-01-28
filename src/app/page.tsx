"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import DemoModal from "./components/DemoModal";
import WhatsAppBubble from "./components/WhatsAppBubble";
// import VoiceAgent from "./components/VoiceAgent";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import IntegrationsSection from "./components/IntegrationsSection";
import ProcessSteps from "./components/ProcessSteps";
import { translations } from "./libs/translations";
import { Lang } from "./types/types";
import { fbq } from "./utils/fbq";

const LANGS: Lang[] = ["es", "en", "fr"];

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("es");
  const [mounted, setMounted] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeAgent, setActiveAgent] = useState<number | null>(null);
  const whatsappNumber = "+50661661848";

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("lang");
    if (savedLang && LANGS.includes(savedLang as Lang))
      setLang(savedLang as Lang);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  if (!mounted) return null;
  const t = translations[lang];

  const handleSelectPlan = (plan: string) => {
    fbq("Lead");
    if (plan === "Business+" || plan === "Personalizado" || plan === "Custom" || plan === "Sur mesure") {
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
      <div className="min-h-screen bg-[#0a0a0f] text-gray-100">
        {/* Navbar */}
        <Navbar links={[]} lang={lang} setLang={setLang} />

        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="particle w-2 h-2 top-1/4 left-1/4" style={{ animationDelay: "0s" }} />
            <div className="particle w-3 h-3 top-1/3 right-1/4" style={{ animationDelay: "1s" }} />
            <div className="particle w-2 h-2 top-2/3 left-1/3" style={{ animationDelay: "2s" }} />
            <div className="particle w-4 h-4 bottom-1/4 right-1/3" style={{ animationDelay: "0.5s" }} />
          </div>

          <div className="container mx-auto px-6 lg:px-20 py-32 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 hero-badge mb-8"
              >
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                {t.heroBadge}
              </motion.div>

              {/* Main headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
              >
                <span className="text-white">{t.heroTitle.split(" ").slice(0, 2).join(" ")} </span>
                <span className="gradient-text">{t.heroTitle.split(" ").slice(2, 4).join(" ")}</span>
                <span className="text-white"> {t.heroTitle.split(" ").slice(4).join(" ")}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-amber-400 font-semibold mb-6"
              >
                {t.heroSubtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8"
              >
                {t.heroDesc}
              </motion.p>

              {/* Rating */}
              {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center gap-2 mb-10"
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400">{t.heroRating}</span>
              </motion.div> */}

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              >
                <button
                  onClick={() => {
                    fbq("Lead");
                    setIsDemoModalOpen(true);
                  }}
                  className="btn-primary text-lg"
                >
                  {t.cta}
                </button>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="btn-secondary text-lg"
                >
                  {t.ctaDemo}
                </button>
              </motion.div>

              {/* Flash benefits */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-6"
              >
                {t.flashBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <span className="text-xl">{benefit.icon}</span>
                    <span>{benefit.text}</span>
                  </div>
                ))}
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
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
            >
              <div className="w-1 h-2 bg-amber-500 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* AGENTS SECTION */}
        <section id="agents" className="py-24 px-4 bg-[#0a0a0f]">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t.agentsSectionTitle}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t.agentsSectionSubtitle}
              </p>
            </motion.div>

            {/* Agents Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {t.agents.map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveAgent(index)}
                  onMouseLeave={() => setActiveAgent(null)}
                  layout
                  className="agent-card rounded-3xl p-6 relative cursor-pointer origin-top"
                  animate={{
                    scale: activeAgent === index ? 1.02 : 1,
                    zIndex: activeAgent === index ? 50 : 1,
                  }}
                  style={{
                    borderColor: activeAgent === index ? agent.color : undefined,
                    boxShadow: activeAgent === index ? `0 0 40px ${agent.color}40` : undefined,
                  }}
                >
                  {/* Agent number */}
                  <div
                    className="agent-number"
                    style={{ backgroundColor: agent.color }}
                  >
                    {index + 1}
                  </div>

                  {/* Icon and name */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                      style={{ backgroundColor: `${agent.color}20` }}
                      animate={{
                        scale: activeAgent === index ? 1.1 : 1,
                        rotate: activeAgent === index ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {agent.icon}
                    </motion.div>
                    <div>
                      {agent.name && (
                        <p className="text-amber-500 font-semibold text-sm">
                          {agent.name}
                        </p>
                      )}
                      <h3 className="text-xl font-bold text-white">
                        {agent.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {agent.desc}
                  </p>

                  {/* Features - Overlay style */}
                  {agent.features && (
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: activeAgent === index ? 1 : 0,
                        height: activeAgent === index ? "auto" : 0,
                        marginTop: activeAgent === index ? 16 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 pt-4 border-t border-gray-700">
                        {agent.features.map((feature, fi) => (
                          <motion.div
                            key={fi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{
                              opacity: activeAgent === index ? 1 : 0,
                              x: activeAgent === index ? 0 : -10,
                            }}
                            transition={{ delay: fi * 0.05, duration: 0.2 }}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <svg
                              className="w-4 h-4 flex-shrink-0"
                              style={{ color: agent.color }}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA after agents */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="btn-primary inline-flex items-center gap-2"
              >
                Ver todos los agentes en acción
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <ProcessSteps t={t} />

        {/* INTEGRATIONS */}
        <IntegrationsSection t={t} />

        {/* TESTIMONIALS */}
        <section id="testimonials" className="py-24 px-4 bg-[#0a0a0f]">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {t.testimonialTitle}
              </h2>
              {/* <p className="text-xl text-gray-400">
                {t.testimonialSubtitle}
              </p> */}
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {t.testimonial.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="testimonial-card p-8"
                >
                  {/* Quote */}
                  <p className="text-gray-300 leading-relaxed mb-6 relative z-10 pt-8">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-black font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16"
            >
              {[
                // { value: "+150", label: "Empresas activas" },
                { value: "4.9/5", label: "Satisfacción cliente" },
                { value: "80%", label: "Tareas automatizadas" },
                { value: "24/7", label: "Disponibilidad" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PRICING */}
        <PricingSection t={t} onSelectPlan={handleSelectPlan} />

        {/* FAQ */}
        <FAQSection t={t} />

        {/* FINAL CTA */}
        <section id="demo" className="cta-section py-24 px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                {t.demoTitle}
              </h2>
              <p className="text-xl text-black/80 mb-10">
                {t.demoDesc}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.whatsappMessage)}`}
                  target="_blank"
                  onClick={() => fbq("Lead")}
                  className="bg-black text-amber-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.demoWhatsapp}
                </Link>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="bg-white/20 backdrop-blur text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors border-2 border-black/20"
                >
                  {t.demoCalendly}
                </button>
              </div>

              {/* Trust elements */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 text-black/70">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t.freeTrialDays}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Sin tarjeta de crédito
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Cancela cuando quieras
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Voice Agent */}
        {/* <VoiceAgent /> */}

        {/* Footer */}
        <footer className="py-12 px-4 bg-[#0a0a0f] border-t border-[#1a1a2e]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold gradient-text mb-2">Jumper</h3>
                <p className="text-gray-500 text-sm">{t.footerText}</p>
              </div>

              <div className="flex items-center gap-6">
                <Link href="/blog/es" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Blog
                </Link>
                <Link href="#pricing" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Precios
                </Link>
                <Link href="#faq" className="text-gray-400 hover:text-amber-500 transition-colors">
                  FAQ
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Contacto
                </a>
              </div>

              <div className="flex items-center gap-4">
                {/* <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-[#252542] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a> */}
                <a
                  href="https://www.linkedin.com/company/jumper-enterprise/"
                  className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-gray-400 hover:text-amber-500 hover:bg-[#252542] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        lang={lang}
      />

      {/* WhatsApp Bubble with Qualification */}
      <WhatsAppBubble lang={lang} phoneNumber={whatsappNumber} />
    </>
  );
}
