export type Agent = {
  icon: string;
  title: string;
  desc: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export interface Translation {
  heroTitle: string;
  heroDesc: string;
  cta: string;
  agents: Agent[];
  workSteps: string[];
  demoTitle: string;
  demoDesc: string;
  demoWhatsapp: string;
  demoCalendly: string;
  testimonial: {
    quote: string;
    author: string;
  }[]; 
  
}


export type Lang = "es" | "en" | "fr";

export interface Post {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content: string;
}