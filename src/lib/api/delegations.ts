import { apiRequest } from "./client";

import type {
  DelegationCreateInput,
  DelegationCreateResponse,
  DelegationRecoveryInput,
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

export async function requestDelegationRecoveryLink(
  slug: string,
  payload: DelegationRecoveryInput,
): Promise<void> {
  await apiRequest<unknown>(
    `/api/v1/events/${slug}/delegations/recovery-link`,
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
  );
}
