export interface AllianceOption {
  id: string;
  index: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  featured?: boolean;
}

export interface AlliancesContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  options: AllianceOption[];
  closingMessage: string;
}

export interface AlliancesSectionProps {
  content: AlliancesContent;
}

export interface AllianceCardProps {
  option: AllianceOption;
}
