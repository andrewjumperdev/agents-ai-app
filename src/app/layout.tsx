import "./globals.css";
import { ReactNode } from "react";
import Script from "next/script";

export const metadata = {
  title: "Automatiza Pedidos & Soporte 24/7 con AI – Tu Asistente IA",
  description:
    "Incrementa tus ventas y ahorra tiempo con nuestro asistente IA que automatiza pedidos por WhatsApp, resúmenes de documentos e icebreakers personalizados. Solicita tu demo gratis.",
  keywords: [
    "AI assistant",
    "pedidos WhatsApp",
    "automatización",
    "IA para empresas",
    "bot de ventas",
    "resumen de documentos",
    "icebreaker AI",
  ],
    icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg", 
  },
  openGraph: {
    title: "Automatiza Pedidos & Soporte 24/7 con AI",
    description:
      "Bot IA que gestiona pedidos, responde dudas y mejora tus conversiones. Demo gratis disponible.",
    url: "https://agents-ai.andrewcr.com",
    siteName: "Tu Asistente IA",
    images: [
      {
        url: "https://agents-ai.andrewcr.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tu Asistente IA en acción",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatiza Pedidos & Soporte 24/7 con AI",
    description:
      "Bot IA que gestiona pedidos, responde dudas y mejora tus conversiones. Demo gratis disponible.",
    images: ["https://agents-ai.andrewcr.com/twitter-card.jpg"],
    creator: "@jumper_Develop",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://agents-ai.andrewcr.com"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <Script type="application/ld+json" id="product-json">
          {`{
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Agente de Pedidos IA",
            "description": "Bot IA para automatizar pedidos por WhatsApp con sincronización a CRM.",
            "brand": {
              "@type": "Organization",
              "name": "Jumper Enterprise"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "1200.00",
              "availability": "https://schema.org/InStock",
              "url": "https://agents-ai.andrewcr.com"
            }
          }`}
        </Script>
        <Script type="application/ld+json" id="organization-json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Jumper Enterprise",
            "url": "https://agents-ai.andrewcr.com",
            "logo": "https://agents-ai.andrewcr.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/company/jumper-enterprise",
              "https://twitter.com/jumper_Develop"
            ]
          }`}
        </Script>

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></Script>
      </head>
      <body className="expansion-alids-init">{children}</body>
    </html>
  );
}
