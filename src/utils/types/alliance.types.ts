export interface AllianceOption {
  id: string;
  index: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  featured?: boolean;
}

export interface AllianceDetailItem {
  title: string;
  description: string;
}

export interface AllianceDetailSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: AllianceDetailItem[];
}

export interface AllianceAction {
  id: string;
  label: string;
  href: string;
}

export interface AlliancesContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;

  options: AllianceOption[];

  detailsTitle: string;
  detailsDescription: string;

  detailsIntro: string[];
  detailSections: AllianceDetailSection[];

  actionsTitle: string;
  actions: AllianceAction[];

  closingMessage: string;
}

export interface AlliancesSectionProps {
  content: AlliancesContent;
}

export interface AllianceCardProps {
  option: AllianceOption;
}
