"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-6">
      <motion.div
        className="bg-gray-800 rounded-3xl p-10 shadow-2xl text-center max-w-xl w-full relative overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Glow de fondo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl pointer-events-none animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
        />
        
        <h1 className="text-5xl font-extrabold text-red-500 mb-6 relative z-10">
          Pago Cancelado
        </h1>
        <p className="text-gray-300 mb-8 text-lg relative z-10">
          Parece que no se completó tu pago. ¡Tranquilo! Todavía puedes volver al catálogo y encontrar el agente perfecto para tu negocio.
        </p>

        {/* Botón principal */}
        <Link href="/services-portal">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl text-xl transition-colors duration-300 shadow-lg"
          >
            Volver al Catálogo
          </motion.button>
        </Link>

        {/* Producto destacado */}
        <div className="mt-10 relative z-10">
          <p className="text-gray-400 mb-3">Nuestro Agente más popular:</p>
          <Link href="/products/popular-agent">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 cursor-pointer shadow-xl flex items-center gap-4 transition-all hover:shadow-2xl"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl font-bold text-white">
                ✨
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-lg">Agente Email Scrapper</p>
                <p className="text-gray-400 text-sm">Multiplica tus leads automáticamente</p>
                <p className="text-green-400 font-bold mt-1">$49.99</p>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Confianza */}
        <p className="mt-6 text-gray-500 text-sm relative z-10">
          Más de <span className="text-green-400 font-bold">500 clientes</span> usan nuestros agentes AI para crecer sus negocios.
        </p>
      </motion.div>
    </div>
  );
}
