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
