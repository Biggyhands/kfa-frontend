export interface HeroMetric {
  value: string;
  label: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "text";
  external?: boolean;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  actions: HeroAction[];
  metrics: HeroMetric[];
  imageSrc: string;
  imageAlt: string;
}
export interface HeroProps {
  content: HeroContent;
}
