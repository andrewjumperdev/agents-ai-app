import { Lang, ModalTranslation, Translation } from "../types/types";

export const translations: Record<Lang, Translation> = {
  es: {
    slogan: "Automatiza tu negocio con IA",
    backButton: "Volver",
    heroBadge: "Plataforma #1 en Automatización IA",
    heroTitle: "9 Agentes IA autónomos al servicio de tu empresa",
    heroSubtitle: "Disponible 24/7: tu equipo IA nunca duerme",
    heroDesc:
      "Multiplica tus ventas, ahorra +10 horas semanales y automatiza tu negocio con agentes IA que trabajan por ti las 24 horas.",
    heroRating: "4.9/5 basado en +150 empresas",
    cta: "Probar 7 días gratis",
    ctaDemo: "Reservar una demo",
    ctaTrial: "Comenzar prueba gratuita",
    flashBenefits: [
      { icon: "🤖", text: "Sin código requerido" },
      { icon: "🎯", text: "Onboarding personalizado" },
      { icon: "🔒", text: "Datos 100% seguros" },
    ],
    agentsSectionTitle: "Conoce a tu nuevo equipo IA",
    agentsSectionSubtitle: "9 agentes especializados trabajando 24/7 para hacer crecer tu negocio",
    agents: [
      {
        icon: "📞",
        name: "Marco",
        title: "Agente Ventas Pro",
        desc: "Gestiona llamadas, califica leads y agenda citas automáticamente. Convierte cada oportunidad en ventas reales 24/7.",
        color: "#f59e0b",
        features: ["Llamadas automáticas", "Calificación de leads", "Seguimiento personalizado", "Reportes de conversión"]
      },
      {
        icon: "⭐",
        name: "Luna",
        title: "StarVault - Google Reviews",
        desc: "Construye una reputación online sólida. Gestiona reseñas, responde automáticamente y genera confianza instantánea.",
        color: "#10b981",
        features: ["Solicitud de reseñas", "Respuestas automáticas", "Monitoreo de reputación", "Alertas negativas"]
      },
      {
        icon: "📅",
        name: "Alex",
        title: "Appointment Setter",
        desc: "Organiza reuniones y recordatorios automáticamente. Reduce no-shows y maximiza cada cita de tu calendario.",
        color: "#3b82f6",
        features: ["Agenda automática", "Recordatorios SMS/Email", "Sincronización calendarios", "Reprogramación inteligente"]
      },
      {
        icon: "📝",
        name: "Sofía",
        title: "Content Magnet - SEO",
        desc: "Crea contenido que atrae clientes. Detecta tendencias, genera artículos optimizados y posiciona tu marca.",
        color: "#8b5cf6",
        features: ["Artículos SEO", "Detección tendencias", "Optimización keywords", "Publicación automática"]
      },
      {
        icon: "🗂️",
        name: "Carlos",
        title: "Executive Assistant",
        desc: "Libera a tu equipo de tareas repetitivas: emails, agendas y documentos gestionados automáticamente.",
        color: "#ec4899",
        features: ["Gestión emails", "Organización documentos", "Resúmenes automáticos", "Tareas programadas"]
      },
      {
        icon: "🛒",
        name: "Diana",
        title: "StorePilot E-Commerce",
        desc: "Automatiza pedidos, stock y seguimiento. Tu tienda funciona sola mientras las ventas suben sin esfuerzo.",
        color: "#06b6d4",
        features: ["Gestión pedidos", "Control de stock", "Seguimiento envíos", "Atención cliente"]
      },
      {
        icon: "📧",
        name: "Pablo",
        title: "LeadHunter - Prospección",
        desc: "Encuentra leads calificados y contáctalos con mensajes personalizados que generan respuestas reales.",
        color: "#f97316",
        features: ["Búsqueda de leads", "Emails personalizados", "Seguimiento automático", "Scoring de prospectos"]
      },
      {
        icon: "💬",
        name: "Elena",
        title: "Icebreaker Pro - LinkedIn",
        desc: "Abre conversaciones con prospectos antes que tu competencia. Mensajes que generan interés y engagement.",
        color: "#0ea5e9",
        features: ["Conexiones LinkedIn", "Mensajes personalizados", "Secuencias automáticas", "Análisis de respuestas"]
      },
      {
        icon: "🏆",
        name: "Jumper",
        title: "Growth Suite Premium",
        desc: "Todos los agentes trabajando en equipo para automatizar ventas, soporte y marketing. Máxima eficiencia.",
        color: "#eab308",
        features: ["9 agentes incluidos", "Integración total", "Soporte prioritario", "Personalización avanzada"]
      },
    ],
    processTitle: "¿Cómo funciona?",
    processSubtitle: "En 3 simples pasos, tu equipo IA estará listo para trabajar",
    process: [
      {
        number: 1,
        title: "Onboarding personalizado",
        description: "Nuestro equipo configura los agentes según las necesidades específicas de tu negocio.",
        icon: "🎯"
      },
      {
        number: 2,
        title: "Entrenamiento IA",
        description: "Los agentes aprenden sobre tu empresa, productos y forma de comunicar.",
        icon: "🧠"
      },
      {
        number: 3,
        title: "Automatización activa",
        description: "Tus agentes comienzan a trabajar 24/7 mientras tú te enfocas en crecer.",
        icon: "🚀"
      }
    ],
    integrationsTitle: "Se integra con tus herramientas favoritas",
    integrationsSubtitle: "+12 integraciones disponibles para conectar todo tu ecosistema",
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
    pricingTitle: "Planes simples y transparentes",
    pricingSubtitle: "Elige el plan que mejor se adapte a tu negocio. Todos incluyen 7 días gratis.",
    pricingMonthly: "Mensual",
    pricingYearly: "Anual (2 meses gratis)",
    pricingPlans: [
      {
        name: "Esencial",
        monthlyPrice: "$120",
        yearlyPrice: "$960",
        description: "Perfecto para emprendedores y pequeños negocios",
        features: [
          "3 agentes IA a elegir",
          "1,000 interacciones/mes",
          "Integraciones básicas",
          "Soporte por email",
          "Onboarding guiado"
        ],
        cta: "Comenzar gratis"
      },
      {
        name: "Profesional",
        monthlyPrice: "$200",
        yearlyPrice: "$1,600",
        description: "Ideal para negocios en crecimiento",
        features: [
          "6 agentes IA a elegir",
          "5,000 interacciones/mes",
          "Todas las integraciones",
          "Soporte prioritario",
          "Onboarding personalizado",
          "Reportes avanzados"
        ],
        popular: true,
        cta: "Comenzar gratis"
      },
      {
        name: "Business+",
        monthlyPrice: "Personalizado",
        yearlyPrice: "Personalizado",
        description: "Para empresas con necesidades específicas",
        features: [
          "9 agentes IA completos",
          "Interacciones ilimitadas",
          "Integraciones custom",
          "Soporte 24/7 dedicado",
          "Onboarding VIP",
          "API acceso completo",
          "SLA garantizado"
        ],
        cta: "Contactar ventas"
      }
    ],
    faqTitle: "Preguntas frecuentes",
    faqSubtitle: "Todo lo que necesitas saber sobre nuestros agentes IA",
    faq: [
      {
        question: "¿Qué diferencia hay entre Jumper y ChatGPT?",
        answer: "ChatGPT es una IA conversacional genérica. Jumper son agentes especializados que ejecutan tareas específicas de tu negocio: llamar clientes, gestionar citas, responder reseñas, etc. No solo conversan, actúan."
      },
      {
        question: "¿Necesito conocimientos técnicos para usar Jumper?",
        answer: "No. Nuestro equipo configura todo por ti. Solo necesitas contarnos sobre tu negocio y nosotros nos encargamos de entrenar y configurar tus agentes IA."
      },
      {
        question: "¿Cuánto tiempo toma la implementación?",
        answer: "La configuración inicial toma 24-48 horas. Después del onboarding, tus agentes estarán operativos y listos para trabajar 24/7."
      },
      {
        question: "¿Puedo cancelar en cualquier momento?",
        answer: "Sí. No hay contratos de permanencia. Puedes cancelar tu suscripción cuando quieras sin penalizaciones."
      },
      {
        question: "¿Mis datos están seguros?",
        answer: "Absolutamente. Cumplimos con GDPR y las mejores prácticas de seguridad. Tus datos están encriptados y nunca se comparten con terceros."
      },
      {
        question: "¿Qué pasa si necesito más interacciones?",
        answer: "Puedes actualizar tu plan en cualquier momento o contactarnos para un plan personalizado según tus necesidades."
      },
      {
        question: "¿Los agentes pueden hablar en varios idiomas?",
        answer: "Sí. Nuestros agentes son multilingües y pueden comunicarse en español, inglés, francés, portugués y más."
      },
      {
        question: "¿Ofrecen soporte técnico?",
        answer: "Sí. Todos los planes incluyen soporte. Los planes Pro y Business+ tienen soporte prioritario y dedicado 24/7."
      }
    ],
    workSteps: [
      "Captura atención con chat IA en tu sitio, WhatsApp o Telegram",
      "Genera interés con demos instantáneas y respuestas automáticas",
      "Convierte cada contacto en venta con ofertas irresistibles",
    ],
    demoTitle: "¿Listo para automatizar tu negocio?",
    demoDesc: "Prueba gratis durante 7 días. Sin tarjeta de crédito. Sin compromiso.",
    demoWhatsapp: "Hablar por WhatsApp",
    demoCalendly: "Reservar demo personalizada",
    testimonialTitle: "Lo que dicen nuestros clientes",
    testimonialSubtitle: "+150 empresas ya confían en Jumper para crecer",
    testimonial: [
      {
        quote: "Con el Agente Secretario automatizamos la gestión de pedidos, emails y tareas repetitivas. En un mes, ahorramos horas de trabajo diario y aumentamos nuestra cartera de clientes significativamente.",
        author: "Jorge Pena",
        role: "Director",
        company: "Caves Saint Gilles"
      },
      {
        quote: "Automatizamos la gestión de citas y seguimientos con clientes. En un mes, ahorramos horas de trabajo y mejoramos la satisfacción del cliente notablemente.",
        author: "Justine Duru",
        role: "Fundadora",
        company: "Pethome"
      },
      {
        quote: "Hemos automatizado el 80% de nuestras operaciones y aumentado ventas en un 25% desde el primer mes. La gestión de tareas y el seguimiento de clientes son ahora simples y eficaces.",
        author: "Julien L.",
        role: "CEO",
        company: "Distribuidora B2B"
      },
    ],
    whatsappMessage: "Hola, quiero probar los Agentes IA de Jumper y agendar una demo personalizada.",
    available24_7: "Disponible 24/7",
    freeTrialDays: "7 días gratis",
    footerText: "© 2025 Jumper Enterprise. Todos los derechos reservados.",
  },

  en: {
    slogan: "Automate your business with AI",
    backButton: "Back",
    heroBadge: "#1 AI Automation Platform",
    heroTitle: "9 Autonomous AI Agents at your company's service",
    heroSubtitle: "Available 24/7: your AI team never sleeps",
    heroDesc:
      "Multiply your sales, save +10 hours weekly and automate your business with AI agents that work for you around the clock.",
    heroRating: "4.9/5 based on +150 companies",
    cta: "Try 7 days free",
    ctaDemo: "Book a demo",
    ctaTrial: "Start free trial",
    flashBenefits: [
      { icon: "🤖", text: "No code required" },
      { icon: "🎯", text: "Personalized onboarding" },
      { icon: "🔒", text: "100% secure data" },
    ],
    agentsSectionTitle: "Meet your new AI team",
    agentsSectionSubtitle: "9 specialized agents working 24/7 to grow your business",
    agents: [
      {
        icon: "📞",
        name: "Marco",
        title: "AI Sales Pro",
        desc: "Manages calls, qualifies leads and schedules appointments automatically. Converts every opportunity into real sales 24/7.",
        color: "#f59e0b",
        features: ["Automatic calls", "Lead qualification", "Personalized follow-up", "Conversion reports"]
      },
      {
        icon: "⭐",
        name: "Luna",
        title: "StarVault - Google Reviews",
        desc: "Build a solid online reputation. Manage reviews, respond automatically and generate instant trust.",
        color: "#10b981",
        features: ["Review requests", "Auto responses", "Reputation monitoring", "Negative alerts"]
      },
      {
        icon: "📅",
        name: "Alex",
        title: "Appointment Setter",
        desc: "Organize meetings and reminders automatically. Reduce no-shows and maximize every appointment.",
        color: "#3b82f6",
        features: ["Automatic scheduling", "SMS/Email reminders", "Calendar sync", "Smart rescheduling"]
      },
      {
        icon: "📝",
        name: "Sofia",
        title: "Content Magnet - SEO",
        desc: "Create content that attracts customers. Detect trends, generate optimized articles and position your brand.",
        color: "#8b5cf6",
        features: ["SEO articles", "Trend detection", "Keyword optimization", "Auto publishing"]
      },
      {
        icon: "🗂️",
        name: "Carlos",
        title: "Executive Assistant",
        desc: "Free your team from repetitive tasks: emails, schedules and documents managed automatically.",
        color: "#ec4899",
        features: ["Email management", "Document organization", "Auto summaries", "Scheduled tasks"]
      },
      {
        icon: "🛒",
        name: "Diana",
        title: "StorePilot E-Commerce",
        desc: "Automate orders, stock and tracking. Your store runs itself while sales increase effortlessly.",
        color: "#06b6d4",
        features: ["Order management", "Stock control", "Shipment tracking", "Customer service"]
      },
      {
        icon: "📧",
        name: "Pablo",
        title: "LeadHunter - Prospecting",
        desc: "Find qualified leads and contact them with personalized messages that generate real responses.",
        color: "#f97316",
        features: ["Lead search", "Personalized emails", "Auto follow-up", "Prospect scoring"]
      },
      {
        icon: "💬",
        name: "Elena",
        title: "Icebreaker Pro - LinkedIn",
        desc: "Start conversations with prospects before your competition. Messages that generate interest and engagement.",
        color: "#0ea5e9",
        features: ["LinkedIn connections", "Personalized messages", "Auto sequences", "Response analytics"]
      },
      {
        icon: "🏆",
        name: "Jumper",
        title: "Growth Suite Premium",
        desc: "All agents working together to automate sales, support and marketing. Maximum efficiency.",
        color: "#eab308",
        features: ["9 agents included", "Full integration", "Priority support", "Advanced customization"]
      },
    ],
    processTitle: "How does it work?",
    processSubtitle: "In 3 simple steps, your AI team will be ready to work",
    process: [
      {
        number: 1,
        title: "Personalized onboarding",
        description: "Our team configures the agents according to your business specific needs.",
        icon: "🎯"
      },
      {
        number: 2,
        title: "AI training",
        description: "The agents learn about your company, products and communication style.",
        icon: "🧠"
      },
      {
        number: 3,
        title: "Active automation",
        description: "Your agents start working 24/7 while you focus on growing.",
        icon: "🚀"
      }
    ],
    integrationsTitle: "Integrates with your favorite tools",
    integrationsSubtitle: "+12 integrations available to connect your entire ecosystem",
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
    pricingTitle: "Simple and transparent pricing",
    pricingSubtitle: "Choose the plan that best fits your business. All include 7 free days.",
    pricingMonthly: "Monthly",
    pricingYearly: "Yearly (2 months free)",
    pricingPlans: [
      {
        name: "Essential",
        monthlyPrice: "$120",
        yearlyPrice: "$960",
        description: "Perfect for entrepreneurs and small businesses",
        features: [
          "3 AI agents of your choice",
          "1,000 interactions/month",
          "Basic integrations",
          "Email support",
          "Guided onboarding"
        ],
        cta: "Start free"
      },
      {
        name: "Professional",
        monthlyPrice: "$200",
        yearlyPrice: "$1,600",
        description: "Ideal for growing businesses",
        features: [
          "6 AI agents of your choice",
          "5,000 interactions/month",
          "All integrations",
          "Priority support",
          "Personalized onboarding",
          "Advanced reports"
        ],
        popular: true,
        cta: "Start free"
      },
      {
        name: "Business+",
        monthlyPrice: "Custom",
        yearlyPrice: "Custom",
        description: "For companies with specific needs",
        features: [
          "All 9 AI agents",
          "Unlimited interactions",
          "Custom integrations",
          "Dedicated 24/7 support",
          "VIP onboarding",
          "Full API access",
          "Guaranteed SLA"
        ],
        cta: "Contact sales"
      }
    ],
    faqTitle: "Frequently asked questions",
    faqSubtitle: "Everything you need to know about our AI agents",
    faq: [
      {
        question: "What's the difference between Jumper and ChatGPT?",
        answer: "ChatGPT is a generic conversational AI. Jumper are specialized agents that execute specific tasks for your business: calling customers, managing appointments, responding to reviews, etc. They don't just chat, they act."
      },
      {
        question: "Do I need technical knowledge to use Jumper?",
        answer: "No. Our team configures everything for you. You just need to tell us about your business and we take care of training and configuring your AI agents."
      },
      {
        question: "How long does implementation take?",
        answer: "Initial setup takes 24-48 hours. After onboarding, your agents will be operational and ready to work 24/7."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes. There are no long-term contracts. You can cancel your subscription whenever you want without penalties."
      },
      {
        question: "Is my data secure?",
        answer: "Absolutely. We comply with GDPR and security best practices. Your data is encrypted and never shared with third parties."
      },
      {
        question: "What if I need more interactions?",
        answer: "You can upgrade your plan at any time or contact us for a custom plan according to your needs."
      },
      {
        question: "Can the agents speak multiple languages?",
        answer: "Yes. Our agents are multilingual and can communicate in Spanish, English, French, Portuguese and more."
      },
      {
        question: "Do you offer technical support?",
        answer: "Yes. All plans include support. Pro and Business+ plans have priority and dedicated 24/7 support."
      }
    ],
    workSteps: [
      "Capture attention with AI chat on your site, WhatsApp or Telegram",
      "Generate interest with instant demos and automated responses",
      "Convert every contact into a sale with irresistible offers",
    ],
    demoTitle: "Ready to automate your business?",
    demoDesc: "Try free for 7 days. No credit card. No commitment.",
    demoWhatsapp: "Chat on WhatsApp",
    demoCalendly: "Book personalized demo",
    testimonialTitle: "What our customers say",
    testimonialSubtitle: "+150 companies already trust Jumper to grow",
    testimonial: [
      {
        quote: "With the Secretary Agent we automated order management, emails and repetitive tasks. In one month, we saved hours of daily work and significantly increased our client portfolio.",
        author: "Jorge Pena",
        role: "Director",
        company: "Caves Saint Gilles"
      },
      {
        quote: "We automated appointment management and client follow-ups. In one month, we saved hours of work and notably improved customer satisfaction.",
        author: "Justine Duru",
        role: "Founder",
        company: "Pethome"
      },
      {
        quote: "We've automated 80% of our operations and increased sales by 25% since the first month. Task management and client follow-up are now simple and efficient.",
        author: "Julien L.",
        role: "CEO",
        company: "B2B Distributor"
      },
    ],
    whatsappMessage: "Hello, I want to try Jumper AI Agents and schedule a personalized demo.",
    available24_7: "Available 24/7",
    freeTrialDays: "7 days free",
    footerText: "© 2025 Jumper Enterprise. All rights reserved.",
  },

  fr: {
    slogan: "Automatisez votre entreprise avec l'IA",
    backButton: "Retour",
    heroBadge: "Plateforme #1 d'Automatisation IA",
    heroTitle: "9 Agents IA autonomes au service de votre entreprise",
    heroSubtitle: "Disponible 24h/24, 7j/7 : votre équipe IA ne dort jamais",
    heroDesc:
      "Multipliez vos ventes, économisez +10 heures par semaine et automatisez votre entreprise avec des agents IA qui travaillent pour vous 24h/24.",
    heroRating: "4.9/5 basé sur +150 entreprises",
    cta: "Essayer 7 jours gratuitement",
    ctaDemo: "Réserver une démo",
    ctaTrial: "Commencer l'essai gratuit",
    flashBenefits: [
      { icon: "🤖", text: "Sans code requis" },
      { icon: "🎯", text: "Onboarding personnalisé" },
      { icon: "🔒", text: "Données 100% sécurisées" },
    ],
    agentsSectionTitle: "Découvrez votre nouvelle équipe IA",
    agentsSectionSubtitle: "9 agents spécialisés travaillant 24/7 pour faire croître votre entreprise",
    agents: [
      {
        icon: "📞",
        name: "Marco",
        title: "Agent Ventes Pro",
        desc: "Gère les appels, qualifie les leads et programme les rendez-vous automatiquement. Convertit chaque opportunité en ventes réelles 24/7.",
        color: "#f59e0b",
        features: ["Appels automatiques", "Qualification leads", "Suivi personnalisé", "Rapports conversion"]
      },
      {
        icon: "⭐",
        name: "Luna",
        title: "StarVault - Google Reviews",
        desc: "Construisez une réputation en ligne solide. Gérez les avis, répondez automatiquement et générez la confiance instantanément.",
        color: "#10b981",
        features: ["Demandes d'avis", "Réponses auto", "Surveillance réputation", "Alertes négatives"]
      },
      {
        icon: "📅",
        name: "Alex",
        title: "Agent Rendez-vous",
        desc: "Organisez réunions et rappels automatiquement. Réduisez les absences et maximisez chaque rendez-vous.",
        color: "#3b82f6",
        features: ["Planification auto", "Rappels SMS/Email", "Sync calendriers", "Reprogrammation intelligente"]
      },
      {
        icon: "📝",
        name: "Sofia",
        title: "Content Magnet - SEO",
        desc: "Créez du contenu qui attire les clients. Détectez les tendances, générez des articles optimisés et positionnez votre marque.",
        color: "#8b5cf6",
        features: ["Articles SEO", "Détection tendances", "Optimisation mots-clés", "Publication auto"]
      },
      {
        icon: "🗂️",
        name: "Carlos",
        title: "Assistant Exécutif",
        desc: "Libérez votre équipe des tâches répétitives : emails, agendas et documents gérés automatiquement.",
        color: "#ec4899",
        features: ["Gestion emails", "Organisation docs", "Résumés auto", "Tâches programmées"]
      },
      {
        icon: "🛒",
        name: "Diana",
        title: "StorePilot E-Commerce",
        desc: "Automatisez commandes, stock et suivi. Votre boutique fonctionne seule pendant que les ventes augmentent.",
        color: "#06b6d4",
        features: ["Gestion commandes", "Contrôle stock", "Suivi livraisons", "Service client"]
      },
      {
        icon: "📧",
        name: "Pablo",
        title: "LeadHunter - Prospection",
        desc: "Trouvez des prospects qualifiés et contactez-les avec des messages personnalisés qui génèrent de vraies réponses.",
        color: "#f97316",
        features: ["Recherche leads", "Emails personnalisés", "Suivi auto", "Scoring prospects"]
      },
      {
        icon: "💬",
        name: "Elena",
        title: "Icebreaker Pro - LinkedIn",
        desc: "Ouvrez des conversations avec vos prospects avant la concurrence. Messages qui génèrent intérêt et engagement.",
        color: "#0ea5e9",
        features: ["Connexions LinkedIn", "Messages personnalisés", "Séquences auto", "Analyse réponses"]
      },
      {
        icon: "🏆",
        name: "Jumper",
        title: "Growth Suite Premium",
        desc: "Tous les agents travaillant ensemble pour automatiser ventes, support et marketing. Efficacité maximale.",
        color: "#eab308",
        features: ["9 agents inclus", "Intégration totale", "Support prioritaire", "Personnalisation avancée"]
      },
    ],
    processTitle: "Comment ça marche ?",
    processSubtitle: "En 3 étapes simples, votre équipe IA sera prête à travailler",
    process: [
      {
        number: 1,
        title: "Onboarding personnalisé",
        description: "Notre équipe configure les agents selon les besoins spécifiques de votre entreprise.",
        icon: "🎯"
      },
      {
        number: 2,
        title: "Entraînement IA",
        description: "Les agents apprennent sur votre entreprise, vos produits et votre façon de communiquer.",
        icon: "🧠"
      },
      {
        number: 3,
        title: "Automatisation active",
        description: "Vos agents commencent à travailler 24/7 pendant que vous vous concentrez sur la croissance.",
        icon: "🚀"
      }
    ],
    integrationsTitle: "S'intègre avec vos outils favoris",
    integrationsSubtitle: "+12 intégrations disponibles pour connecter tout votre écosystème",
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
    pricingTitle: "Tarifs simples et transparents",
    pricingSubtitle: "Choisissez le plan qui convient le mieux à votre entreprise. Tous incluent 7 jours gratuits.",
    pricingMonthly: "Mensuel",
    pricingYearly: "Annuel (2 mois gratuits)",
    pricingPlans: [
      {
        name: "Essentiel",
        monthlyPrice: "120€",
        yearlyPrice: "960€",
        description: "Parfait pour les entrepreneurs et petites entreprises",
        features: [
          "3 agents IA au choix",
          "1 000 interactions/mois",
          "Intégrations basiques",
          "Support par email",
          "Onboarding guidé"
        ],
        cta: "Commencer gratuitement"
      },
      {
        name: "Professionnel",
        monthlyPrice: "200€",
        yearlyPrice: "1 600€",
        description: "Idéal pour les entreprises en croissance",
        features: [
          "6 agents IA au choix",
          "5 000 interactions/mois",
          "Toutes les intégrations",
          "Support prioritaire",
          "Onboarding personnalisé",
          "Rapports avancés"
        ],
        popular: true,
        cta: "Commencer gratuitement"
      },
      {
        name: "Business+",
        monthlyPrice: "Sur mesure",
        yearlyPrice: "Sur mesure",
        description: "Pour les entreprises avec des besoins spécifiques",
        features: [
          "9 agents IA complets",
          "Interactions illimitées",
          "Intégrations personnalisées",
          "Support dédié 24/7",
          "Onboarding VIP",
          "Accès API complet",
          "SLA garanti"
        ],
        cta: "Contacter les ventes"
      }
    ],
    faqTitle: "Questions fréquentes",
    faqSubtitle: "Tout ce que vous devez savoir sur nos agents IA",
    faq: [
      {
        question: "Quelle est la différence entre Jumper et ChatGPT ?",
        answer: "ChatGPT est une IA conversationnelle générique. Jumper sont des agents spécialisés qui exécutent des tâches spécifiques pour votre entreprise : appeler des clients, gérer des rendez-vous, répondre aux avis, etc. Ils ne discutent pas seulement, ils agissent."
      },
      {
        question: "Ai-je besoin de connaissances techniques pour utiliser Jumper ?",
        answer: "Non. Notre équipe configure tout pour vous. Vous devez simplement nous parler de votre entreprise et nous nous occupons de former et configurer vos agents IA."
      },
      {
        question: "Combien de temps prend l'implémentation ?",
        answer: "La configuration initiale prend 24-48 heures. Après l'onboarding, vos agents seront opérationnels et prêts à travailler 24/7."
      },
      {
        question: "Puis-je annuler à tout moment ?",
        answer: "Oui. Il n'y a pas de contrats à long terme. Vous pouvez annuler votre abonnement quand vous voulez sans pénalités."
      },
      {
        question: "Mes données sont-elles sécurisées ?",
        answer: "Absolument. Nous respectons le RGPD et les meilleures pratiques de sécurité. Vos données sont cryptées et jamais partagées avec des tiers."
      },
      {
        question: "Que se passe-t-il si j'ai besoin de plus d'interactions ?",
        answer: "Vous pouvez mettre à niveau votre plan à tout moment ou nous contacter pour un plan personnalisé selon vos besoins."
      },
      {
        question: "Les agents peuvent-ils parler plusieurs langues ?",
        answer: "Oui. Nos agents sont multilingues et peuvent communiquer en espagnol, anglais, français, portugais et plus encore."
      },
      {
        question: "Offrez-vous un support technique ?",
        answer: "Oui. Tous les plans incluent un support. Les plans Pro et Business+ ont un support prioritaire et dédié 24/7."
      }
    ],
    workSteps: [
      "Attirez l'attention avec chat IA sur votre site, WhatsApp ou Telegram",
      "Générez de l'intérêt avec démos instantanées et réponses automatiques",
      "Convertissez chaque contact en vente avec des offres irrésistibles",
    ],
    demoTitle: "Prêt à automatiser votre entreprise ?",
    demoDesc: "Essayez gratuitement pendant 7 jours. Sans carte bancaire. Sans engagement.",
    demoWhatsapp: "Discuter sur WhatsApp",
    demoCalendly: "Réserver une démo personnalisée",
    testimonialTitle: "Ce que disent nos clients",
    testimonialSubtitle: "+150 entreprises font déjà confiance à Jumper pour grandir",
    testimonial: [
      {
        quote: "Avec l'Agent Secrétaire, nous avons automatisé la gestion des commandes, des emails et des tâches répétitives. En un mois, nous avons économisé des heures de travail quotidien et augmenté notre portefeuille clients de manière significative.",
        author: "Jorge Pena",
        role: "Directeur",
        company: "Caves Saint Gilles"
      },
      {
        quote: "Nous avons automatisé la gestion des rendez-vous et le suivi client. En un mois, nous avons économisé du temps et amélioré notablement la satisfaction client.",
        author: "Justine Duru",
        role: "Fondatrice",
        company: "Pethome"
      },
      {
        quote: "Nous avons automatisé 80% de nos opérations et augmenté nos ventes de 25% dès le premier mois. La gestion des tâches et le suivi client sont devenus simples et efficaces.",
        author: "Julien L.",
        role: "CEO",
        company: "Distributeur B2B"
      },
    ],
    whatsappMessage: "Bonjour, je souhaite tester les Agents IA Jumper et planifier une démo personnalisée.",
    available24_7: "Disponible 24h/24",
    freeTrialDays: "7 jours gratuits",
    footerText: "© 2025 Jumper Enterprise. Tous droits réservés.",
  },
};

