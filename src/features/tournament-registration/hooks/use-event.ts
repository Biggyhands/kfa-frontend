import { useQuery } from "@tanstack/react-query";

import { getEvent } from "@/lib/api/events";

export function useEvent(slug: string) {
  return useQuery({
    queryKey: ["event", slug],
    queryFn: () => getEvent(slug),
    enabled: Boolean(slug),
  });
}
