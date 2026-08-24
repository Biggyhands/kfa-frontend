export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterContent {
  brandName: string;
  brandTagline: string;
  statementTitle: string;
  statementDescription: string;
  copyright: string;
  domainLabel: string;
  domainHref: string;
  links: FooterLink[];
  codedByLabel: string;
  codedByName: string;
  codedByHref?: string;
}

export interface FooterProps {
  content: FooterContent;
}