export const modalTranslations: Record<Lang, ModalTranslation> = {
  es: {
    title: "Agenda tu Prueba Gratuita",
    desc: "Completa tus datos y uno de nuestros agentes IA te contactará para preparar tu demo.",
    placeholders: {
      name: "Nombre completo",
      email: "Correo electrónico",
      company: "Empresa",
      position: "Cargo",
      interest: "Interés o área a automatizar",
      date: "Fecha deseada",
    },
    submit: "Agendar Cita",
    submitting: "Enviando...",
    successTitle: "¡Gracias!",
    successDesc:
      "Hemos recibido tu solicitud. Te contactaremos pronto para coordinar tu demo personalizada.",
    close: "Cerrar",
    selectAgent: "Selecciona un Agente",
    premiumTitle: "Jumper Growth Suite",
    agents: [
      { title: "Agente Ventas Pro" },
      { title: "Agente Google Reviews" },
      { title: "Agente Citas" },
      { title: "Agente Blog SEO" },
      { title: "Agente Secretario" },
      { title: "Manager E-Commerce Shopify" },
      { title: "Agente Email Scrapper" },
      { title: "Icebreaker AI" },
    ],
  },
  en: {
    title: "Schedule Your Free Trial",
    desc: "Fill in your details and one of our AI agents will contact you to prepare your demo.",
    placeholders: {
      name: "Full Name",
      email: "Email",
      company: "Company",
      position: "Position",
      interest: "Interest or area to automate",
      date: "Preferred Date",
    },
    submit: "Book Appointment",
    submitting: "Submitting...",
    successTitle: "Thank You!",
    successDesc:
      "We have received your request. We will contact you shortly to schedule your personalized demo.",
    close: "Close",
    selectAgent: "Select an Agent",
    premiumTitle: "Premium Package",
    agents: [
      { title: "AI Sales Pro" },
      { title: "Google Reviews Agent" },
      { title: "Appointments Agent" },
      { title: "SEO Blog Agent" },
      { title: "Secretary Agent" },
      { title: "E-Commerce Manager Shopify" },
      { title: "Email Scrapper Agent" },
      { title: "Icebreaker AI" },
    ],
  },
  fr: {
    title: "Réservez votre Essai Gratuit",
    desc: "Remplissez vos informations et l'un de nos agents IA vous contactera pour préparer votre démo.",
    placeholders: {
      name: "Nom complet",
      email: "Email",
      company: "Entreprise",
      position: "Poste",
      interest: "Intérêt ou domaine à automatiser",
      date: "Date souhaitée",
    },
    submit: "Planifier le Rendez-vous",
    submitting: "Envoi...",
    successTitle: "Merci !",
    successDesc:
      "Nous avons reçu votre demande. Nous vous contacterons bientôt pour coordonner votre démo personnalisée.",
    close: "Fermer",
    selectAgent: "Sélectionnez un Agent",
    premiumTitle: "Pack Premium",
    agents: [
      { title: "Agent Ventes Pro" },
      { title: "Agent Google Reviews" },
      { title: "Rendez-vous Agent" },
      { title: "Agent Blog SEO" },
      { title: "Agent Secrétaire" },
      { title: "Manager E-Commerce Shopify" },
      { title: "Agent Email Scrapper" },
      { title: "Icebreaker IA" },
    ],
  },
};
