export interface ImpactBenefit {
  index: string;
  title: string;
  description: string;
}

export interface ImpactContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  actionLabel: string;
  actionHref: string;
  benefits: ImpactBenefit[];
}

export interface ImpactSectionProps {
  content: ImpactContent;
}

export interface ImpactBenefitCardProps {
  benefit: ImpactBenefit;
}
