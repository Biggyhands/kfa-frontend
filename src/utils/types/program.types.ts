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

export interface ProgramsSectionContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  programs: MartialProgram[];
}

export interface ProgramsSectionProps {
  content: ProgramsSectionContent;
}

export interface ProgramCardProps {
  program: MartialProgram;
}
