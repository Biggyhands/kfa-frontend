import type { CompetitorGradeCode, KumiteExperienceLevel } from "@/utils/types";

export interface CompetitorGradeOption {
  value: CompetitorGradeCode;
  label: string;
}

export interface KumiteExperienceOption {
  value: KumiteExperienceLevel;
  label: string;
  description: string;
}

export const competitorGradeOptions: CompetitorGradeOption[] = [
  {
    value: "white",
    label: "Blanco",
  },
  {
    value: "orange",
    label: "Naranja",
  },
  {
    value: "blue",
    label: "Azul",
  },
  {
    value: "yellow",
    label: "Amarillo",
  },
  {
    value: "green",
    label: "Verde",
  },
  {
    value: "pre_brown",
    label: "Pre-marrón",
  },
  {
    value: "brown",
    label: "Marrón",
  },
  {
    value: "black",
    label: "Negro",
  },
];

export const kumiteExperienceOptions: KumiteExperienceOption[] = [
  {
    value: "debutant",
    label: "Debutante",
    description: "Primera experiencia competitiva o de combate.",
  },
  {
    value: "regular",
    label: "Regular",
    description:
      "Ya ha competido antes, pero continúa compitiendo dentro del nivel técnico correspondiente a su grado.",
  },
  {
    value: "open",
    label: "Open",
    description:
      "Competidor con experiencia fuerte externa o avanzada, por ejemplo MMA, kickboxing u otra experiencia relevante.",
  },
];

export const COLOMBIA_OPEN_SLUG = "colombia-open-2026";
