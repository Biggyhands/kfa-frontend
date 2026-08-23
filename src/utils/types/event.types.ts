export interface UpcomingEvent {
  id: string;
  dateLabel: string;
  title: string;
  location: string;
  actionLabel: string;
  actionHref: string;
  accent: "red" | "blue";
}

export interface UpcomingEventsProps {
  events: UpcomingEvent[];
}
