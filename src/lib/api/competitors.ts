import { apiRequest } from "./client";

import type {
  Competitor,
  CompetitorCreateInput,
  CompetitorDeleteResponse,
  CompetitorMutationResponse,
  CompetitorUpdateInput,
} from "@/utils/types";

export async function getCompetitors(
  slug: string,
  delegationId: string,
  token: string,
): Promise<Competitor[]> {
  return apiRequest<Competitor[]>(
    `/api/v1/events/${slug}/delegations/${delegationId}/competitors`,
    {
      token,
    },
  );
}

export async function createCompetitor(
  slug: string,
  delegationId: string,
  token: string,
  payload: CompetitorCreateInput,
): Promise<CompetitorMutationResponse> {
  return apiRequest<CompetitorMutationResponse>(
    `/api/v1/events/${slug}/delegations/${delegationId}/competitors`,
    {
      method: "POST",
      token,
      body: JSON.stringify(payload),
    },
  );
}

export async function updateCompetitor(
  slug: string,
  delegationId: string,
  competitorId: string,
  token: string,
  payload: CompetitorUpdateInput,
): Promise<CompetitorMutationResponse> {
  return apiRequest<CompetitorMutationResponse>(
    `/api/v1/events/${slug}/delegations/${delegationId}/competitors/${competitorId}`,
    {
      method: "PATCH",
      token,
      body: JSON.stringify(payload),
    },
  );
}

export async function deleteCompetitor(
  slug: string,
  delegationId: string,
  competitorId: string,
  token: string,
): Promise<CompetitorDeleteResponse> {
  return apiRequest<CompetitorDeleteResponse>(
    `/api/v1/events/${slug}/delegations/${delegationId}/competitors/${competitorId}`,
    {
      method: "DELETE",
      token,
    },
  );
}
