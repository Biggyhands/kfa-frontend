export type EventAccent = "red" | "blue";

export interface UpcomingEvent {
  id: string;
  slug: string;
  dateLabel: string;
  title: string;
  location: string;
  actionLabel: string;
  actionHref: string;
  accent: EventAccent;
}

export interface UpcomingEventsProps {
  events: UpcomingEvent[];
}

export interface EventItem {
  id: string;
  slug: string;
  dateDay: string;
  dateMonth: string;
  dateYear: string;
  title: string;
  category: string;
  location: string;
  description: string;
  details: string[];
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel?: string;
  secondaryActionHref?: string;
  accent: EventAccent;
}

export interface EventsContent {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  events: EventItem[];
}

export interface EventsSectionProps {
  content: EventsContent;
}

export interface EventCardProps {
  event: EventItem;
}

export type EventStatus = "draft" | "published" | "closed" | string;

export interface Event {
  id: string;
  name: string;
  slug: string;
  description: string | null;

  event_date: string;
  end_date: string | null;
  registration_deadline: string | null;

  venue_name: string | null;
  address: string | null;
  city: string | null;
  country: string | null;

  status: EventStatus;
  registration_enabled: boolean;

  created_at: string;
  updated_at: string;
}

export interface EventRegistrationSummaryProps {
  slug: string;
}
