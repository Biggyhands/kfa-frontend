import { z } from "zod";

import type { ContactFormValues } from "@/utils/types";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre.")
    .max(120, "El nombre es demasiado largo."),

  phone: z
    .string()
    .trim()
    .min(7, "Ingresa un teléfono válido.")
    .max(30, "El teléfono es demasiado largo."),

  interest: z.enum([
    "trial-class",
    "parents",
    "dojo",
    "alliance",
    "donation",
    "volunteer",
    "colombia-open",
    "master-class",
    "seminars",
    "institutional",
  ]),

  message: z
    .string()
    .trim()
    .min(5, "Escribe un mensaje.")
    .max(1500, "El mensaje es demasiado largo."),

  privacyAccepted: z
    .boolean()
    .refine((value) => value, "Debes autorizar el tratamiento de datos."),

  age: z.string().optional(),
  program: z.string().optional(),
  availability: z.string().optional(),

  childAge: z.string().optional(),
  previousExperience: z.string().optional(),
  mainGoal: z.string().optional(),
  preferredChannel: z.string().optional(),

  country: z.string().optional(),
  city: z.string().optional(),
  dojoName: z.string().optional(),
  instructorName: z.string().optional(),
  disciplines: z.string().optional(),
  background: z.string().optional(),

  entityType: z.string().optional(),
  responsibleContact: z.string().optional(),
  supportInterest: z.string().optional(),
  allianceType: z.string().optional(),

  contributionType: z.string().optional(),
  supportedProgram: z.string().optional(),
  followUpPreference: z.string().optional(),

  seminarDiscipline: z.string().optional(),
  seminarLevel: z.string().optional(),
  academy: z.string().optional(),
}) satisfies z.ZodType<ContactFormValues>;
