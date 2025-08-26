"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModalProps } from "../types/types";
import { modalTranslations } from "../libs/translations";

export default function DemoModal({ isOpen, onClose, lang }: ModalProps) {
  const t = modalTranslations[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    interest: "",
    date: "",
    agent: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error sending lead:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-60"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
                  {t.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {t.desc}
                </p>

                {/* Formulario */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder={t.placeholders.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t.placeholders.email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder={t.placeholders.company}
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <input
                    type="text"
                    name="position"
                    placeholder={t.placeholders.position}
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                  <textarea
                    name="interest"
                    placeholder={t.placeholders.interest}
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />

                  {/* Dropdown de agentes */}
                    <select
                    name="agent"
                    value={formData.agent}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                    <option value="">{t.selectAgent}</option>
                    {(t.agents || [])
                        .filter((agent: { title: string }) => agent.title !== t.premiumTitle)
                        .map((agent: { title: string }) => (
                        <option key={agent.title} value={agent.title} className="text-gray-900">
                            {agent.title}
                        </option>
                        ))}
                    </select>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    {isSubmitting ? t.submitting : t.submit}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {t.successTitle}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {t.successDesc}
                </p>
                <button
                  onClick={onClose}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  {t.close}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
