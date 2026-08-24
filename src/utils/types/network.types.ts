export interface NetworkBenefit {
  id: string;
  label: string;
}

export interface NetworkContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  badgeTop: string;
  badgeBottom: string;
  lead: string;
  paragraphs: string[];
  benefits: NetworkBenefit[];
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
  officialSiteLabel: string;
  officialSiteHref: string;
}

export interface NetworkSectionProps {
  content: NetworkContent;
}
