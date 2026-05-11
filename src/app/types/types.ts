export type Agent = {
  icon?: string;
  name?: string;
  title: string;
  desc?: string;
  color?: string;
  features?: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
};

export type PricingPlan = {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Integration = {
  name: string;
  icon: string;
  category?: string;
};

export type ProcessStep = {
  number: number;
  title: string;
  description: string;
  icon: string;
};

export type PainPoint = {
  icon: string;
  title: string;
  desc: string;
};

export type Industry = {
  id: string;
  icon: string;
  label: string;
  pain: string;
  automations: string[];
  result: string;
};

export type ResultMetric = {
  value: string;
  label: string;
  desc?: string;
};

export interface Translation {
  slogan: string;
  backButton: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroDesc: string;
  heroBadge?: string;
  heroRating?: string;
  cta: string;
  ctaDemo: string;
  ctaTrial?: string;
  flashBenefits: {
    icon: string;
    text: string;
  }[];
  agentsSectionTitle?: string;
  agentsSectionSubtitle?: string;
  agents: Agent[];
  workSteps: string[];
  processTitle?: string;
  processSubtitle?: string;
  process?: ProcessStep[];
  integrationsTitle?: string;
  integrationsSubtitle?: string;
  integrations?: Integration[];
  pricingTitle?: string;
  pricingSubtitle?: string;
  pricingMonthly?: string;
  pricingYearly?: string;
  pricingPlans?: PricingPlan[];
  faqTitle?: string;
  faqSubtitle?: string;
  faq?: FAQItem[];
  demoTitle: string;
  demoDesc: string;
  demoWhatsapp: string;
  demoCalendly: string;
  testimonialTitle?: string;
  testimonialSubtitle?: string;
  testimonial: Testimonial[];
  whatsappMessage: string;
  footerText?: string;
  footerLinks?: { label: string; href: string }[];
  available24_7?: string;
  freeTrialDays?: string;
  painPointsTitle?: string;
  painPointsSubtitle?: string;
  painPoints?: PainPoint[];
  industriesTitle?: string;
  industriesSubtitle?: string;
  industries?: Industry[];
  resultsTitle?: string;
  results?: ResultMetric[];
  trustBarLabel?: string;
  stickyCtaText?: string;
  demoVisualTitle?: string;
  demoVisualSubtitle?: string;
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
