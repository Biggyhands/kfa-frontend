export interface TransparencyDataItem {
  label: string;
  value: string;
}

export interface TransparencyDocument {
  id: string;
  title: string;
  status: string;
}

export interface TransparencyDetailSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface TransparencyContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;

  institutionalData: TransparencyDataItem[];

  documentsTitle: string;
  documentsDescription: string;
  documents: TransparencyDocument[];

  requestActionLabel: string;
  requestActionHref: string;

  privacyActionLabel: string;
  privacyActionHref: string;

  detailsTitle: string;
  detailsDescription: string;
  detailSections: TransparencyDetailSection[];

  closingMessage: string;
}

export interface TransparencySectionProps {
  content: TransparencyContent;
}
