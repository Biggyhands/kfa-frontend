import { apiRequest } from "./client";

import type { Event } from "@/utils/types";

export async function getEvent(slug: string): Promise<Event> {
  return apiRequest<Event>(`/api/v1/events/${slug}`);
}
