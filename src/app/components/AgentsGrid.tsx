"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingCart,
  FaCalendarCheck,
  FaStar,
  FaPenFancy,
  FaEnvelopeOpenText,
  FaStore,
  FaSearch,
  FaComments,
  FaTruck,
} from "react-icons/fa";

const agents = [
  {
    id: 1,
    icon: <FaShoppingCart className="w-10 h-10 text-indigo-600" />,
    name: "Agente Ventas Pro",
    desc: "Recupera carritos y re-engancha clientes automáticamente.",
    steps: [
      {
        icon: <FaShoppingCart className="w-8 h-8 text-indigo-600" />,
        title: "Carrito Abandonado",
        desc: "El cliente deja productos sin comprar.",
      },
      {
        icon: <FaEnvelopeOpenText className="w-8 h-8 text-green-600" />,
        title: "Recordatorio Automático",
        desc: "Se envía un email o WhatsApp personalizado.",
      },
      {
        icon: <FaComments className="w-8 h-8 text-purple-600" />,
        title: "Interacción Directa",
        desc: "El cliente responde y vuelve al sitio.",
      },
      {
        icon: <FaStar className="w-8 h-8 text-yellow-500" />,
        title: "Venta Recuperada",
        desc: "Hasta +30% más ingresos sin esfuerzo.",
      },
    ],
  },
  {
    id: 2,
    icon: <FaCalendarCheck className="w-10 h-10 text-indigo-600" />,
    name: "Agente Appointment Setter",
    desc: "Agenda, confirma y reduce no-shows con recordatorios inteligentes.",
    steps: [
      {
        icon: <FaCalendarCheck className="w-8 h-8 text-indigo-600" />,
        title: "Reserva Inicial",
        desc: "El cliente agenda su cita en línea.",
      },
      {
        icon: <FaEnvelopeOpenText className="w-8 h-8 text-green-600" />,
        title: "Recordatorio Automático",
        desc: "Recibe alertas por email o WhatsApp antes de la cita.",
      },
      {
        icon: <FaComments className="w-8 h-8 text-purple-600" />,
        title: "Reprogramación Fácil",
        desc: "El cliente puede cambiar la cita sin fricción.",
      },
      {
        icon: <FaStar className="w-8 h-8 text-yellow-500" />,
        title: "No-Shows Reducidos",
        desc: "Disminuye hasta un 40% las ausencias.",
      },
    ],
  },
  {
    id: 3,
    icon: <FaStar className="w-10 h-10 text-indigo-600" />,
    name: "StarVault ",
    desc: "Genera confianza con reseñas reales y mejora tu reputación online.",
    steps: [
      {
        icon: <FaStore className="w-8 h-8 text-indigo-600" />,
        title: "Compra Realizada",
        desc: "El cliente finaliza su compra.",
      },
      {
        icon: <FaEnvelopeOpenText className="w-8 h-8 text-green-600" />,
        title: "Solicitud Amigable",
        desc: "Recibe un mensaje invitándolo a dejar reseña.",
      },
      {
        icon: <FaComments className="w-8 h-8 text-purple-600" />,
        title: "Feedback Rápido",
        desc: "El cliente responde en Google con su experiencia.",
      },
      {
        icon: <FaStar className="w-8 h-8 text-yellow-500" />,
        title: "Reputación Creciente",
        desc: "Aumenta visibilidad y confianza en tu marca.",
      },
    ],
  },
  {
    id: 4,
    icon: <FaPenFancy className="w-10 h-10 text-indigo-600" />,
    name: "Content Magnet",
    desc: "Crea contenido que posiciona tu marca sin intervención manual.",
    steps: [
      {
        icon: <FaSearch className="w-8 h-8 text-indigo-600" />,
        title: "Análisis de Keywords",
        desc: "Identifica palabras clave relevantes para tu sector.",
      },
      {
        icon: <FaPenFancy className="w-8 h-8 text-green-600" />,
        title: "Redacción Automática",
        desc: "Genera artículos optimizados SEO.",
      },
      {
        icon: <FaEnvelopeOpenText className="w-8 h-8 text-purple-600" />,
        title: "Publicación Programada",
        desc: "El blog se actualiza de forma periódica.",
      },
      {
        icon: <FaStar className="w-8 h-8 text-yellow-500" />,
        title: "Ranking Mejorado",
        desc: "Sube posiciones en Google y atrae tráfico orgánico.",
      },
    ],
  },
  {
    id: 5,
    icon: <FaEnvelopeOpenText className="w-10 h-10 text-indigo-600" />,
    name: "Executive Assistant",
    desc: "Automatiza emails, agendas y documentos liberando tu equipo.",
    steps: [
      {
        icon: <FaEnvelopeOpenText className="w-8 h-8 text-indigo-600" />,
        title: "Gestión de Emails",
        desc: "Centraliza correos entrantes y salientes.",
      },
      {
        icon: <FaCalendarCheck className="w-8 h-8 text-green-600" />,
        title: "Agendas Organizdas",
        desc: "Administra reuniones y recordatorios.",
      },
      {
        icon: <FaPenFancy className="w-8 h-8 text-purple-600" />,
        title: "Documentos al Día",
        desc: "Crea y organiza archivos automáticamente.",
      },
      {
        icon: <FaStar className="w-8 h-8 text-yellow-500" />,
        title: "Ahorro de Tiempo",
        desc: "Reduce carga operativa y errores humanos.",
      },
    ],
  },
  {
    id: 6,
    icon: <FaStore className="w-10 h-10 text-indigo-600" />,
    name: "StorePilot",
    desc: "Pedidos, stock y seguimiento automatizados para ventas sin esfuerzo.",
    steps: [
      {
        icon: <FaStore className="w-8 h-8 text-indigo-600" />,
        title: "Gestión de Tienda",
        desc: "Sincroniza productos y stock en tiempo real.",
      },
      {
        icon: <FaShoppingCart className="w-8 h-8 text-green-600" />,
        title: "Pedidos Automáticos",
        desc: "Procesa ventas al instante sin intervención manual.",
      },
      {
        icon: <FaTruck className="w-8 h-8 text-purple-600" />,
        title: "Notificación de Envío",
        desc: "El cliente recibe alertas del estado de su pedido.",
      },
      {
        icon: <FaStar className="w-8 h-8 text-yellow-500" />,
        title: "Experiencia Óptima",
        desc: "Más confianza, más ventas recurrentes.",
      },
    ],
  },
  {
    id: 7,
    icon: <FaSearch className="w-10 h-10 text-indigo-600" />,
    name: "LeadHunter",
    desc: "Encuentra leads calificados y contacta automáticamente.",
    steps: [
      {
        icon: <FaSearch className="w-8 h-8 text-indigo-600" />,
        title: "Búsqueda Inteligente",
        desc: "Explora bases públicas en busca de prospectos.",
      },
      {
        icon: <FaEnvelopeOpenText className="w-8 h-8 text-green-600" />,
        title: "Extracción Automática",
        desc: "Obtiene emails segmentados por sector.",
      },
      {
        icon: <FaComments className="w-8 h-8 text-purple-600" />,
        title: "Contacto Directo",
        desc: "Envía mensajes introductorios automáticamente.",
      },
      {
        icon: <FaStar className="w-8 h-8 text-yellow-500" />,
        title: "Pipeline Creciente",
        desc: "Más leads en menos tiempo y sin esfuerzo manual.",
      },
    ],
  },
  {
    id: 8,
    icon: <FaComments className="w-10 h-10 text-indigo-600" />,
    name: "Icebreaker Pro",
    desc: "Mensajes personalizados que generan interés inmediato y engagement real.",
    steps: [
      {
        icon: <FaSearch className="w-8 h-8 text-indigo-600" />,
        title: "Análisis del Perfil",
        desc: "Detecta datos del lead en segundos.",
      },
      {
        icon: <FaPenFancy className="w-8 h-8 text-green-600" />,
        title: "Mensaje Personalizado",
        desc: "Genera un texto hecho a la medida.",
      },
      {
        icon: <FaComments className="w-8 h-8 text-purple-600" />,
        title: "Interacción Humana",
        desc: "El lead responde con mayor disposición.",
      },
      {
        icon: <FaStar className="w-8 h-8 text-yellow-500" />,
        title: "Conversaciones Abiertas",
        desc: "Incrementa el ratio de respuesta y ventas.",
      },
    ],
  },
];

