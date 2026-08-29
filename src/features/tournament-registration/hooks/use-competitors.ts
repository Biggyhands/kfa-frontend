"use client";

import { useQuery } from "@tanstack/react-query";

import { getCompetitors } from "@/lib/api/competitors";

import type { ApiError, Competitor, DelegationSession } from "@/utils/types";

export function useCompetitors(slug: string, session: DelegationSession) {
  return useQuery<Competitor[], ApiError>({
    queryKey: ["delegation-competitors", slug, session.delegationId],

    queryFn: () => getCompetitors(slug, session.delegationId, session.token),
  });
}
