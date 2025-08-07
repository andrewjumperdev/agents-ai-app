export type Agent = {
  icon: string;
  title: string;
  desc: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export type Translation = {
  heroTitle: string;
  heroDesc: string;
  cta: string;
  agents: Agent[];
  workSteps: string[];
  demoTitle: string;
  demoDesc: string;
  demoWhatsapp: string;
  demoCalendly: string;
  testimonial: Testimonial;
};

export type Lang = "es" | "en" | "fr";