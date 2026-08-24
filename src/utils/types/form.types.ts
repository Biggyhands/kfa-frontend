export interface TournamentRegistrationFormValues {
  representativeName: string;
  delegationName: string;
  country: string;
  city: string;
  email: string;
  phone: string;
  athletesCount: number;
  notes: string;
  privacyAccepted: boolean;
}

export interface TournamentRegistrationFormProps {
  eventName: string;
}

export interface TournamentRegistrationContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
}

export interface TournamentRegistrationSectionProps {
  content: TournamentRegistrationContent;
}
