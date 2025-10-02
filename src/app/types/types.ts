export type Agent = {
  icon?: string;
  title: string;
  desc?: string;
};

export type Testimonial = {
  quote: string;
  author: string;
};

export interface Translation {
  slogan: string;
  backButton: string;
  heroTitle: string;
  heroDesc: string;
  cta: string;
  ctaDemo: string;
  flashBenefits: {
    icon: string;
    text: string;
  }[];
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
  whatsappMessage: string;
}


export type Lang = "es" | "en" | "fr";

export interface Post {
  _id?: string;
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  category?: string;
  image?: string;
}

export interface CTALandingProps {
  whatsappNumber: string;
  demoLink: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
}

export type ModalTranslation = {
  title: string;
  desc: string;
  placeholders: {
    name: string;
    email: string;
    company: string;
    position: string;
    interest: string;
    date: string;
  };
  submit: string;
  submitting: string;
  successTitle: string;
  successDesc: string;
  close: string;
  selectAgent: string;
  premiumTitle: string;
  agents: Agent[];
};