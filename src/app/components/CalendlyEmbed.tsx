import React from "react";

type CalendlyEmbedProps = {
  url: string;
  pageSettings?: {
    backgroundColor?: string;
    hideEventTypeDetails?: boolean;
    hideLandingPageDetails?: boolean;
    primaryColor?: string;
    textColor?: string;
  };
  styles?: React.CSSProperties;
};

export default function CalendlyEmbed({
  url,
  pageSettings,
  styles,
}: CalendlyEmbedProps) {
  const qs = pageSettings
    ? "?" +
      Object.entries(pageSettings)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v!)}`)
        .join("&")
    : "";
  return (
    <iframe
      src={`${url}${qs}`}
      style={{
        minWidth: "320px",
        width: "100%",
        height: "630px",
        border: "none",
        ...styles,
      }}
    />
  );
}