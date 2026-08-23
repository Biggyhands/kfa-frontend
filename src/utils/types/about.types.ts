export interface AboutValue {
  index: string;
  title: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  paragraphs: string[];
  linkLabel: string;
  linkHref: string;
  values: AboutValue[];
}

export interface AboutSectionProps {
  content: AboutContent;
}

export interface AboutValueCardProps {
  value: AboutValue;
}
