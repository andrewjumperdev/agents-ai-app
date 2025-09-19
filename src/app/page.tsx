"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import DemoModal from "./components/DemoModal";
import VoiceAgent from "./components/VoiceAgent";
import { translations } from "./libs/translations";
import { Lang } from "./types/types";

const LANGS: Lang[] = ["es", "en", "fr"];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("es");
  const [mounted, setMounted] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const whatsappNumber = "+50661661848";

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("lang");
    if (savedLang && LANGS.includes(savedLang as Lang)) setLang(savedLang as Lang);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("lang", lang);
  }, [lang, mounted]);

  if (!mounted) return null;
  const t = translations[lang];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 flex flex-col">
        {/* Navbar */}
        <Navbar links={[]} lang={lang} setLang={setLang} />

        {/* Hero */}
        <section className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto px-4 py-16 gap-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t.heroTitle} 🚀
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  t.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                {t.cta} – ¡Empieza hoy!
              </a>
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {t.ctaDemo} – Ver demo
              </button>
            </div>
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
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </motion.div>
        </section>

        {/* Features / Benefits */}
        <section className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {t.agents.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-6 bg-gradient-to-br from-blue-100 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl hover:scale-105 transition transform"
              >
                <div className="text-4xl mb-3">{a.icon}</div>
                <h3 className="text-xl font-bold mb-2">{a.title}</h3>
                <p className="text-sm opacity-80">{a.desc}</p>
                {/* <p className="mt-2 text-green-600 font-semibold">
                  {a.benefit ?? "Resultados inmediatos"} 📈
                </p> */}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {t.testimonial.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:scale-105 transform transition"
              >
                <blockquote className="italic text-base md:text-lg mb-4 text-gray-800 dark:text-gray-200">
                  “{t.quote}”
                </blockquote>
                <p className="font-semibold text-right text-gray-900 dark:text-gray-100">
                  {t.author}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Demo CTA */}
        <section id="demo" className="py-16 bg-blue-600 text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.demoTitle}
            </h2>
            <p className="mb-8 opacity-90">{t.demoDesc}</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                {t.demoWhatsapp}
              </Link>
              <Link
                href="https://calendly.com/aacpariscr/new-meeting"
                target="_blank"
                className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                {t.demoCalendly}
              </Link>
            </div>
          </div>
        </section>

        {/* Voice Agent */}
        <VoiceAgent />

        {/* Footer */}
        <footer className="py-6 px-4 bg-gray-50 dark:bg-gray-900 text-center opacity-80 text-sm">
          <p>
            © {new Date().getFullYear()} Jumper Enterprise. Tous droits réservés.
          </p>
        </footer>
      </div>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        lang={lang}
      />
    </>
  );
}
