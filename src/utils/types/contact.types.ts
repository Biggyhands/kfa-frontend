import type { FieldErrors, UseFormRegister } from "react-hook-form";

export type ContactInterest =
  | "trial-class"
  | "parents"
  | "dojo"
  | "alliance"
  | "donation"
  | "volunteer"
  | "colombia-open"
  | "master-class"
  | "seminars"
  | "institutional";

export interface ContactInterestOption {
  value: ContactInterest;
  label: string;
  defaultMessage: string;
}

export interface ContactFormValues {
  name: string;
  phone: string;
  interest: ContactInterest;
  message: string;
  privacyAccepted: boolean;

  age?: string;
  program?: string;
  availability?: string;

  childAge?: string;
  previousExperience?: string;
  mainGoal?: string;
  preferredChannel?: string;

  country?: string;
  city?: string;
  dojoName?: string;
  instructorName?: string;
  disciplines?: string;
  background?: string;

  entityType?: string;
  responsibleContact?: string;
  supportInterest?: string;
  allianceType?: string;

  contributionType?: string;
  supportedProgram?: string;
  followUpPreference?: string;

  seminarDiscipline?: string;
  seminarLevel?: string;
  academy?: string;
}

export interface ContactChannel {
  label: string;
  value: string;
  href?: string;
}

export interface ContactDetailItem {
  title: string;
  description: string;
}

export interface ContactDetailSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: ContactDetailItem[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;

  channels: ContactChannel[];

  formTitle: string;
  interests: ContactInterestOption[];

  detailsTitle: string;
  detailsDescription: string;
  detailsIntro: string[];
  detailSections: ContactDetailSection[];

  automaticResponse: string;
  closingMessage: string;

  whatsappNumber: string;
}

export interface ContactSectionProps {
  content: ContactContent;
}

export interface ContactFormProps {
  content: ContactContent;
}

export interface ContactDynamicFieldsProps {
  interest: ContactInterest;
  register: UseFormRegister<ContactFormValues>;
  errors: FieldErrors<ContactFormValues>;
}
