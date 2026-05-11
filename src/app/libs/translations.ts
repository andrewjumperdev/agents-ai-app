import { Lang, ModalTranslation, Translation } from "../types/types";

export const translations: Record<Lang, Translation> = {
  es: {
    slogan: "Tu empresa en piloto automático",
    backButton: "Volver",
    heroBadge: "Automatización IA para negocios modernos",
    heroTitle: "Tu empresa operando en automático. 24/7.",
    heroSubtitle: "Más ventas. Menos trabajo. Cero excusas.",
    heroDesc:
      "Jumper activa un equipo IA especializado que trabaja mientras tú duermes: convierte leads, agenda citas, gestiona reseñas y automatiza operaciones completas.",
    heroRating: "4.9/5 · +150 empresas",
    cta: "Reservar demo gratis",
    ctaDemo: "Ver cómo funciona",
    ctaTrial: "Comenzar prueba gratuita",
    flashBenefits: [
      { icon: "⚡", text: "Activo en 48h" },
      { icon: "🔒", text: "Sin contratos" },
      { icon: "🎯", text: "Setup incluido" },
    ],
    trustBarLabel: "Automatizando negocios en",
    painPointsTitle: "¿Tu negocio todavía funciona así?",
    painPointsSubtitle: "Cada hora que tu equipo pasa en estas tareas es dinero que dejas sobre la mesa.",
    painPoints: [
      {
        icon: "⏱",
        title: "Leads sin respuesta rápida",
        desc: "El 78% de leads compra al primero que responde. Tu competencia ya automatizó esto.",
      },
      {
        icon: "📋",
        title: "Seguimiento manual de clientes",
        desc: "Tu equipo pierde 3h/día enviando mensajes, recordatorios y emails de seguimiento.",
      },
      {
        icon: "📅",
        title: "No-shows y citas olvidadas",
        desc: "Sin recordatorios automáticos, el 30% de citas no se presenta. Ingreso directo perdido.",
      },
      {
        icon: "⭐",
        title: "Reputación sin gestionar",
        desc: "Reseñas negativas sin responder destruyen tu credibilidad. Cada estrella cuenta.",
      },
      {
        icon: "📧",
        title: "Outreach que no escala",
        desc: "Contactar prospectos manualmente toma horas. Un agente IA puede hacer 100x más.",
      },
      {
        icon: "🛒",
        title: "Tienda sin atención 24/7",
        desc: "Cada cliente que espera respuesta fuera de horario es una venta que perdiste.",
      },
    ],
    agentsSectionTitle: "Tu equipo IA: 8 especialistas activos 24/7",
    agentsSectionSubtitle:
      "Cada agente está entrenado para una función específica de tu negocio. Trabajan en equipo, en paralelo, sin descanso.",
    agents: [
      {
        icon: "📞",
        name: "Sales AI",
        title: "Agente de Ventas",
        desc: "Califica leads, gestiona llamadas y agenda citas automáticamente. Convierte cada oportunidad en ingreso real sin que tu equipo intervenga.",
        color: "#f59e0b",
        features: [
          "Calificación automática de leads",
          "Llamadas y seguimiento 24/7",
          "Agenda citas en tu calendario",
          "Reportes de conversión en tiempo real",
        ],
      },
      {
        icon: "⭐",
        name: "Review AI",
        title: "Reputación Online",
        desc: "Solicita reseñas, responde automáticamente y blinda tu reputación. Más estrellas = más clientes = más dinero.",
        color: "#10b981",
        features: [
          "Solicitudes de reseña automáticas",
          "Respuestas inteligentes a Google Reviews",
          "Alertas ante reseñas negativas",
          "Monitoreo de reputación en tiempo real",
        ],
      },
      {
        icon: "📅",
        name: "Scheduling AI",
        title: "Gestión de Citas",
        desc: "Llena tu agenda sin esfuerzo. Confirma, recuerda y reagenda automáticamente. Cero no-shows.",
        color: "#3b82f6",
        features: [
          "Agenda automática 24/7",
          "Recordatorios por SMS y WhatsApp",
          "Sincronización con Google Calendar",
          "Reagendamiento inteligente",
        ],
      },
      {
        icon: "📝",
        name: "Content AI",
        title: "Contenido & SEO",
        desc: "Detecta tendencias, genera artículos optimizados y posiciona tu marca. Contenido que trae clientes sin pagar publicidad.",
        color: "#8b5cf6",
        features: [
          "Artículos SEO optimizados",
          "Detección de tendencias de mercado",
          "Publicación automática",
          "Análisis de keywords y posicionamiento",
        ],
      },
      {
        icon: "🗂️",
        name: "Operations AI",
        title: "Operaciones Internas",
        desc: "Elimina el trabajo repetitivo: emails, resúmenes, gestión de documentos y tareas programadas manejados automáticamente.",
        color: "#ec4899",
        features: [
          "Gestión de bandeja de entrada",
          "Organización automática de documentos",
          "Resúmenes y reportes diarios",
          "Flujos de trabajo automatizados",
        ],
      },
      {
        icon: "🛒",
        name: "Commerce AI",
        title: "E-Commerce & Tiendas",
        desc: "Tu tienda en piloto automático: pedidos, inventario, seguimiento de envíos y atención al cliente las 24 horas.",
        color: "#06b6d4",
        features: [
          "Gestión automática de pedidos",
          "Control de inventario en tiempo real",
          "Seguimiento de envíos",
          "Soporte al cliente automatizado",
        ],
      },
      {
        icon: "📧",
        name: "Outreach AI",
        title: "Prospección & Email",
        desc: "Encuentra leads calificados y contáctalos con mensajes personalizados que abren conversaciones reales y generan reuniones.",
        color: "#f97316",
        features: [
          "Búsqueda y cualificación de prospectos",
          "Secuencias de email personalizadas",
          "Seguimiento automático multi-touch",
          "Scoring y priorización de leads",
        ],
      },
      {
        icon: "🏆",
        name: "Growth Suite",
        title: "Suite Completa",
        desc: "Todos los agentes trabajando en equipo. Automatización total de ventas, marketing y operaciones. El stack IA completo para tu empresa.",
        color: "#eab308",
        features: [
          "8 agentes IA incluidos",
          "Integración y coordinación total",
          "Soporte prioritario dedicado",
          "Personalización y entrenamiento avanzado",
        ],
      },
    ],
    industriesTitle: "Diseñado para tu industria",
    industriesSubtitle:
      "No importa tu sector. Jumper se adapta y automatiza lo que más importa para tu tipo de negocio.",
    industries: [
      {
        id: "restaurants",
        icon: "🍽️",
        label: "Restaurantes",
        pain: "Reservas manuales, reseñas sin gestionar, pedidos por teléfono que distraen al equipo",
        automations: [
          "Reservas y waitlist 24/7 por WhatsApp",
          "Review AI solicita reseñas post-visita",
          "Recordatorios automáticos de reserva",
          "Respuestas a reseñas en Google Maps",
        ],
        result: "Restaurantes con Jumper llenan el 95% de sus reservas y tienen 4.8+ en Google.",
      },
      {
        id: "clinics",
        icon: "🏥",
        label: "Clínicas",
        pain: "Citas olvidadas, llamadas de confirmación manual, seguimiento post-consulta inexistente",
        automations: [
          "Agendamiento de citas por WhatsApp",
          "Recordatorios 24h y 1h antes",
          "Seguimiento post-consulta automático",
          "Gestión de reseñas de pacientes",
        ],
        result: "Clínicas reducen no-shows 60% y ahorran +15h/semana en gestión de agenda.",
      },
      {
        id: "coaches",
        icon: "🎓",
        label: "Coaches & Consultores",
        pain: "Leads que no convierten, seguimiento manual de prospectos, contenido sin consistencia",
        automations: [
          "Calificación automática de leads entrantes",
          "Secuencias de nurturing personalizadas",
          "Agendamiento de sesiones de discovery",
          "Contenido SEO que atrae prospectos",
        ],
        result: "Coaches duplican su tasa de cierre y reducen 80% el tiempo en admin.",
      },
      {
        id: "realestate",
        icon: "🏢",
        label: "Inmobiliarias",
        pain: "Leads fríos sin follow-up, visitas no confirmadas, clientes que comparan sin decidir",
        automations: [
          "Seguimiento automático de leads 24/7",
          "Confirmación de visitas por WhatsApp",
          "Nurturing hasta la decisión de compra",
          "Prospección de nuevos compradores",
        ],
        result: "Agencias cierran 3x más operaciones con el mismo equipo comercial.",
      },
      {
        id: "ecommerce",
        icon: "🛍️",
        label: "E-Commerce",
        pain: "Carritos abandonados, soporte fuera de horario, seguimiento post-compra manual",
        automations: [
          "Recuperación automática de carritos",
          "Soporte 24/7 por WhatsApp y chat",
          "Seguimiento de envíos y post-venta",
          "Reactivación de clientes inactivos",
        ],
        result: "Tiendas recuperan 25% de carritos abandonados y aumentan LTV del cliente.",
      },
      {
        id: "agencies",
        icon: "📊",
        label: "Agencias",
        pain: "Onboarding manual de clientes, reportes que consumen horas, prospección sin escalar",
        automations: [
          "Onboarding automático de nuevos clientes",
          "Reportes automáticos semanales",
          "Prospección y outreach a escala",
          "Seguimiento de proyectos y entregas",
        ],
        result: "Agencias escalan sin contratar: más clientes, misma estructura.",
      },
    ],
    demoVisualTitle: "Tu equipo IA, trabajando ahora mismo",
    demoVisualSubtitle:
      "Mientras lees esto, empresas como la tuya tienen agentes IA respondiendo leads, agendando citas y generando reseñas. En tiempo real.",
    resultsTitle: "Resultados que se ven en el balance",
    results: [
      { value: "+150", label: "Empresas activas", desc: "En 3 países" },
      { value: "80%", label: "Tareas automatizadas", desc: "Promedio por cliente" },
      { value: "4.9/5", label: "Satisfacción cliente", desc: "Basado en encuestas" },
      { value: "24/7", label: "Disponibilidad", desc: "Sin interrupciones" },
    ],
    processTitle: "En 3 pasos, tu empresa en automático",
    processSubtitle: "Sin código. Sin contratar. Sin configuraciones técnicas.",
    process: [
      {
        number: 1,
        title: "Onboarding guiado",
        description:
          "Nuestro equipo te hace un onboarding personalizado. Te configuramos todo según tu negocio, tus clientes y tus objetivos.",
        icon: "🎯",
      },
      {
        number: 2,
        title: "Entrenamiento IA",
        description:
          "Los agentes aprenden sobre tu empresa, tu tono y tus procesos. En 48 horas están listos para trabajar.",
        icon: "🧠",
      },
      {
        number: 3,
        title: "Automatización activa",
        description:
          "Tus agentes comienzan a trabajar 24/7. Tú ves resultados desde la primera semana mientras te enfocas en crecer.",
        icon: "🚀",
      },
    ],
    integrationsTitle: "Se conecta con las herramientas que ya usas",
    integrationsSubtitle: "+12 integraciones nativas. Sin desarrollo. Sin fricción.",
    integrations: [
      { name: "WhatsApp", icon: "📱", category: "Mensajería" },
      { name: "Gmail", icon: "📧", category: "Email" },
      { name: "Google Calendar", icon: "📅", category: "Calendario" },
      { name: "LinkedIn", icon: "💼", category: "Redes" },
      { name: "Instagram", icon: "📸", category: "Redes" },
      { name: "Facebook", icon: "👥", category: "Redes" },
      { name: "Slack", icon: "💬", category: "Comunicación" },
      { name: "Notion", icon: "📝", category: "Productividad" },
      { name: "HubSpot", icon: "🎯", category: "CRM" },
      { name: "Stripe", icon: "💳", category: "Pagos" },
      { name: "Shopify", icon: "🛍️", category: "E-commerce" },
      { name: "WordPress", icon: "🌐", category: "Web" },
    ],
    pricingTitle: "Inversión que se paga sola",
    pricingSubtitle:
      "Un solo lead cerrado cubre meses de Jumper. El ROI es inmediato.",
    pricingMonthly: "Mensual",
    pricingYearly: "Anual (2 meses gratis)",
    pricingPlans: [
      {
        name: "Esencial",
        monthlyPrice: "$120",
        yearlyPrice: "$960",
        description: "Para negocios que quieren empezar a automatizar",
        features: [
          "3 agentes IA a elegir",
          "1,000 interacciones/mes",
          "WhatsApp + Email incluido",
          "Soporte por email",
          "Onboarding personalizado",
        ],
        cta: "Comenzar gratis",
      },
      {
        name: "Profesional",
        monthlyPrice: "$200",
        yearlyPrice: "$1,600",
        description: "Para negocios en crecimiento que necesitan escalar",
        features: [
          "6 agentes IA a elegir",
          "5,000 interacciones/mes",
          "Todas las integraciones",
          "Soporte prioritario",
          "Onboarding VIP",
          "Reportes y analytics",
        ],
        popular: true,
        cta: "Comenzar gratis",
      },
      {
        name: "Business+",
        monthlyPrice: "Personalizado",
        yearlyPrice: "Personalizado",
        description: "Para empresas que quieren automatización total",
        features: [
          "8 agentes IA completos",
          "Interacciones ilimitadas",
          "Integraciones personalizadas",
          "Soporte dedicado 24/7",
          "Onboarding + Training VIP",
          "API completa",
          "SLA garantizado",
        ],
        cta: "Hablar con ventas",
      },
    ],
    faqTitle: "Preguntas que siempre hacen",
    faqSubtitle: "Respuestas directas. Sin rodeos.",
    faq: [
      {
        question: "¿Qué diferencia a Jumper de ChatGPT o una IA genérica?",
        answer:
          "ChatGPT responde preguntas. Los agentes de Jumper ejecutan tareas específicas de tu negocio: llaman clientes, agendan citas, responden reseñas, envían emails. No conversan — actúan y generan resultados medibles.",
      },
      {
        question: "¿Necesito conocimientos técnicos?",
        answer:
          "Ninguno. Nuestro equipo hace todo el setup por ti. Solo necesitas contarnos cómo funciona tu negocio. En 48 horas tus agentes están activos.",
      },
      {
        question: "¿Cuánto tiempo toma la implementación?",
        answer:
          "Entre 24 y 48 horas desde el onboarding inicial. El primer día ya puedes ver los agentes respondiendo mensajes y procesando leads.",
      },
      {
        question: "¿Puedo cancelar en cualquier momento?",
        answer:
          "Sí, sin penalizaciones ni contratos de permanencia. Si no estás satisfecho, cancelas y listo.",
      },
      {
        question: "¿Mis datos están seguros?",
        answer:
          "Cumplimos GDPR. Tus datos están encriptados, alojados en servidores seguros y nunca se comparten con terceros. Tú eres el dueño de todo.",
      },
      {
        question: "¿Los agentes hablan en varios idiomas?",
        answer:
          "Sí. Nuestros agentes son multilingües: español, inglés, francés, portugués y más. Perfectos para negocios con clientes internacionales.",
      },
      {
        question: "¿Qué pasa si necesito algo muy específico?",
        answer:
          "El plan Business+ incluye personalización completa. También podemos desarrollar flujos custom. Contáctanos y diseñamos la solución exacta para tu caso.",
      },
      {
        question: "¿Hay soporte técnico disponible?",
        answer:
          "Todos los planes incluyen soporte. Los planes Pro y Business+ tienen soporte prioritario con respuestas en menos de 2 horas.",
      },
    ],
    workSteps: [
      "Captura atención con chat IA en tu sitio, WhatsApp o Telegram",
      "Genera interés con demos instantáneas y respuestas automáticas",
      "Convierte cada contacto en venta con seguimiento automático",
    ],
    demoTitle: "Tu empresa merece operar en automático",
    demoDesc:
      "Reserva una demo de 30 minutos. Te mostramos cómo Jumper funciona para tu tipo de negocio específico. Sin genéricos. Sin compromiso.",
    demoWhatsapp: "Hablar por WhatsApp ahora",
    demoCalendly: "Reservar demo personalizada",
    testimonialTitle: "Lo que dicen quienes ya automatizaron",
    testimonialSubtitle: "+150 empresas creciendo con Jumper",
    testimonial: [
      {
        quote:
          "Con el agente de operaciones automatizamos la gestión de pedidos, emails y tareas repetitivas. En un mes ahorramos horas de trabajo diario y aumentamos nuestra cartera de clientes significativamente.",
        author: "Jorge Pena",
        role: "Director",
        company: "Caves Saint Gilles",
      },
      {
        quote:
          "Automatizamos la gestión de citas y seguimientos. En un mes ahorramos horas de trabajo y mejoramos la satisfacción del cliente notablemente. El ROI fue inmediato.",
        author: "Justine Duru",
        role: "Fundadora",
        company: "Pethome",
      },
      {
        quote:
          "Hemos automatizado el 80% de nuestras operaciones y aumentado ventas en un 25% desde el primer mes. La gestión de tareas y el seguimiento de clientes son ahora simples y eficaces.",
        author: "Julien L.",
        role: "CEO",
        company: "Distribuidora B2B",
      },
    ],
    whatsappMessage:
      "Hola, quiero reservar una demo de Jumper AI para ver cómo automatizar mi negocio.",
    available24_7: "Disponible 24/7",
    freeTrialDays: "7 días gratis",
    stickyCtaText: "Reservar demo gratis →",
    footerText: "© 2025 Jumper Enterprise. Todos los derechos reservados.",
  },

  en: {
    slogan: "Your business on autopilot",
    backButton: "Back",
    heroBadge: "AI Automation for modern businesses",
    heroTitle: "Your business running on autopilot. 24/7.",
    heroSubtitle: "More revenue. Less manual work. Zero excuses.",
    heroDesc:
      "Jumper activates a specialized AI team that works while you sleep: converts leads, books appointments, manages reviews, and automates full operations.",
    heroRating: "4.9/5 · +150 companies",
    cta: "Book free demo",
    ctaDemo: "See how it works",
    ctaTrial: "Start free trial",
    flashBenefits: [
      { icon: "⚡", text: "Live in 48h" },
      { icon: "🔒", text: "No contracts" },
      { icon: "🎯", text: "Setup included" },
    ],
    trustBarLabel: "Automating businesses in",
    painPointsTitle: "Is your business still running like this?",
    painPointsSubtitle: "Every hour your team spends on these tasks is money left on the table.",
    painPoints: [
      {
        icon: "⏱",
        title: "Slow lead response",
        desc: "78% of leads buy from the first to respond. Your competition already automated this.",
      },
      {
        icon: "📋",
        title: "Manual client follow-up",
        desc: "Your team loses 3h/day sending messages, reminders and follow-up emails.",
      },
      {
        icon: "📅",
        title: "No-shows and forgotten appointments",
        desc: "Without automatic reminders, 30% of appointments don't show. Direct lost revenue.",
      },
      {
        icon: "⭐",
        title: "Unmanaged reputation",
        desc: "Unanswered negative reviews destroy your credibility. Every star counts.",
      },
      {
        icon: "📧",
        title: "Outreach that doesn't scale",
        desc: "Manual prospecting takes hours. An AI agent can do 100x more.",
      },
      {
        icon: "🛒",
        title: "Store without 24/7 attention",
        desc: "Every customer waiting for a reply after hours is a sale you lost.",
      },
    ],
    agentsSectionTitle: "Your AI team: 8 specialists active 24/7",
    agentsSectionSubtitle:
      "Each agent is trained for a specific function of your business. They work as a team, in parallel, without rest.",
    agents: [
      {
        icon: "📞",
        name: "Sales AI",
        title: "Sales Agent",
        desc: "Qualifies leads, manages calls and schedules appointments automatically. Converts every opportunity into real revenue without your team intervening.",
        color: "#f59e0b",
        features: [
          "Automatic lead qualification",
          "24/7 calls and follow-up",
          "Books appointments to your calendar",
          "Real-time conversion reports",
        ],
      },
      {
        icon: "⭐",
        name: "Review AI",
        title: "Online Reputation",
        desc: "Requests reviews, responds automatically and protects your reputation. More stars = more clients = more money.",
        color: "#10b981",
        features: [
          "Automatic review requests",
          "Smart Google Reviews responses",
          "Negative review alerts",
          "Real-time reputation monitoring",
        ],
      },
      {
        icon: "📅",
        name: "Scheduling AI",
        title: "Appointment Management",
        desc: "Fill your calendar effortlessly. Confirms, reminds and reschedules automatically. Zero no-shows.",
        color: "#3b82f6",
        features: [
          "24/7 automatic scheduling",
          "SMS and WhatsApp reminders",
          "Google Calendar sync",
          "Intelligent rescheduling",
        ],
      },
      {
        icon: "📝",
        name: "Content AI",
        title: "Content & SEO",
        desc: "Detects trends, generates optimized articles and positions your brand. Content that brings customers without paying for ads.",
        color: "#8b5cf6",
        features: [
          "SEO-optimized articles",
          "Market trend detection",
          "Automatic publishing",
          "Keyword and ranking analysis",
        ],
      },
      {
        icon: "🗂️",
        name: "Operations AI",
        title: "Internal Operations",
        desc: "Eliminates repetitive work: emails, summaries, document management and scheduled tasks handled automatically.",
        color: "#ec4899",
        features: [
          "Inbox management",
          "Automatic document organization",
          "Daily summaries and reports",
          "Automated workflows",
        ],
      },
      {
        icon: "🛒",
        name: "Commerce AI",
        title: "E-Commerce & Stores",
        desc: "Your store on autopilot: orders, inventory, shipment tracking and customer service around the clock.",
        color: "#06b6d4",
        features: [
          "Automatic order management",
          "Real-time inventory control",
          "Shipment tracking",
          "Automated customer support",
        ],
      },
      {
        icon: "📧",
        name: "Outreach AI",
        title: "Prospecting & Email",
        desc: "Finds qualified leads and contacts them with personalized messages that open real conversations and generate meetings.",
        color: "#f97316",
        features: [
          "Lead search and qualification",
          "Personalized email sequences",
          "Multi-touch automatic follow-up",
          "Lead scoring and prioritization",
        ],
      },
      {
        icon: "🏆",
        name: "Growth Suite",
        title: "Complete Suite",
        desc: "All agents working as a team. Full automation of sales, marketing and operations. The complete AI stack for your business.",
        color: "#eab308",
        features: [
          "8 AI agents included",
          "Full integration and coordination",
          "Dedicated priority support",
          "Advanced customization and training",
        ],
      },
    ],
    industriesTitle: "Built for your industry",
    industriesSubtitle:
      "No matter your sector. Jumper adapts and automates what matters most for your type of business.",
    industries: [
      {
        id: "restaurants",
        icon: "🍽️",
        label: "Restaurants",
        pain: "Manual reservations, unmanaged reviews, phone orders that distract the team",
        automations: [
          "24/7 reservations via WhatsApp",
          "Review AI requests post-visit reviews",
          "Automatic reservation reminders",
          "Google Maps review responses",
        ],
        result: "Restaurants with Jumper fill 95% of their bookings and maintain 4.8+ on Google.",
      },
      {
        id: "clinics",
        icon: "🏥",
        label: "Clinics",
        pain: "Forgotten appointments, manual confirmation calls, no post-consultation follow-up",
        automations: [
          "WhatsApp appointment scheduling",
          "24h and 1h before reminders",
          "Automatic post-consultation follow-up",
          "Patient review management",
        ],
        result: "Clinics reduce no-shows 60% and save +15h/week in schedule management.",
      },
      {
        id: "coaches",
        icon: "🎓",
        label: "Coaches",
        pain: "Leads that don't convert, manual prospect follow-up, inconsistent content",
        automations: [
          "Automatic qualification of incoming leads",
          "Personalized nurturing sequences",
          "Discovery session scheduling",
          "SEO content that attracts prospects",
        ],
        result: "Coaches double their close rate and reduce 80% of admin time.",
      },
      {
        id: "realestate",
        icon: "🏢",
        label: "Real Estate",
        pain: "Cold leads without follow-up, unconfirmed visits, clients comparing without deciding",
        automations: [
          "24/7 automatic lead follow-up",
          "WhatsApp visit confirmation",
          "Nurturing until purchase decision",
          "New buyer prospecting",
        ],
        result: "Agencies close 3x more deals with the same sales team.",
      },
      {
        id: "ecommerce",
        icon: "🛍️",
        label: "E-Commerce",
        pain: "Abandoned carts, after-hours support, manual post-purchase follow-up",
        automations: [
          "Automatic cart recovery",
          "24/7 WhatsApp and chat support",
          "Shipment tracking and after-sales",
          "Inactive customer reactivation",
        ],
        result: "Stores recover 25% of abandoned carts and increase customer LTV.",
      },
      {
        id: "agencies",
        icon: "📊",
        label: "Agencies",
        pain: "Manual client onboarding, reports that consume hours, unscalable prospecting",
        automations: [
          "Automatic new client onboarding",
          "Automatic weekly reports",
          "Large-scale prospecting and outreach",
          "Project and delivery tracking",
        ],
        result: "Agencies scale without hiring: more clients, same structure.",
      },
    ],
    demoVisualTitle: "Your AI team, working right now",
    demoVisualSubtitle:
      "While you read this, businesses like yours have AI agents responding to leads, booking appointments and generating reviews. In real time.",
    resultsTitle: "Results that show in your bottom line",
    results: [
      { value: "+150", label: "Active businesses", desc: "Across 3 countries" },
      { value: "80%", label: "Tasks automated", desc: "Average per client" },
      { value: "4.9/5", label: "Client satisfaction", desc: "Based on surveys" },
      { value: "24/7", label: "Availability", desc: "No interruptions" },
    ],
    processTitle: "3 steps to full automation",
    processSubtitle: "No code. No hiring. No technical setup.",
    process: [
      {
        number: 1,
        title: "Guided onboarding",
        description:
          "Our team does a personalized onboarding. We configure everything according to your business, your clients and your goals.",
        icon: "🎯",
      },
      {
        number: 2,
        title: "AI training",
        description:
          "Agents learn about your company, your tone and your processes. In 48 hours they're ready to work.",
        icon: "🧠",
      },
      {
        number: 3,
        title: "Active automation",
        description:
          "Your agents start working 24/7. You see results from the first week while you focus on growing.",
        icon: "🚀",
      },
    ],
    integrationsTitle: "Connects with the tools you already use",
    integrationsSubtitle: "+12 native integrations. No development. No friction.",
    integrations: [
      { name: "WhatsApp", icon: "📱", category: "Messaging" },
      { name: "Gmail", icon: "📧", category: "Email" },
      { name: "Google Calendar", icon: "📅", category: "Calendar" },
      { name: "LinkedIn", icon: "💼", category: "Social" },
      { name: "Instagram", icon: "📸", category: "Social" },
      { name: "Facebook", icon: "👥", category: "Social" },
      { name: "Slack", icon: "💬", category: "Communication" },
      { name: "Notion", icon: "📝", category: "Productivity" },
      { name: "HubSpot", icon: "🎯", category: "CRM" },
      { name: "Stripe", icon: "💳", category: "Payments" },
      { name: "Shopify", icon: "🛍️", category: "E-commerce" },
      { name: "WordPress", icon: "🌐", category: "Web" },
    ],
    pricingTitle: "An investment that pays for itself",
    pricingSubtitle: "One closed lead covers months of Jumper. The ROI is immediate.",
    pricingMonthly: "Monthly",
    pricingYearly: "Yearly (2 months free)",
    pricingPlans: [
      {
        name: "Essential",
        monthlyPrice: "$120",
        yearlyPrice: "$960",
        description: "For businesses that want to start automating",
        features: [
          "3 AI agents of your choice",
          "1,000 interactions/month",
          "WhatsApp + Email included",
          "Email support",
          "Personalized onboarding",
        ],
        cta: "Start free",
      },
      {
        name: "Professional",
        monthlyPrice: "$200",
        yearlyPrice: "$1,600",
        description: "For growing businesses that need to scale",
        features: [
          "6 AI agents of your choice",
          "5,000 interactions/month",
          "All integrations",
          "Priority support",
          "VIP onboarding",
          "Reports and analytics",
        ],
        popular: true,
        cta: "Start free",
      },
      {
        name: "Business+",
        monthlyPrice: "Custom",
        yearlyPrice: "Custom",
        description: "For companies that want total automation",
        features: [
          "All 8 AI agents",
          "Unlimited interactions",
          "Custom integrations",
          "Dedicated 24/7 support",
          "VIP onboarding + Training",
          "Full API access",
          "Guaranteed SLA",
        ],
        cta: "Talk to sales",
      },
    ],
    faqTitle: "Questions they always ask",
    faqSubtitle: "Direct answers. No fluff.",
    faq: [
      {
        question: "What sets Jumper apart from ChatGPT or a generic AI?",
        answer:
          "ChatGPT answers questions. Jumper agents execute specific business tasks: call clients, schedule appointments, respond to reviews, send emails. They don't chat — they act and generate measurable results.",
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "None. Our team does all the setup for you. You just need to tell us how your business works. In 48 hours your agents are live.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Between 24 and 48 hours from initial onboarding. The first day you can already see agents responding messages and processing leads.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes, without penalties or long-term contracts. If you're not satisfied, you cancel. Simple.",
      },
      {
        question: "Is my data secure?",
        answer:
          "We comply with GDPR. Your data is encrypted, hosted on secure servers and never shared with third parties. You own everything.",
      },
      {
        question: "Do agents speak multiple languages?",
        answer:
          "Yes. Our agents are multilingual: Spanish, English, French, Portuguese and more. Perfect for businesses with international clients.",
      },
      {
        question: "What if I need something very specific?",
        answer:
          "The Business+ plan includes full customization. We can also develop custom flows. Contact us and we design the exact solution for your case.",
      },
      {
        question: "Is technical support available?",
        answer:
          "All plans include support. Pro and Business+ plans have priority support with responses in under 2 hours.",
      },
    ],
    workSteps: [
      "Capture attention with AI chat on your site, WhatsApp or Telegram",
      "Generate interest with instant demos and automated responses",
      "Convert every contact into a sale with automatic follow-up",
    ],
    demoTitle: "Your business deserves to run on autopilot",
    demoDesc:
      "Book a 30-minute demo. We'll show you how Jumper works for your specific business type. No generic pitches. No commitment.",
    demoWhatsapp: "Chat on WhatsApp now",
    demoCalendly: "Book personalized demo",
    testimonialTitle: "What those who already automated say",
    testimonialSubtitle: "+150 businesses growing with Jumper",
    testimonial: [
      {
        quote:
          "With the operations agent we automated order management, emails and repetitive tasks. In one month we saved hours of daily work and significantly increased our client portfolio.",
        author: "Jorge Pena",
        role: "Director",
        company: "Caves Saint Gilles",
      },
      {
        quote:
          "We automated appointment management and client follow-ups. In one month we saved hours of work and notably improved customer satisfaction. The ROI was immediate.",
        author: "Justine Duru",
        role: "Founder",
        company: "Pethome",
      },
      {
        quote:
          "We've automated 80% of our operations and increased sales by 25% since the first month. Task management and client follow-up are now simple and efficient.",
        author: "Julien L.",
        role: "CEO",
        company: "B2B Distributor",
      },
    ],
    whatsappMessage:
      "Hello, I want to book a Jumper AI demo to see how to automate my business.",
    available24_7: "Available 24/7",
    freeTrialDays: "7 days free",
    stickyCtaText: "Book free demo →",
    footerText: "© 2025 Jumper Enterprise. All rights reserved.",
  },

  fr: {
    slogan: "Votre entreprise en pilote automatique",
    backButton: "Retour",
    heroBadge: "Automatisation IA pour les entreprises modernes",
    heroTitle: "Votre entreprise en pilote automatique. 24h/24.",
    heroSubtitle: "Plus de revenus. Moins de travail manuel. Zéro excuses.",
    heroDesc:
      "Jumper active une équipe IA spécialisée qui travaille pendant que vous dormez : convertit les leads, planifie des rendez-vous, gère les avis et automatise les opérations complètes.",
    heroRating: "4.9/5 · +150 entreprises",
    cta: "Réserver une démo gratuite",
    ctaDemo: "Voir comment ça marche",
    ctaTrial: "Commencer l'essai gratuit",
    flashBenefits: [
      { icon: "⚡", text: "En ligne en 48h" },
      { icon: "🔒", text: "Sans contrat" },
      { icon: "🎯", text: "Setup inclus" },
    ],
    trustBarLabel: "Automatisant des entreprises en",
    painPointsTitle: "Votre entreprise fonctionne-t-elle encore comme ça?",
    painPointsSubtitle:
      "Chaque heure que votre équipe passe sur ces tâches est de l'argent laissé sur la table.",
    painPoints: [
      {
        icon: "⏱",
        title: "Leads sans réponse rapide",
        desc: "78% des leads achètent au premier qui répond. Votre concurrence a déjà automatisé ça.",
      },
      {
        icon: "📋",
        title: "Suivi client manuel",
        desc: "Votre équipe perd 3h/jour à envoyer messages, rappels et emails de suivi.",
      },
      {
        icon: "📅",
        title: "No-shows et RDV oubliés",
        desc: "Sans rappels automatiques, 30% des RDV ne se présentent pas. Revenus perdus directement.",
      },
      {
        icon: "⭐",
        title: "Réputation non gérée",
        desc: "Les avis négatifs sans réponse détruisent votre crédibilité. Chaque étoile compte.",
      },
      {
        icon: "📧",
        title: "Prospection qui ne scale pas",
        desc: "La prospection manuelle prend des heures. Un agent IA peut faire 100x plus.",
      },
      {
        icon: "🛒",
        title: "Boutique sans attention 24h/24",
        desc: "Chaque client qui attend une réponse hors horaires est une vente perdue.",
      },
    ],
    agentsSectionTitle: "Votre équipe IA: 8 spécialistes actifs 24h/24",
    agentsSectionSubtitle:
      "Chaque agent est formé pour une fonction spécifique de votre entreprise. Ils travaillent en équipe, en parallèle, sans repos.",
    agents: [
      {
        icon: "📞",
        name: "Sales AI",
        title: "Agent de Vente",
        desc: "Qualifie les leads, gère les appels et planifie les rendez-vous automatiquement. Convertit chaque opportunité en revenu réel.",
        color: "#f59e0b",
        features: [
          "Qualification automatique des leads",
          "Appels et suivi 24h/24",
          "Planifie des RDV dans votre agenda",
          "Rapports de conversion en temps réel",
        ],
      },
      {
        icon: "⭐",
        name: "Review AI",
        title: "Réputation en Ligne",
        desc: "Demande des avis, répond automatiquement et protège votre réputation. Plus d'étoiles = plus de clients = plus d'argent.",
        color: "#10b981",
        features: [
          "Demandes d'avis automatiques",
          "Réponses intelligentes aux Google Reviews",
          "Alertes avis négatifs",
          "Surveillance réputation en temps réel",
        ],
      },
      {
        icon: "📅",
        name: "Scheduling AI",
        title: "Gestion des Rendez-vous",
        desc: "Remplissez votre agenda sans effort. Confirme, rappelle et reprogramme automatiquement. Zéro no-show.",
        color: "#3b82f6",
        features: [
          "Planification auto 24h/24",
          "Rappels SMS et WhatsApp",
          "Sync Google Calendar",
          "Reprogrammation intelligente",
        ],
      },
      {
        icon: "📝",
        name: "Content AI",
        title: "Contenu & SEO",
        desc: "Détecte les tendances, génère des articles optimisés et positionne votre marque. Contenu qui attire des clients sans publicité.",
        color: "#8b5cf6",
        features: [
          "Articles SEO optimisés",
          "Détection de tendances marché",
          "Publication automatique",
          "Analyse mots-clés et positionnement",
        ],
      },
      {
        icon: "🗂️",
        name: "Operations AI",
        title: "Opérations Internes",
        desc: "Élimine le travail répétitif: emails, résumés, gestion de documents et tâches programmées gérés automatiquement.",
        color: "#ec4899",
        features: [
          "Gestion de boîte de réception",
          "Organisation automatique de documents",
          "Résumés et rapports quotidiens",
          "Flux de travail automatisés",
        ],
      },
      {
        icon: "🛒",
        name: "Commerce AI",
        title: "E-Commerce & Boutiques",
        desc: "Votre boutique en pilote automatique: commandes, inventaire, suivi des livraisons et service client 24h/24.",
        color: "#06b6d4",
        features: [
          "Gestion automatique des commandes",
          "Contrôle d'inventaire en temps réel",
          "Suivi des livraisons",
          "Support client automatisé",
        ],
      },
      {
        icon: "📧",
        name: "Outreach AI",
        title: "Prospection & Email",
        desc: "Trouve des leads qualifiés et les contacte avec des messages personnalisés qui ouvrent de vraies conversations.",
        color: "#f97316",
        features: [
          "Recherche et qualification de prospects",
          "Séquences email personnalisées",
          "Suivi automatique multi-touch",
          "Scoring et priorisation des leads",
        ],
      },
      {
        icon: "🏆",
        name: "Growth Suite",
        title: "Suite Complète",
        desc: "Tous les agents travaillant en équipe. Automatisation totale des ventes, marketing et opérations.",
        color: "#eab308",
        features: [
          "8 agents IA inclus",
          "Intégration et coordination totale",
          "Support dédié prioritaire",
          "Personnalisation et formation avancée",
        ],
      },
    ],
    industriesTitle: "Conçu pour votre secteur",
    industriesSubtitle:
      "Peu importe votre secteur. Jumper s'adapte et automatise ce qui compte le plus pour votre type d'entreprise.",
    industries: [
      {
        id: "restaurants",
        icon: "🍽️",
        label: "Restaurants",
        pain: "Réservations manuelles, avis non gérés, commandes téléphoniques qui distraient l'équipe",
        automations: [
          "Réservations 24h/24 via WhatsApp",
          "Review AI demande des avis post-visite",
          "Rappels de réservation automatiques",
          "Réponses aux avis Google Maps",
        ],
        result: "Les restaurants avec Jumper remplissent 95% de leurs réservations avec 4.8+ sur Google.",
      },
      {
        id: "clinics",
        icon: "🏥",
        label: "Cliniques",
        pain: "RDV oubliés, appels de confirmation manuels, pas de suivi post-consultation",
        automations: [
          "Prise de RDV par WhatsApp",
          "Rappels 24h et 1h avant",
          "Suivi post-consultation automatique",
          "Gestion des avis patients",
        ],
        result: "Les cliniques réduisent les no-shows de 60% et économisent +15h/semaine.",
      },
      {
        id: "coaches",
        icon: "🎓",
        label: "Coachs",
        pain: "Leads qui ne convertissent pas, suivi manuel des prospects, contenu inconsistant",
        automations: [
          "Qualification automatique des leads entrants",
          "Séquences de nurturing personnalisées",
          "Planification de sessions de découverte",
          "Contenu SEO qui attire des prospects",
        ],
        result: "Les coachs doublent leur taux de clôture et réduisent 80% du temps admin.",
      },
      {
        id: "realestate",
        icon: "🏢",
        label: "Immobilier",
        pain: "Leads froids sans suivi, visites non confirmées, clients qui comparent sans décider",
        automations: [
          "Suivi automatique des leads 24h/24",
          "Confirmation de visites par WhatsApp",
          "Nurturing jusqu'à la décision d'achat",
          "Prospection de nouveaux acheteurs",
        ],
        result: "Les agences closent 3x plus d'opérations avec la même équipe commerciale.",
      },
      {
        id: "ecommerce",
        icon: "🛍️",
        label: "E-Commerce",
        pain: "Paniers abandonnés, support hors horaires, suivi post-achat manuel",
        automations: [
          "Récupération automatique de paniers",
          "Support 24h/24 WhatsApp et chat",
          "Suivi de livraison et après-vente",
          "Réactivation de clients inactifs",
        ],
        result: "Les boutiques récupèrent 25% des paniers abandonnés et augmentent le LTV client.",
      },
      {
        id: "agencies",
        icon: "📊",
        label: "Agences",
        pain: "Onboarding client manuel, rapports qui prennent des heures, prospection non scalable",
        automations: [
          "Onboarding automatique des nouveaux clients",
          "Rapports hebdomadaires automatiques",
          "Prospection et outreach à grande échelle",
          "Suivi de projets et livraisons",
        ],
        result: "Les agences scalent sans embaucher: plus de clients, même structure.",
      },
    ],
    demoVisualTitle: "Votre équipe IA, travaillant en ce moment",
    demoVisualSubtitle:
      "Pendant que vous lisez ceci, des entreprises comme la vôtre ont des agents IA répondant à des leads, planifiant des RDV et générant des avis. En temps réel.",
    resultsTitle: "Des résultats qui s'affichent dans vos comptes",
    results: [
      { value: "+150", label: "Entreprises actives", desc: "Dans 3 pays" },
      { value: "80%", label: "Tâches automatisées", desc: "Moyenne par client" },
      { value: "4.9/5", label: "Satisfaction client", desc: "Basé sur des enquêtes" },
      { value: "24/7", label: "Disponibilité", desc: "Sans interruptions" },
    ],
    processTitle: "3 étapes pour une automatisation totale",
    processSubtitle: "Sans code. Sans embauche. Sans configuration technique.",
    process: [
      {
        number: 1,
        title: "Onboarding guidé",
        description:
          "Notre équipe fait un onboarding personnalisé. Nous configurons tout selon votre entreprise, vos clients et vos objectifs.",
        icon: "🎯",
      },
      {
        number: 2,
        title: "Formation IA",
        description:
          "Les agents apprennent votre entreprise, votre ton et vos processus. En 48 heures, ils sont prêts.",
        icon: "🧠",
      },
      {
        number: 3,
        title: "Automatisation active",
        description:
          "Vos agents commencent à travailler 24h/24. Vous voyez des résultats dès la première semaine.",
        icon: "🚀",
      },
    ],
    integrationsTitle: "Se connecte aux outils que vous utilisez déjà",
    integrationsSubtitle: "+12 intégrations natives. Sans développement. Sans friction.",
    integrations: [
      { name: "WhatsApp", icon: "📱", category: "Messagerie" },
      { name: "Gmail", icon: "📧", category: "Email" },
      { name: "Google Calendar", icon: "📅", category: "Calendrier" },
      { name: "LinkedIn", icon: "💼", category: "Réseaux" },
      { name: "Instagram", icon: "📸", category: "Réseaux" },
      { name: "Facebook", icon: "👥", category: "Réseaux" },
      { name: "Slack", icon: "💬", category: "Communication" },
      { name: "Notion", icon: "📝", category: "Productivité" },
      { name: "HubSpot", icon: "🎯", category: "CRM" },
      { name: "Stripe", icon: "💳", category: "Paiements" },
      { name: "Shopify", icon: "🛍️", category: "E-commerce" },
      { name: "WordPress", icon: "🌐", category: "Web" },
    ],
    pricingTitle: "Un investissement qui se rembourse seul",
    pricingSubtitle: "Un seul lead closé couvre des mois de Jumper. Le ROI est immédiat.",
    pricingMonthly: "Mensuel",
    pricingYearly: "Annuel (2 mois gratuits)",
    pricingPlans: [
      {
        name: "Essentiel",
        monthlyPrice: "120€",
        yearlyPrice: "960€",
        description: "Pour les entreprises qui veulent commencer à automatiser",
        features: [
          "3 agents IA au choix",
          "1 000 interactions/mois",
          "WhatsApp + Email inclus",
          "Support par email",
          "Onboarding personnalisé",
        ],
        cta: "Commencer gratuitement",
      },
      {
        name: "Professionnel",
        monthlyPrice: "200€",
        yearlyPrice: "1 600€",
        description: "Pour les entreprises en croissance qui veulent scaler",
        features: [
          "6 agents IA au choix",
          "5 000 interactions/mois",
          "Toutes les intégrations",
          "Support prioritaire",
          "Onboarding VIP",
          "Rapports et analytics",
        ],
        popular: true,
        cta: "Commencer gratuitement",
      },
      {
        name: "Business+",
        monthlyPrice: "Sur mesure",
        yearlyPrice: "Sur mesure",
        description: "Pour les entreprises qui veulent une automatisation totale",
        features: [
          "8 agents IA complets",
          "Interactions illimitées",
          "Intégrations personnalisées",
          "Support dédié 24h/24",
          "Onboarding + Formation VIP",
          "Accès API complet",
          "SLA garanti",
        ],
        cta: "Parler aux ventes",
      },
    ],
    faqTitle: "Questions qu'ils posent toujours",
    faqSubtitle: "Réponses directes. Sans détours.",
    faq: [
      {
        question: "Qu'est-ce qui distingue Jumper de ChatGPT ou d'une IA générique?",
        answer:
          "ChatGPT répond aux questions. Les agents Jumper exécutent des tâches commerciales spécifiques: appeler des clients, planifier des RDV, répondre aux avis, envoyer des emails. Ils n'ont pas de conversation — ils agissent et génèrent des résultats mesurables.",
      },
      {
        question: "Ai-je besoin de connaissances techniques?",
        answer:
          "Aucune. Notre équipe fait toute la configuration pour vous. Il vous suffit de nous expliquer comment fonctionne votre entreprise. En 48 heures, vos agents sont en ligne.",
      },
      {
        question: "Combien de temps prend l'implémentation?",
        answer:
          "Entre 24 et 48 heures depuis l'onboarding initial. Dès le premier jour, vous pouvez voir les agents répondre aux messages et traiter les leads.",
      },
      {
        question: "Puis-je annuler à tout moment?",
        answer:
          "Oui, sans pénalités ni contrats à long terme. Si vous n'êtes pas satisfait, vous annulez. Simple.",
      },
      {
        question: "Mes données sont-elles sécurisées?",
        answer:
          "Nous respectons le RGPD. Vos données sont cryptées, hébergées sur des serveurs sécurisés et jamais partagées avec des tiers. Vous possédez tout.",
      },
      {
        question: "Les agents parlent-ils plusieurs langues?",
        answer:
          "Oui. Nos agents sont multilingues: espagnol, anglais, français, portugais et plus. Parfait pour les entreprises avec des clients internationaux.",
      },
      {
        question: "Que faire si j'ai besoin de quelque chose de très spécifique?",
        answer:
          "Le plan Business+ inclut une personnalisation complète. Nous pouvons également développer des flux personnalisés. Contactez-nous et nous concevons la solution exacte pour votre cas.",
      },
      {
        question: "Le support technique est-il disponible?",
        answer:
          "Tous les plans incluent le support. Les plans Pro et Business+ ont un support prioritaire avec des réponses en moins de 2 heures.",
      },
    ],
    workSteps: [
      "Attirez l'attention avec le chat IA sur votre site, WhatsApp ou Telegram",
      "Générez de l'intérêt avec des démos instantanées et des réponses automatiques",
      "Convertissez chaque contact en vente avec un suivi automatique",
    ],
    demoTitle: "Votre entreprise mérite de fonctionner en automatique",
    demoDesc:
      "Réservez une démo de 30 minutes. Nous vous montrons comment Jumper fonctionne pour votre type d'entreprise. Pas de génériques. Sans engagement.",
    demoWhatsapp: "Discuter sur WhatsApp maintenant",
    demoCalendly: "Réserver une démo personnalisée",
    testimonialTitle: "Ce que disent ceux qui ont déjà automatisé",
    testimonialSubtitle: "+150 entreprises qui grandissent avec Jumper",
    testimonial: [
      {
        quote:
          "Avec l'agent d'opérations, nous avons automatisé la gestion des commandes, emails et tâches répétitives. En un mois, nous avons économisé des heures de travail quotidien et augmenté notre portefeuille clients.",
        author: "Jorge Pena",
        role: "Directeur",
        company: "Caves Saint Gilles",
      },
      {
        quote:
          "Nous avons automatisé la gestion des rendez-vous et le suivi client. En un mois, nous avons économisé du temps et amélioré la satisfaction client. Le ROI a été immédiat.",
        author: "Justine Duru",
        role: "Fondatrice",
        company: "Pethome",
      },
      {
        quote:
          "Nous avons automatisé 80% de nos opérations et augmenté les ventes de 25% dès le premier mois. La gestion des tâches et le suivi client sont maintenant simples et efficaces.",
        author: "Julien L.",
        role: "CEO",
        company: "Distributeur B2B",
      },
    ],
    whatsappMessage:
      "Bonjour, je souhaite réserver une démo Jumper AI pour voir comment automatiser mon entreprise.",
    available24_7: "Disponible 24h/24",
    freeTrialDays: "7 jours gratuits",
    stickyCtaText: "Réserver démo gratuite →",
    footerText: "© 2025 Jumper Enterprise. Tous droits réservés.",
  },
};

