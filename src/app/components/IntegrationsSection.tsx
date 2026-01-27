"use client";
import React from "react";
import { motion } from "framer-motion";
import { Translation } from "../types/types";

interface IntegrationsSectionProps {
  t: Translation;
}

export default function IntegrationsSection({ t }: IntegrationsSectionProps) {
  if (!t.integrations) return null;

  return (
    <section id="integrations" className="py-24 px-4 bg-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.integrationsTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.integrationsSubtitle}
          </p>
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {t.integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="integration-icon flex flex-col items-center justify-center aspect-square cursor-pointer group"
            >
              <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                {integration.icon}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors text-center">
                {integration.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* More integrations badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#252542] px-6 py-3 rounded-full border border-[#2d2d4a]">
            <span className="text-gray-400">Y muchas más integraciones...</span>
            <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </motion.div>

        {/* Integration flow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Your Tools */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h4 className="text-white font-semibold">Tus herramientas</h4>
                <p className="text-gray-400 text-sm">CRM, Email, Calendar...</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <svg className="w-24 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 100 32">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M0 16h90M80 6l10 10-10 10" />
                </svg>
              </div>
              <div className="md:hidden">
                <svg className="w-8 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 32 48">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 0v40M6 30l10 10 10-10" />
                </svg>
              </div>

              {/* Jumper Hub */}
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center animate-pulse-glow">
                  <span className="text-4xl">🚀</span>
                </div>
                <h4 className="text-white font-bold text-lg">Jumper</h4>
                <p className="text-gray-400 text-sm">Central de automatización</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <svg className="w-24 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 100 32">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M0 16h90M80 6l10 10-10 10" />
                </svg>
              </div>
              <div className="md:hidden">
                <svg className="w-8 h-12 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 32 48">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 0v40M6 30l10 10 10-10" />
                </svg>
              </div>

              {/* Results */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <span className="text-3xl">📈</span>
                </div>
                <h4 className="text-white font-semibold">Resultados</h4>
                <p className="text-gray-400 text-sm">Más ventas, menos trabajo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
