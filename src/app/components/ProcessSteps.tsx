"use client";
import React from "react";
import { motion } from "framer-motion";
import { Translation } from "../types/types";

interface ProcessStepsProps {
  t: Translation;
}

export default function ProcessSteps({ t }: ProcessStepsProps) {
  if (!t.process) return null;

  return (
    <section id="process" className="py-24 px-4 bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.processTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.processSubtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/20 via-amber-500 to-amber-500/20 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {t.process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-[#1a1a2e] border border-[#2d2d4a] rounded-3xl p-8 text-center hover:border-amber-500/50 transition-colors group">
                  {/* Number badge */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-2xl font-bold text-black group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < t.process!.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <svg
                      className="w-8 h-8 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA after process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            ¿Listo para empezar? Tu equipo IA puede estar operativo en 24 horas.
          </p>
          <a
            href="#demo"
            className="btn-primary inline-flex items-center gap-2"
          >
            Comenzar ahora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
