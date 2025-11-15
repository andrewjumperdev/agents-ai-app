import { Lang, ModalTranslation, Translation } from "../types/types";

export const translations: Record<Lang, Translation> = {
  es: {
    slogan:"Automatiza tus ventas 24/7",
    backButton: "Volver",
    heroTitle: "Tus pedidos y clientes gestionados sin esfuerzo",
    heroDesc:
      "Multiplicá tus ventas y ahorrá 10+ horas semanales con un Asistente IA que gestiona pedidos, clientes y citas automáticamente, 24/7.",
    cta: "🔥 Interactuá con el bot en vivo",
    ctaDemo: "📅 Solicitar Prueba Gratuita",
    flashBenefits: [
      {
        icon: "💰",
        text: "Nunca pierdas ventas por falta de seguimiento",
      },
      {
        icon: "⏱️",
        text: "Ahorra horas diarias en tareas repetitivas",
      },
      {
        icon: "⭐",
        text: "Gana más clientes con reseñas y marketing automático",
      },
    ],
    agents: [
      {
        icon: "💰",
        title: "Agente Ventas Pro",
        desc: "Nunca pierdas un cliente por falta de seguimiento. Gestiona llamadas y recordatorios automáticamente, convirtiendo cada oportunidad en ingresos reales.",
      },
      {
        icon: "⭐",
        title: "StarVault",
        desc: "Construí una reputación online sólida sin esfuerzo. Gestiona reseñas y generá confianza instantánea con nuevos clientes.",
      },
      {
        icon: "📅",
        title: "Agente Appointment Setter",
        desc: "Organiza tus reuniones y recordatorios de forma automática. Asegurá que cada cita se convierta en un resultado concreto para tu negocio.",
      },
      {
        icon: "📝",
        title: "Content Magnet",
        desc: "Destacate frente a la competencia con contenido que atrae clientes. Detecta tendencias y genera artículos que posicionan tu marca automáticamente.",
      },
      {
        icon: "🗂️",
        title: "Executive Assistant",
        desc: "Liberá a tu equipo de tareas repetitivas: emails, agendas y documentos se gestionan solos mientras ellos se enfocan en crecer tu negocio.",
      },
      {
        icon: "🛒",
        title: "StorePilot E-Commerce - Shopify",
        desc: "Automatizá pedidos, stock y seguimiento. Evitá errores y retrasos para que tu tienda funcione sola y las ventas suban sin esfuerzo.",
      },
      {
        icon: "📧",
        title: "LeadHunter",
        desc: "Encontrá leads calificados y contactalos automáticamente con mensajes que generan respuestas reales. Multiplicá tus oportunidades de venta.",
      },
      {
        icon: "❄️",
        title: "Icebreaker Pro",
        desc: "Abrí conversaciones con clientes antes que tu competencia. Mensajes personalizados que generan interés inmediato y engagement real.",
      },
      {
        icon: "🏆",
        title: "Jumper Growth Suite",
        desc: "Todos los agentes trabajando juntos para automatizar ventas, soporte y marketing. Tu negocio crece sin esfuerzo y a máxima eficiencia.",
      },
    ],
    workSteps: [
      "Capturá atención con chat IA en tu sitio, WhatsApp o Telegram",
      "Generá interés con demos instantáneas y respuestas automáticas",
      "Convertí cada contacto en venta con ofertas irresistibles",
    ],
    demoTitle: "Probalo en Vivo Ahora",
    demoDesc:
      "Interactuá con nuestro bot como si fueras un cliente real o reservá una demo personalizada para tu negocio.",
    demoWhatsapp: "💬 Probar en WhatsApp",
    demoCalendly: "📅 Agendar Prueba Gratuita",
    testimonial: [
      {
        quote:
          "Con el Agente Secretario automatizamos la gestión de pedidos, emails y tareas repetitivas en Samanjo. En un mes, ahorramos horas de trabajo diario y logramos aumentar nuestra cartera de clientes significativamente.",
        author:
          "– Jorge Pena, Director de Caves Saint Gilles y CEO de Samanjo",
      },
      {
        quote:
          "Con el Agente de Pethome, automatizamos la gestión de citas y seguimientos con clientes. En un mes, ahorramos horas de trabajo y mejoramos la satisfacción del cliente.",
        author: "– Justine Duru, Fundadora de Pethome",
      },
      {
        quote:
          "Hemos automatizado el 80 % de nuestras operaciones y aumentado nuestras ventas en un 25 % desde el primer mes gracias a los agentes de IA. La gestión de tareas repetitivas y el seguimiento de los clientes se han vuelto sencillos y eficaces.",
        author: "– Julien L., Distributeur B2B",
      },
    ],
     whatsappMessage: "Hola, quiero probar el Agente IA y agendar una demo personalizada.",
  },

  en: {
    slogan:"Automated sales assistant 24/7",
    backButton: "Back",
    heroTitle: "Manage orders and clients effortlessly",
    heroDesc:
      "Install an AI Assistant that replies on WhatsApp, handles orders, and boosts your sales — fully automated, no extra apps or stress.",
    cta: "🔥 Try it Now",
    ctaDemo: "📅 Request Free Trial",
        flashBenefits: [
      { icon: "💰", text: "Never miss sales due to missed follow-ups" },
      { icon: "⏱️", text: "Save hours daily on repetitive tasks" },
      { icon: "⭐", text: "Gain more clients with reviews & automatic marketing" },
    ],
    agents: [
      {
        icon: "💰",
        title: "AI Sales Pro",
        desc: "Never miss a sale due to missed follow-ups. Automatically manage calls and reminders, converting every opportunity into real revenue.",
      },
      {
        icon: "⭐",
        title: "Google Reviews Agent",
        desc: "Build a strong online reputation effortlessly. Manage reviews automatically and earn trust from new clients instantly.",
      },
      {
        icon: "📅",
        title: "Appointments Agent",
        desc: "Organize meetings and reminders automatically. Ensure every appointment drives real results for your business.",
      },
      {
        icon: "📝",
        title: "SEO Blog Agent",
        desc: "Stand out from competitors with content that attracts clients. Detect trends and generate articles that position your brand automatically.",
      },
      {
        icon: "🗂️",
        title: "Secretary Agent",
        desc: "Free your team from repetitive tasks: emails, schedules, and documents are handled automatically while they focus on growth.",
      },
      {
        icon: "🛒",
        title: "E-Commerce Manager Shopify",
        desc: "Automate orders, stock, and follow-ups. Avoid errors and delays so your store runs smoothly and sales increase effortlessly.",
      },
      {
        icon: "📧",
        title: "Email Scrapper Agent",
        desc: "Find qualified leads and contact them automatically with messages that get real responses. Multiply your sales opportunities.",
      },
      {
        icon: "❄️",
        title: "Icebreaker AI",
        desc: "Start conversations with potential clients before your competition. Personalized messages spark instant interest and engagement.",
      },
      {
        icon: "🏆",
        title: "Premium Package",
        desc: "All agents working together to automate sales, support, and marketing. Grow your business efficiently with zero extra effort.",
      },
    ],
    workSteps: [
      "Grab attention with AI chat on your site, WhatsApp, or Telegram",
      "Spark interest with instant demos and automated replies",
      "Convert every contact into a sale with irresistible offers",
    ],
    demoTitle: "Try the Agent Live Now",
    demoDesc:
      "Chat with our bot like a real customer or book a custom demo for your business.",
    demoWhatsapp: "💬 Try on WhatsApp",
    demoCalendly: "📅 Book Free Trial",
    testimonial: [
      {
        quote:
          "With the Secretary Agent, we automated order management, emails, and repetitive tasks at Samanjo. In just one month, we saved hours of daily work and significantly grew our client portfolio.",
        author:
          "– Jorge Pena, Director of Caves Saint Gilles and CEO of Samanjo",
      },
      {
        quote:
          "With Pethome’s Agent, we automated appointment management and client follow-ups. In one month, we saved time and improved customer satisfaction.",
        author: "– Justine Duru, Founder of Pethome",
      },
      {
        quote:
          "We automated 80% of our operations and increased sales by 25% in the first month thanks to AI agents. Managing repetitive tasks and client follow-ups became simple and efficient.",
        author: "– Julien L., B2B Distributor",
      },
    ],
        whatsappMessage: "Hello, I want to try the AI Agent and schedule a personalized demo.",

  },

  fr: {
    slogan:"Assistant IA automatique 24/7",
    backButton: "Retour",
    heroTitle: "Gérez commandes et clients sans effort",
    heroDesc:
      "Installez un Assistant IA qui répond sur WhatsApp, gère les commandes et booste vos ventes — entièrement automatisé, sans stress ni outils compliqués.",
    cta: "🔥 Tester Maintenant",
    ctaDemo: "📅 Profiter d'une essai gratuit",
        flashBenefits: [
      { icon: "💰", text: "Ne manquez jamais une vente par manque de suivi" },
      { icon: "⏱️", text: "Gagnez du temps chaque jour sur les tâches répétitives" },
      { icon: "⭐", text: "Attirez plus de clients grâce aux avis et marketing automatique" },
    ],
    agents: [
      {
        icon: "💰",
        title: "Agent Ventes Pro",
        desc: "Ne ratez plus jamais une vente à cause d’un suivi manqué. Gère appels et rappels automatiquement, transformant chaque opportunité en chiffre d’affaires réel.",
      },
      {
        icon: "⭐",
        title: "Agent Google Reviews",
        desc: "Construisez une réputation en ligne solide sans effort. Gérez les avis et inspirez confiance instantanément auprès des nouveaux clients.",
      },
      {
        icon: "📅",
        title: "Rendez-vous Agent",
        desc: "Organisez vos réunions et rappels automatiquement. Chaque rendez-vous devient un résultat concret pour votre entreprise.",
      },
      {
        icon: "📝",
        title: "Agent Blog SEO",
        desc: "Démarquez-vous de la concurrence avec du contenu qui attire les clients. Détecte les tendances et crée des articles qui positionnent votre marque automatiquement.",
      },
      {
        icon: "🗂️",
        title: "Agent Secrétaire",
        desc: "Libérez votre équipe des tâches répétitives : emails, agendas et documents gérés automatiquement pendant qu’ils se concentrent sur l’essentiel.",
      },
      {
        icon: "🛒",
        title: "Manager E-Commerce Shopify",
        desc: "Automatisez commandes, stock et suivis. Évitez erreurs et retards pour que votre boutique fonctionne seule et vos ventes augmentent facilement.",
      },
      {
        icon: "📧",
        title: "Agent Email Scrapper",
        desc: "Trouvez des prospects qualifiés et contactez-les automatiquement avec des messages qui génèrent de vraies réponses. Multipliez vos opportunités de vente.",
      },
      {
        icon: "❄️",
        title: "Icebreaker IA",
        desc: "Ouvrez des conversations avec vos prospects avant la concurrence. Messages personnalisés qui suscitent un intérêt instantané et un engagement réel.",
      },
      {
        icon: "🏆",
        title: "Pack Premium",
        desc: "Tous les agents travaillant ensemble pour automatiser ventes, support et marketing. Votre entreprise croît efficacement sans effort supplémentaire.",
      },
    ],
    workSteps: [
      "Attirez l’attention avec chat IA sur votre site, WhatsApp ou Telegram",
      "Générez de l’intérêt avec démos instantanées et réponses automatiques",
      "Convertissez chaque contact en vente avec des offres irrésistibles",
    ],
    demoTitle: "Tester l’Agent en Direct",
    demoDesc:
      "Discutez avec notre bot comme un vrai client ou réservez une démo personnalisée pour votre activité.",
    demoWhatsapp: "💬 Tester sur WhatsApp",
    demoCalendly: "📅 Réserver une Essai Gratuit",
    testimonial: [
      {
        quote:
          "Avec l'Agent Secrétaire, nous avons automatisé la gestion des commandes, des emails et des tâches répétitives chez Samanjo. En un mois, nous avons économisé des heures de travail quotidien et augmenté notre portefeuille clients de manière significative.",
        author:
          "– Jorge Pena, Directeur de Caves Saint Gilles et CEO de Samanjo",
      },
      {
        quote:
          "Avec l'Agent de Pethome, nous avons automatisé la gestion des rendez-vous et le suivi client. En un mois, nous avons économisé du temps et amélioré la satisfaction client.",
        author: "– Justine Duru, Fondatrice de Pethome",
      },
      {
        quote:
          "Nous avons automatisé 80 % de nos opérations et augmenté nos ventes de 25 % dès le premier mois grâce aux agents IA. La gestion des tâches répétitives et le suivi client sont devenus simples et efficaces.",
        author: "– Julien L., Distributeur B2B",
      },
    ],
        whatsappMessage: "Bonjour, je souhaite tester l'Agent IA et planifier une démo personnalisée.",

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
    desc: "Remplissez vos informations et l’un de nos agents IA vous contactera pour préparer votre démo.",
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
