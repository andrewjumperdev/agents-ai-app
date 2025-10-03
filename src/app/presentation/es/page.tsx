"use client";

import AgentsGrid from "@/app/components/AgentsGrid";
import BrainFlow from "@/app/components/BrainFlow";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function AIProductPresentation() {
  const [salesCount, setSalesCount] = useState(0);
  const [hoursSaved, setHoursSaved] = useState(0);

  console.log("Sales Count:", salesCount);
  // Animación de contadores
  useEffect(() => {
    const salesInterval = setInterval(() => {
      setSalesCount((prev) => (prev < 25 ? prev + 1 : 25));
    }, 50);

    const hoursInterval = setInterval(() => {
      setHoursSaved((prev) => (prev < 10 ? prev + 1 : 10));
    }, 100);

    return () => {
      clearInterval(salesInterval);
      clearInterval(hoursInterval);
    };
  }, []);

  return (
    <main className="w-full h-screen overflow-y-scroll snap-y snap-mandatory font-sans">
      {/* Hero Slide */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-700 text-white snap-start px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Image
            src="/logo.svg"
            alt="Jumper Enterprise Logo"
            width={120}
            height={120}
            className="rounded-full shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center"
        >
          Sobre Jumper Enterprise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl max-w-3xl text-center leading-relaxed"
        >
          Nacimos con una misión clara:{" "}
          <span className="font-semibold">
            liberar a las empresas de tareas repetitivas y maximizar sus ventas
          </span>
          . En Jumper Enterprise creemos que la{" "}
          <span className="underline decoration-yellow-400">
            automatización con IA
          </span>{" "}
          no es el futuro, es el presente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
        >
          <div className="p-6 bg-white/10 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-extrabold text-yellow-400">+400</p>
            <p className="mt-2">Leads generados cada mes</p>
          </div>
          <div className="p-6 bg-white/10 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-extrabold text-yellow-400">10h+</p>
            <p className="mt-2">Ahorro semanal en gestión</p>
          </div>
          <div className="p-6 bg-white/10 rounded-2xl shadow-lg text-center">
            <p className="text-4xl font-extrabold text-yellow-400">#1</p>
            <p className="mt-2">Agencia de automatización con AI</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl max-w-3xl text-center text-indigo-100"
        >
          Nuestra diferencia: combinamos{" "}
          <span className="font-semibold">
            tecnología propia, consultoría estratégica y soporte humano
          </span>
          . Por eso las empresas ya confían en nosotros para crecer sin
          límites.
        </motion.p>

        {/* <motion.div
          className="flex gap-4 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl text-lg font-bold shadow-lg"
          >
            Unirme a Jumper Enterprise
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-gray-900 transition"
          >
            Agendar demo
          </motion.button>
        </motion.div> */}
      </section>

      <AgentsGrid />
      <BrainFlow />

      {/* Resultados cuantificables */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 snap-start">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-8 text-center">
          Resultados en el primer mes
        </h2>
        <div className="flex gap-8 flex-wrap justify-center">
          <div className="p-6 bg-green-500 rounded-xl shadow-lg text-center">
            <p className="text-4xl font-bold text-green-900">+400</p>
            <p className="font-semibold">Leads generados automáticamente</p>
          </div>
          <div className="p-6 bg-blue-500 rounded-xl shadow-lg text-center">
            <p className="text-4xl font-bold text-blue-900">{hoursSaved}h</p>
            <p className="font-semibold">Horas ahorradas por semana</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-300 snap-start px-6 py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Clientes que confían en Jumper Enterprise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Review 1 */}
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold">
                A
              </div>
              <div>
                <p className="font-semibold text-gray-800">– Jorge Pena</p>
                <p className="text-sm text-gray-500">Director de Caves Saint</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
            <p className="italic text-gray-700">
              “Con el Agente Secretario automatizamos la gestión de pedidos, emails y tareas repetitivas en Samanjo. En un mes, ahorramos horas de trabajo diario y logramos aumentar nuestra cartera de clientes significativamente.”
            </p>
          </div>

          {/* Review 2 */}
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold">
                M
              </div>
              <div>
                <p className="font-semibold text-gray-800">Justine Duru</p>
                <p className="text-sm text-gray-500">Fundadora de Pethome</p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
            <p className="italic text-gray-700">
              “Con el Jumper Enterprise, automatizamos la gestión de citas y seguimientos con clientes. En un mes, ahorramos horas de trabajo y mejoramos la satisfacción del cliente.”
            </p>
          </div>

          {/* Review 3 */}
          <div className="p-6 bg-white rounded-2xl shadow-2xl hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold">
                L
              </div>
              <div>
                <p className="font-semibold text-gray-800">Julien L</p>
                <p className="text-sm text-gray-500">
                  E-commerce Manager - Exportador de productos Españoles
                </p>
              </div>
            </div>
            <div className="flex text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
            <p className="italic text-gray-700">
              “Hemos automatizado el 80 % de nuestras operaciones y aumentado nuestras ventas en un 25 % desde el primer mes gracias a los agentes de IA. La gestión de tareas repetitivas y el seguimiento de los clientes se han vuelto sencillos y eficaces”
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-900 text-white text-center px-6 snap-start">
        {/* Icono del agente */}
        <motion.div
          className="w-32 h-32 rounded-full bg-yellow-400 flex items-center justify-center text-indigo-900 font-bold text-4xl shadow-2xl mb-6"
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          🤖
        </motion.div>

        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hacé la prueba con nuestro{" "}
          <span className="text-yellow-400">Agente de WhatsApp</span>
        </motion.h2>

        {/* Descripción */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-indigo-100 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Descubrí en segundos cómo Jumper Enterprise puede automatizar tu
          negocio. Es una demo interactiva, disponible 24/7.
        </motion.p>

        {/* Botón WhatsApp */}
        <motion.a
          href="https://wa.me/+50661661848"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-8 py-4 bg-yellow-400 text-indigo-900 font-semibold rounded-2xl shadow-xl flex items-center gap-3 hover:bg-yellow-300 transition-colors text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <MessageCircle className="w-6 h-6" />
          Probar ahora en WhatsApp
        </motion.a>
      </section>

      {/* Cierre */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white snap-start">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center"
        >
          Tu negocio, automatizado y vendiendo solo.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-xl text-center max-w-xl"
        >
          Piloto limitado. Resultados medibles desde el primer mes.
        </motion.p>
        <div className="flex gap-4 mt-10">
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl text-lg font-bold shadow-lg"
          >
            Firmar ahora
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-gray-900 transition"
          >
            Agendar demo
          </motion.button> */}
        </div>
      </section>
    </main>
  );
}
