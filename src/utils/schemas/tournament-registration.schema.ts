import { z } from "zod";

import type { TournamentRegistrationFormValues } from "@/utils/types";

export const tournamentRegistrationSchema = z.object({
  representativeName: z
    .string()
    .trim()
    .min(3, "Ingresa el nombre del representante.")
    .max(120, "El nombre es demasiado largo."),

  delegationName: z
    .string()
    .trim()
    .min(2, "Ingresa el nombre del dojo o delegación.")
    .max(150, "El nombre de la delegación es demasiado largo."),

  country: z.string().trim().min(2, "Ingresa el país."),

  city: z.string().trim().min(2, "Ingresa la ciudad."),

  email: z.string().trim().email("Ingresa un correo electrónico válido."),

  phone: z
    .string()
    .trim()
    .min(7, "Ingresa un número de contacto válido.")
    .max(30, "El número de contacto es demasiado largo."),

  athletesCount: z
    .number({
      error: "Indica la cantidad aproximada de atletas.",
    })
    .int("La cantidad debe ser un número entero.")
    .min(1, "Debe registrarse al menos un atleta.")
    .max(200, "Verifica la cantidad de atletas."),

  notes: z
    .string()
    .trim()
    .max(1000, "Las observaciones no pueden superar 1000 caracteres."),

  privacyAccepted: z
    .boolean()
    .refine((value) => value, "Debes aceptar el tratamiento de datos."),
}) satisfies z.ZodType<TournamentRegistrationFormValues>;
