import type { DelegationSession } from "./delegation.types";

export type CompetitionModality = "kata" | "kumite";

export type CompetitorSex = "male" | "female";

export type KumiteExperienceLevel = "debutant" | "regular" | "open";

export type TechnicalLevel = "beginner" | "intermediate" | "advanced";

export type ClassificationStatus = "classified" | "pending";

export type AssignmentSource = "automatic" | "manual";

export type CompetitorGradeCode =
  | "white"
  | "orange"
  | "blue"
  | "yellow"
  | "green"
  | "pre_brown"
  | "brown"
  | "black";

export interface CompetitorGrade {
  id: string;
  code: CompetitorGradeCode;
  name: string;
  rank_order: number;
  technical_level: TechnicalLevel;
}

export interface CompetitionCategory {
  id: string;
  code: string;
  name: string;
  modality: CompetitionModality;

  technical_level: TechnicalLevel | null;

  kumite_experience_level: KumiteExperienceLevel | null;

  sex: CompetitorSex | "mixed" | null;
}

export interface CompetitorEntry {
  id: string;

  modality: CompetitionModality;

  category: CompetitionCategory | null;

  classificationStatus: ClassificationStatus;

  assignmentSource: AssignmentSource | null;

  assignedAt: string | null;
}

export interface CompetitorEntryInput {
  modality: CompetitionModality;
}

export interface CompetitorCreateInput {
  fullName: string;
  birthDate: string;

  heightCm: number;
  weightKg: number;

  gradeCode: CompetitorGradeCode;

  sex?: CompetitorSex;

  entries: CompetitorEntryInput[];

  kumiteExperienceLevel?: KumiteExperienceLevel;

  healthProvider: string;

  guardianName?: string;
  email?: string;
}

export type CompetitorUpdateInput = Partial<CompetitorCreateInput>;

export interface Competitor {
  id: string;

  registrationNumber: number;

  fullName: string;
  birthDate: string;

  heightCm: number;
  weightKg: number;

  grade: CompetitorGrade | null;

  sex: CompetitorSex | null;

  kumiteExperienceLevel: KumiteExperienceLevel | null;

  healthProvider: string;

  guardianName: string | null;

  email: string | null;

  entries: CompetitorEntry[];

  createdAt: string;
  updatedAt: string;
}

export interface CompetitorMutationCategory {
  id: string;
  code: string;
  name: string;
}

export interface CompetitorMutationEntry {
  modality: CompetitionModality;

  category: CompetitorMutationCategory | null;

  classificationStatus: ClassificationStatus;
}

export interface CompetitorMutationResponse {
  id: string;
  delegation_id: string;

  full_name: string;
  birth_date: string;

  height_cm: number;
  weight_kg: number;

  grade: string | null;

  grade_id: string | null;

  sex: CompetitorSex | null;

  kumite_experience_level: KumiteExperienceLevel | null;

  participates_kata: boolean;
  participates_kumite: boolean;

  health_provider: string;

  guardian_name: string | null;

  email: string | null;

  registration_number: number;

  kata_entry_id: string | null;

  kumite_entry_id: string | null;

  kata_category_id: string | null;

  kumite_category_id: string | null;

  age_at_event: number;

  technical_level: TechnicalLevel;

  entries: CompetitorMutationEntry[];

  created_at: string;
  updated_at: string;
}

export interface CompetitorDeleteResponse {
  id: string;
  delegation_id: string;
  registration_number: number;
  deleted_at: string;
}

export interface CompetitorFormValues {
  fullName: string;
  birthDate: string;

  heightCm: number;
  weightKg: number;

  gradeCode: CompetitorGradeCode;

  sex?: CompetitorSex;

  modalities: CompetitionModality[];

  kumiteExperienceLevel?: KumiteExperienceLevel;

  healthProvider: string;

  guardianName?: string;
  email?: string;
}

export interface CompetitorFormProps {
  slug: string;
  session: DelegationSession;

  mode?: "create" | "edit";

  competitor?: Competitor;

  onCreated?: (competitor: CompetitorMutationResponse) => void;

  onUpdated?: (competitor: CompetitorMutationResponse) => void;

  onInvalidSession: () => void;

  onCancel: () => void;
}

export interface GradeBeltProps {
  code: CompetitorGradeCode;
  name: string;
}
