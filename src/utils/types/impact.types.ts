export interface ImpactBenefit {
  index: string;
  title: string;
  description: string;
}

export interface ImpactDetailItem {
  title: string;
  description: string;
}

export interface ImpactDetailSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: ImpactDetailItem[];
}

export interface ImpactContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;

  actionLabel: string;
  actionHref: string;

  benefits: ImpactBenefit[];

  detailsTitle: string;
  detailsDescription: string;
  detailsIntro: string[];

  detailSections: ImpactDetailSection[];

  closingMessage: string;

  supportActionLabel: string;
  supportActionHref: string;
}

export interface ImpactSectionProps {
  content: ImpactContent;
}

export interface ImpactBenefitCardProps {
  benefit: ImpactBenefit;
}
