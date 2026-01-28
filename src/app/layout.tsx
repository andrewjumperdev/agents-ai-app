import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Jumper | 9 Agentes IA Autónomos para Automatizar tu Negocio 24/7",
  description:
    "Plataforma líder en automatización empresarial con IA. 9 agentes especializados: ventas, marketing, SEO, atención al cliente, e-commerce y más. Ahorra +10 horas semanales. Prueba gratis 7 días.",
  keywords: [
    "agentes IA",
    "automatización empresarial",
    "inteligencia artificial para empresas",
    "bot de ventas IA",
    "automatizar ventas",
    "chatbot empresarial",
    "agente de ventas automático",
    "automatización WhatsApp",
    "CRM con IA",
    "marketing automation IA",
    "SEO automático",
    "gestión de citas IA",
    "e-commerce automation",
    "atención al cliente IA",
    "lead generation IA",
    "prospección automática",
    "agencia de IA",
    "automatización de negocios",
    "asistente virtual empresarial",
    "software de automatización",
    "Jumper Enterprise",
    "AI agents",
    "business automation",
    "sales automation",
  ],
  authors: [{ name: "Jumper Enterprise" }],
  creator: "Jumper Enterprise",
  publisher: "Jumper Enterprise",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Jumper | Agentes IA que Automatizan tu Negocio 24/7",
    description:
      "9 agentes IA autónomos: ventas, marketing, SEO, atención al cliente y más. +150 empresas confían en nosotros. Prueba gratis 7 días.",
    url: "https://agents-ai.andrewcr.com",
    siteName: "Jumper - Automatización con IA",
    images: [
      {
        url: "https://agents-ai.andrewcr.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jumper - 9 Agentes IA para tu empresa",
      },
    ],
    locale: "es_ES",
    alternateLocale: ["en_US", "fr_FR"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumper | 9 Agentes IA Autónomos 24/7",
    description:
      "Automatiza ventas, marketing y soporte con agentes IA especializados. +80% de tareas automatizadas. Prueba gratis.",
    images: ["https://agents-ai.andrewcr.com/twitter-card.jpg"],
    creator: "@jumper_Develop",
    site: "@jumper_Develop",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-verificacion-google",
  },
  alternates: {
    canonical: "https://agents-ai.andrewcr.com",
    languages: {
      "es-ES": "https://agents-ai.andrewcr.com",
      "en-US": "https://agents-ai.andrewcr.com/en",
      "fr-FR": "https://agents-ai.andrewcr.com/fr",
    },
  },
  category: "technology",
  metadataBase: new URL("https://agents-ai.andrewcr.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Organization Schema */}
        <Script type="application/ld+json" id="organization-json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Jumper Enterprise",
            "alternateName": "Jumper AI",
            "url": "https://agents-ai.andrewcr.com",
            "logo": "https://agents-ai.andrewcr.com/logo.png",
            "description": "Plataforma líder en automatización empresarial con agentes de inteligencia artificial",
            "foundingDate": "2024",
            "sameAs": [
              "https://www.linkedin.com/company/jumper-enterprise",
              "https://twitter.com/jumper_Develop"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+506-6166-1848",
              "contactType": "sales",
              "availableLanguage": ["Spanish", "English", "French"]
            }
          }`}
        </Script>

        {/* SoftwareApplication Schema */}
        <Script type="application/ld+json" id="software-json">
          {`{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Jumper AI Agents",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "9 agentes de inteligencia artificial autónomos para automatizar ventas, marketing, SEO, atención al cliente y más.",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "120",
              "highPrice": "200",
              "priceCurrency": "USD",
              "offerCount": "3"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": [
              "Agente de Ventas IA",
              "Gestión de Reseñas Google",
              "Appointment Setter automático",
              "Generación de contenido SEO",
              "Asistente ejecutivo virtual",
              "Gestión E-commerce",
              "Prospección de leads",
              "LinkedIn automation"
            ]
          }`}
        </Script>

        {/* Service Schema */}
        <Script type="application/ld+json" id="service-json">
          {`{
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Automatización Empresarial con IA",
            "provider": {
              "@type": "Organization",
              "name": "Jumper Enterprise"
            },
            "description": "Servicios de automatización empresarial mediante agentes de inteligencia artificial especializados",
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Planes de Automatización IA",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plan Esencial",
                    "description": "3 agentes IA, 1000 interacciones/mes"
                  },
                  "price": "120",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Plan Profesional",
                    "description": "6 agentes IA, 5000 interacciones/mes"
                  },
                  "price": "200",
                  "priceCurrency": "USD"
                }
              ]
            }
          }`}
        </Script>

        {/* FAQ Schema */}
        <Script type="application/ld+json" id="faq-json">
          {`{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué diferencia hay entre Jumper y ChatGPT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ChatGPT es una IA conversacional genérica. Jumper son agentes especializados que ejecutan tareas específicas de tu negocio: llamar clientes, gestionar citas, responder reseñas, etc. No solo conversan, actúan."
                }
              },
              {
                "@type": "Question",
                "name": "¿Necesito conocimientos técnicos para usar Jumper?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Nuestro equipo configura todo por ti. Solo necesitas contarnos sobre tu negocio y nosotros nos encargamos de entrenar y configurar tus agentes IA."
                }
              },
              {
                "@type": "Question",
                "name": "¿Puedo cancelar en cualquier momento?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. No hay contratos de permanencia. Puedes cancelar tu suscripción cuando quieras sin penalizaciones."
                }
              },
              {
                "@type": "Question",
                "name": "¿Mis datos están seguros?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutamente. Cumplimos con GDPR y las mejores prácticas de seguridad. Tus datos están encriptados y nunca se comparten con terceros."
                }
              }
            ]
          }`}
        </Script>

        {/* WebSite Schema con SearchAction */}
        <Script type="application/ld+json" id="website-json">
          {`{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Jumper - Agentes IA para Empresas",
            "url": "https://agents-ai.andrewcr.com",
            "description": "Plataforma líder en automatización empresarial con 9 agentes de inteligencia artificial",
            "publisher": {
              "@type": "Organization",
              "name": "Jumper Enterprise"
            }
          }`}
        </Script>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></Script>

        <script
          src="https://kit.fontawesome.com/3d8f845060.js"
          crossOrigin="anonymous"
          async
        ></script>

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1165739908409921');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1165739908409921&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="expansion-alids-init">{children}</body>
    </html>
  );
}