export const modalTranslations: Record<Lang, ModalTranslation> = {
  es: {
    title: "Reserva tu Demo Gratuita",
    desc: "Completa tus datos y uno de nuestros especialistas te contactará para preparar tu demo personalizada.",
    placeholders: {
      name: "Nombre completo",
      email: "Correo electrónico",
      company: "Empresa",
      position: "Cargo",
      interest: "¿Qué quieres automatizar?",
      date: "Fecha deseada",
    },
    submit: "Reservar Demo",
    submitting: "Enviando...",
    successTitle: "¡Demo reservada!",
    successDesc:
      "Hemos recibido tu solicitud. Te contactaremos pronto para coordinar tu demo personalizada de 30 minutos.",
    close: "Cerrar",
    selectAgent: "Selecciona un Agente",
    premiumTitle: "Jumper Growth Suite",
    agents: [
      { title: "Sales AI — Ventas" },
      { title: "Review AI — Reputación" },
      { title: "Scheduling AI — Citas" },
      { title: "Content AI — SEO" },
      { title: "Operations AI — Operaciones" },
      { title: "Commerce AI — E-Commerce" },
      { title: "Outreach AI — Prospección" },
      { title: "Growth Suite — Completo" },
    ],
  },
  en: {
    title: "Book Your Free Demo",
    desc: "Fill in your details and one of our specialists will contact you to prepare your personalized demo.",
    placeholders: {
      name: "Full Name",
      email: "Email",
      company: "Company",
      position: "Position",
      interest: "What do you want to automate?",
      date: "Preferred Date",
    },
    submit: "Book Demo",
    submitting: "Submitting...",
    successTitle: "Demo booked!",
    successDesc:
      "We have received your request. We will contact you shortly to schedule your personalized 30-minute demo.",
    close: "Close",
    selectAgent: "Select an Agent",
    premiumTitle: "Jumper Growth Suite",
    agents: [
      { title: "Sales AI — Sales" },
      { title: "Review AI — Reputation" },
      { title: "Scheduling AI — Appointments" },
      { title: "Content AI — SEO" },
      { title: "Operations AI — Operations" },
      { title: "Commerce AI — E-Commerce" },
      { title: "Outreach AI — Prospecting" },
      { title: "Growth Suite — Complete" },
    ],
  },
  fr: {
    title: "Réservez votre Démo Gratuite",
    desc: "Remplissez vos informations et l'un de nos spécialistes vous contactera pour préparer votre démo personnalisée.",
    placeholders: {
      name: "Nom complet",
      email: "Email",
      company: "Entreprise",
      position: "Poste",
      interest: "Que voulez-vous automatiser?",
      date: "Date souhaitée",
    },
    submit: "Réserver la Démo",
    submitting: "Envoi...",
    successTitle: "Démo réservée!",
    successDesc:
      "Nous avons reçu votre demande. Nous vous contacterons bientôt pour coordonner votre démo personnalisée de 30 minutes.",
    close: "Fermer",
    selectAgent: "Sélectionnez un Agent",
    premiumTitle: "Jumper Growth Suite",
    agents: [
      { title: "Sales AI — Ventes" },
      { title: "Review AI — Réputation" },
      { title: "Scheduling AI — Rendez-vous" },
      { title: "Content AI — SEO" },
      { title: "Operations AI — Opérations" },
      { title: "Commerce AI — E-Commerce" },
      { title: "Outreach AI — Prospection" },
      { title: "Growth Suite — Complet" },
    ],
  },
};