type Step = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

type Agent = {
  id: number;
  icon: React.ReactNode;
  name: string;
  desc: string;
  steps: Step[];
};

export default function AgentsGrid() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white py-20 snap-start">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
      >
        Nuestros Agentes AI
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl px-6">
        {agents.map((agent, idx) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-100 rounded-2xl shadow-lg hover:shadow-xl flex flex-col items-center text-center cursor-pointer"
            onClick={() => setSelectedAgent(agent)}
          >
            <div className="mb-4">{agent.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {agent.name}
            </h3>
            <p className="text-gray-600 text-sm">{agent.desc}</p>
          </motion.div>
        ))}
      </div>
<AnimatePresence>
  {selectedAgent && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-white/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative flex flex-col gap-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Info del agente */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{selectedAgent.icon}</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            {selectedAgent.name}
          </h3>
          <p className="text-gray-700">{selectedAgent.desc}</p>
        </div>

        {/* Diagrama vertical de pasos */}
        <div className="flex flex-col items-center mt-6 space-y-6">
          {selectedAgent.steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center relative w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-md w-full max-w-md"
              >
                <div className="mb-3">{step.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1 text-center">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm text-center">{step.desc}</p>
              </motion.div>

              {/* Flecha vertical entre pasos */}
              {idx < selectedAgent.steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.1 }}
                  className="w-px h-8 bg-indigo-300 mt-2 mb-2"
                />
              )}
            </div>
          ))}
        </div>

        {/* Botón cerrar */}
        <button
          onClick={() => setSelectedAgent(null)}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 text-2xl"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>




    </section>
  );
}
