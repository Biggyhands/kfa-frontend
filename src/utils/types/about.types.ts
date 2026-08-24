export interface AboutValue {
  index: string;
  title: string;
  description: string;
}

export interface AboutDetailSection {
  id: string;
  title?: string;
  paragraphs?: string[];
  items?: AboutDetailItem[];
}

export interface AboutDetailItem {
  title: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  paragraphs: string[];
  values: AboutValue[];
  historyTitle: string;
  historySections: AboutDetailSection[];
  closingMessage: string;
}

export interface AboutSectionProps {
  content: AboutContent;
}

export interface AboutValueCardProps {
  value: AboutValue;
}
