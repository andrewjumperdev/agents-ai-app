"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSuitcase,
  faChartDiagram,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type Agent = { id: number; name: string; desc: string };

const AGENTS: Agent[] = [
  {
    id: 1,
    name: "Ventas Pro",
    desc: "Recuperá ventas que hoy se pierden: secuencias multicanal automáticas (WhatsApp, email y llamadas) que reenganchan carritos abandonados y clientes fríos. Convierte oportunidades en ingresos reales sin sumar horas de trabajo al equipo.",
  },
  {
    id: 2,
    name: "Citas",
    desc: "Transformá tu agenda en una máquina de conversión: agenda en 1 click, confirma automáticamente y envía recordatorios inteligentes para eliminar no-shows. Menos ausencias, más citas cumplidas y ventas cerradas.",
  },
  {
    id: 3,
    name: "Google Reviews",
    desc: "Construí reputación que vende: captura reseñas verídicas tras la experiencia del cliente y publica señales sociales que aumentan la confianza y la conversión local. Menos dudas, más compra impulsiva.",
  },
  {
    id: 4,
    name: "Blog SEO",
    desc: "Dejá que tu negocio lidere la búsqueda: detecta tendencias, genera artículos optimizados y publica contenido que atrae tráfico cualificado. Menos dependencia de ads, más tráfico orgánico que se convierte.",
  },
  {
    id: 5,
    name: "Secretario",
    desc: "Liberá al equipo de tareas administrativas: gestiona emails, etiquetas, agendas y documentos automáticamente. Tu personal se concentra en ventas; la operación se vuelve silenciosa y eficiente.",
  },
  {
    id: 6,
    name: "Shopify",
    desc: "Tu tienda funcionando sola: sincroniza pedidos, stock y notificaciones con procesos automatizados que reducen errores y aceleran entregas. Menos cancelaciones, más experiencia de compra confiable.",
  },
  {
    id: 7,
    name: "Email Scrapper",
    desc: "Llená tu pipeline con leads reales: identifica empresas y contactos ideales, enriquece datos y lanza campañas automáticas que generan respuesta. Stop al spam — inicio de conversaciones que venden.",
  },
  {
    id: 8,
    name: "Icebreaker",
    desc: "Rompé el hielo con mensajes que abren puertas: secuencias hiperpersonalizadas que provocan respuesta y agendan reuniones antes que la competencia llegue. Perfecto para recuperar frío y activar listas dormidas.",
  },
];

const FLOWS = {
  B2C: [1, 2, 6, 8],
  B2B: [1, 3, 5, 7],
  Custom: [1, 2, 3, 4, 5, 6, 7, 8],
} as const;

const KPIS: Record<number, string> = {
  1: "+12% recovery carts",
  2: "-40% no-shows",
  3: "+18% reviews positivas",
  4: "+30% tráfico orgánico",
  5: "-3h admin / semana",
  6: "+15% conversión ecom",
  7: "+200 leads / mes",
  8: "+20% engagement",
};

type FlowKey = keyof typeof FLOWS;

