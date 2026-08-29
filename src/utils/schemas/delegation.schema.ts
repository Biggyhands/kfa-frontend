import { z } from "zod";

export const delegationSchema = z.object({
  organizationName: z
    .string()
    .trim()
    .min(2, "Ingresa el nombre de la organización.")
    .max(120, "El nombre de la organización es demasiado largo."),

  dojoName: z
    .string()
    .trim()
    .min(2, "Ingresa el nombre del dojo.")
    .max(120, "El nombre del dojo es demasiado largo."),

  responsibleProfessor: z
    .string()
    .trim()
    .min(2, "Ingresa el nombre del profesor responsable.")
    .max(120, "El nombre es demasiado largo."),

  contactName: z
    .string()
    .trim()
    .min(2, "Ingresa el nombre del contacto.")
    .max(120, "El nombre es demasiado largo."),

  contactEmail: z
    .string()
    .trim()
    .email("Ingresa un correo electrónico válido.")
    .max(160, "El correo electrónico es demasiado largo."),

  whatsapp: z
    .string()
    .trim()
    .min(7, "Ingresa un número de WhatsApp válido.")
    .max(30, "El número de WhatsApp es demasiado largo."),

  country: z
    .string()
    .trim()
    .min(2, "Ingresa el país.")
    .max(80, "El país es demasiado largo."),

  city: z
    .string()
    .trim()
    .min(2, "Ingresa la ciudad.")
    .max(100, "La ciudad es demasiado larga."),

  privacyAccepted: z.literal(true, {
    error: "Debes aceptar el tratamiento de datos para continuar.",
  }),
});
