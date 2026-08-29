import type { z } from "zod";

import type { delegationSchema } from "@/utils/schemas/delegation.schema";

export type DelegationFormValues = z.infer<typeof delegationSchema>;

export interface DelegationCreateInput {
  organizationName: string;
  dojoName: string;
  responsibleProfessor: string;
  contactName: string;
  contactEmail: string;
  whatsapp: string;
  country: string;
  city: string;
  privacyAccepted: true;
}

export interface DelegationCreateResponse {
  id: string;
  event_id: string;

  organization_name: string;
  dojo_name: string;
  responsible_professor: string;

  contact_name: string;
  contact_email: string;
  normalized_email: string;

  whatsapp: string;
  country: string;
  city: string;

  status: "pending" | string;

  privacy_accepted: boolean;
  privacy_accepted_at: string;
  privacy_policy_version: string;

  created_at: string;
  updated_at: string;

  editToken: string;
}

export interface DelegationSession {
  delegationId: string;
  token: string;
}

export interface DelegationFormProps {
  slug: string;
  onSuccess: (session: DelegationSession) => void;
}

export interface DelegationSessionState {
  session: DelegationSession | null;
  isReady: boolean;
  saveSession: (session: DelegationSession) => void;
  clearSession: () => void;
}

export interface UseDelegationSessionOptions {
  slug: string;
}

export interface TournamentRegistrationFlowProps {
  slug: string;
}

export interface DelegationManagerProps {
  slug: string;
  session: DelegationSession;
  onInvalidSession: () => void;
}
