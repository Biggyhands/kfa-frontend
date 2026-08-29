import { apiRequest } from "./client";

import type {
  DelegationCreateInput,
  DelegationCreateResponse,
} from "@/utils/types";

export async function createDelegation(
  slug: string,
  payload: DelegationCreateInput,
): Promise<DelegationCreateResponse> {
  return apiRequest<DelegationCreateResponse>(
    `/api/v1/events/${slug}/delegations`,
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
}
