export interface MartialProgram {
  id: string;
  index: string;
  title: string;
  shortTitle?: string;
  description: string;
  audience: string;
  benefits: string[];
  href: string;
  featured?: boolean;
}

export interface ProgramDetailItem {
  title: string;
  description: string;
}

export interface ProgramDetailSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: ProgramDetailItem[];
}

export interface ProgramsSectionContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;

  programs: MartialProgram[];

  detailsTitle: string;
  detailsDescription: string;
  detailsIntro: string[];
  detailSections: ProgramDetailSection[];
  closingMessage: string;
  actionLabel: string;
  actionHref: string;
}

export interface ProgramsSectionProps {
  content: ProgramsSectionContent;
}

export interface ProgramCardProps {
  program: MartialProgram;
}
