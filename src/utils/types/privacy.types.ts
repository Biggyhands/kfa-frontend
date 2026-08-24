export interface PrivacyDetailItem {
  title: string;
  description: string;
}

export interface PrivacyDetailSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: PrivacyDetailItem[];
}

export interface PrivacyContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;

  detailsTitle: string;
  detailsDescription: string;

  detailSections: PrivacyDetailSection[];

  closingMessage: string;
}

export interface PrivacySectionProps {
  content: PrivacyContent;
}