export default function BrainFlow({ initialFlow = "B2C" as FlowKey }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 1200, h: 640 });
  const [flowKey, setFlowKey] = useState<FlowKey>(initialFlow);
  const [showAll, setShowAll] = useState(false);
  const [connected, setConnected] = useState<Record<number, boolean>>({});
  const [connectingId, setConnectingId] = useState<number | null>(null);
  const [selectedAgentId, setSelectedAgentId] = useState<number | null>(null);
  const [kpi, setKpi] = useState<{ text: string; visible: boolean } | null>(
    null
  );
  const [recentPulse, setRecentPulse] = useState(false);

  const flowAgentIds = showAll ? FLOWS.Custom : FLOWS[flowKey];
  const flowAgents = flowAgentIds
    .map((id) => AGENTS.find((a) => a.id === id)!)
    .filter(Boolean);

  const center = { x: size.w / 2, y: size.h / 2 - 20 };
  const baseRadius = Math.min(size.w, size.h) / 3.1;
  const radius = Math.max(120, baseRadius - (flowAgents.length > 6 ? 60 : 0));
  const nodeSize = Math.min(88, Math.max(56, Math.floor(size.w / 14)));

  const coords = flowAgents.map((_, i) => {
    const angle = (i / flowAgents.length) * Math.PI * 2 - Math.PI / 2;
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
      angle,
    };
  });

  const connectedCount = Object.keys(connected).length;
  const allConnected =
    connectedCount === flowAgents.length && flowAgents.length > 0;

  useEffect(() => {
    const onResize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setSize({ w: Math.max(600, rect.width), h: Math.max(420, rect.height) });
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const connectAgent = (agentId: number, idx: number) => {
    if (connectingId || connected[agentId]) {
      setSelectedAgentId(agentId);
      return;
    }
    setConnectingId(agentId);
    setSelectedAgentId(agentId);
    setKpi({ text: KPIS[agentId] || "Impacto inmediato", visible: true });

    const kpiTimer = setTimeout(() => setKpi(null), 3000);
    const totalAnimMs = 580 + idx * 120;

    setTimeout(() => {
      setConnected((prev) => ({ ...prev, [agentId]: true }));
      setConnectingId(null);
      clearTimeout(kpiTimer);
      setRecentPulse(true);
      setTimeout(() => setRecentPulse(false), 700);
      setKpi({ text: KPIS[agentId] || "Impacto inmediato", visible: true });
      setTimeout(() => setKpi(null), 2000);
    }, totalAnimMs);
  };

  const resetAll = () => {
    setConnected({});
    setSelectedAgentId(null);
    setConnectingId(null);
    setKpi(null);
  };

  const FlowSelector = () => {
    const items: FlowKey[] = ["B2C", "B2B", "Custom"];
    return (
      <div className="flex items-center gap-3">
        {items.map((it) => {
          const active = it === flowKey && !showAll;
          const icon =
            it === "B2C"
              ? faCartShopping
              : it === "B2B"
              ? faSuitcase
              : faChartDiagram;
          return (
            <button
              key={it}
              onClick={() => {
                setShowAll(false);
                setFlowKey(it);
              }}
              aria-pressed={active}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all focus:outline-none ${
                active
                  ? "bg-indigo-600 text-white ring-2 ring-indigo-300"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
              title={it}
            >
              <FontAwesomeIcon icon={icon} className="w-4 h-4" />
            </button>
          );
        })}

        <button
          onClick={() => setShowAll((s) => !s)}
          aria-pressed={showAll}
          className={`ml-2 w-10 h-10 rounded-full flex items-center justify-center transition-all focus:outline-none ${
            showAll
              ? "bg-indigo-600 text-white ring-2 ring-indigo-300"
              : "bg-white text-gray-700 border border-gray-200"
          }`}
          title="Mostrar todos"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 3h18v4H3zM3 9h18v4H3zM3 15h18v6H3z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section
      ref={containerRef}
      className="snap-start relative w-full h-[760px] bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="absolute inset-6 flex flex-col items-center">
        {/* header */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
            Conectá piezas al Cerebro AI
          </h3>
          <FlowSelector />
        </div>

        {/* SVG orbit + lines */}
        <div className="relative w-full flex-1 max-w-6xl">
          <svg
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
            className="absolute inset-0"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur
                  stdDeviation={allConnected ? 6 : 3}
                  result="coloredBlur"
                />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* orbit rings */}
            {[0, 1, 2].map((ringIdx) => {
              const r =
                56 +
                ringIdx * (connectedCount >= 2 ? 26 : 16) +
                (allConnected ? 6 : 0);
              const stroke = allConnected
                ? `hsl(${180 + ringIdx * 30}, 100%, 60%)`
                : ["#fde68a", "#fef3c7", "#fff7ed"][ringIdx];
              const strokeWidth = allConnected ? 2 + ringIdx : 1.5;
              return (
                <motion.circle
                  key={`orbit-${ringIdx}`}
                  cx={center.x}
                  cy={center.y}
                  r={r}
                  fill="none"
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  style={{ transformOrigin: `${center.x}px ${center.y}px` }}
                  initial={{ opacity: 0.25, rotate: 0 }}
                  animate={{ opacity: allConnected ? 0.85 : 0.5, rotate: 360 }}
                  transition={{
                    duration: 8 - ringIdx * 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              );
            })}
          </svg>

          {/* agent nodes */}
          {flowAgents.map((agent, idx) => {
            const pos = coords[idx];
            const id = agent.id;
            const isConn = Boolean(connected[id]);
            const isConnecting = connectingId === id;

            return (
              <div key={id}>
                <motion.button
                  layout
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 12px rgba(0,229,255,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: isConn ? 1.06 : 1 }}
                  transition={{ delay: 0.12 + idx * 0.04 }}
                  onClick={() => connectAgent(id, idx)}
                  style={{
                    position: "absolute",
                    left: pos.x - nodeSize / 2,
                    top: pos.y - nodeSize / 2,
                    zIndex: 30,
                  }}
                  className={`w-[${nodeSize}px] h-[${nodeSize}px] rounded-full flex flex-col items-center justify-center text-center p-2 cursor-pointer select-none shadow-2xl border-2 transition-all ${
                    isConn
                      ? "bg-gradient-to-br from-cyan-400 to-blue-500 text-white border-cyan-200"
                      : "bg-white text-gray-700 border-gray-200"
                  }`}
                  aria-label={agent.name}
                >
                  <span className="text-xs font-semibold leading-tight px-2">
                    {agent.name}
                  </span>
                </motion.button>

                {isConnecting && (
                  <motion.div
                    initial={{
                      left: pos.x - 16,
                      top: pos.y - 8,
                      opacity: 1,
                      scale: 0.8,
                    }}
                    animate={{
                      left: center.x - 18,
                      top: center.y - 6,
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ position: "absolute", zIndex: 80 }}
                  >
                    <div className="w-10 h-6 rounded-md bg-gradient-to-r from-cyan-300 to-blue-400 shadow-md relative">
                      <div className="absolute -top-1 left-1 w-1.5 h-2 bg-white rounded-sm" />
                      <div className="absolute -top-1 right-1 w-1.5 h-2 bg-white rounded-sm" />
                      <div className="w-5 h-2 bg-white/40 rounded-sm mx-auto mt-2" />
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}

          {/* Brain center */}
          <div
            style={{
              position: "absolute",
              left: center.x - 72,
              top: center.y - 72,
              width: 144,
              height: 144,
              zIndex: 60,
            }}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{
                  boxShadow:
                    connectedCount > 0
                      ? `0 0 ${connectedCount * 8}px rgba(0,229,255,0.2)`
                      : "0 0 10px rgba(99,102,241,0.06)",
                  scale: connectedCount > 0 ? [1, 1.03, 0.98, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: connectedCount > 0 ? Infinity : 0,
                  repeatType: "loop", 
                  ease: "easeInOut",
                }}
                className={`w-full h-full rounded-full flex items-center justify-center overflow-hidden border-4 border-white ${
                  allConnected
                    ? "bg-gradient-to-br from-cyan-500 to-blue-600"
                    : "bg-gradient-to-br from-indigo-700 to-pink-600"
                }`}
                style={{ filter: allConnected ? "url(#glow)" : undefined }}
              >
                <Image src="/images/brain.png" alt="Cerebro AI" className="w-16 h-16"  width={64} height={64}/>
              </motion.div>

              {/* pulse */}
              <AnimatePresence>
                {recentPulse && (
                  <motion.div
                    key="pulse"
                    initial={{ scale: 0.6, opacity: 0.6 }}
                    animate={{ scale: 1.25, opacity: 0.95 }}
                    exit={{ scale: 1.05, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                      position: "absolute",
                      width: 220,
                      height: 220,
                      borderRadius: "9999px",
                      zIndex: 62,
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 opacity-30 blur-sm" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* KPI bubble */}
          {kpi && kpi.visible && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              style={{
                position: "absolute",
                left: center.x + 90,
                top: center.y - 60,
                zIndex: 90,
              }}
              className="bg-white rounded-xl px-3 py-2 shadow-lg border"
            >
              <div className="text-xs text-gray-500">Impacto estimado</div>
              <div className="text-sm font-bold text-gray-900">{kpi.text}</div>
            </motion.div>
          )}
        </div>

        {/* right panel */}
        <div className="absolute right-8 top-8 w-72 bg-white rounded-xl p-4 shadow-lg z-40">
          <h4 className="font-semibold text-gray-800">Estado del Flujo</h4>
          <p className="text-sm text-gray-600 mt-2">
            Conectadas: <span className="font-bold">{connectedCount}</span> /{" "}
            {flowAgents.length}
          </p>
          <div className="mt-3">
            <button
              onClick={resetAll}
              className="w-full px-3 py-2 bg-blue-500 text-white rounded-md text-sm"
            >
              Resetear conexiones
            </button>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Pistas: Haz click en los módulos para conectarlos. Ajusta «Mostrar
            todos» si querés ver todos los agentes.
          </div>
        </div>

        {/* bottom description */}
        <div className="absolute left-8 bottom-6 w-80 bg-white/90 rounded-xl p-4 shadow-md z-40">
          {selectedAgentId ? (
            <>
              <div className="font-semibold text-gray-800">
                {AGENTS.find((a) => a.id === selectedAgentId)?.name}
              </div>
              <div className="text-sm text-gray-600 mt-2">
                {AGENTS.find((a) => a.id === selectedAgentId)?.desc}
              </div>
              <div className="mt-3 text-xs text-gray-500">
                KPI estimado: {KPIS[selectedAgentId]}
              </div>
            </>
          ) : (
            <div className="text-sm text-gray-600">
              Click en un módulo para verlo y conectarlo al Cerebro AI.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
