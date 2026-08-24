export interface TechnicalDirector {
  id: string;
  initials: string;
  eyebrow: string;
  honorific: string;
  firstName: string;
  lastName: string;
  role: string;
  description: string;
  highlights: string[];
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
}

export interface TeamContent {
  director: TechnicalDirector;
}

export interface TeamSectionProps {
  content: TeamContent;
}
