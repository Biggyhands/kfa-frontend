export interface DojoItem {
  id: string;
  slug: string;
  name: string;
  city: string;
  country: string;
  description: string;
  disciplines: string[];
  href: string;
  featured?: boolean;
  status: "active" | "coming-soon";
}

export interface DojosContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  dojos: DojoItem[];
}

export interface DojosSectionProps {
  content: DojosContent;
}

export interface DojoCardProps {
  dojo: DojoItem;
}
