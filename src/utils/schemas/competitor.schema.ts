import { z } from "zod";

export const competitorSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Ingresa el nombre completo.")
      .max(120, "El nombre es demasiado largo."),

    birthDate: z.string().min(1, "Selecciona la fecha de nacimiento."),

    heightCm: z
      .number({
        error: "Ingresa una estatura válida.",
      })
      .positive("La estatura debe ser mayor a 0.")
      .max(250, "Revisa la estatura ingresada."),

    weightKg: z
      .number({
        error: "Ingresa un peso válido.",
      })
      .positive("El peso debe ser mayor a 0.")
      .max(300, "Revisa el peso ingresado."),

    gradeCode: z.enum([
      "white",
      "orange",
      "blue",
      "yellow",
      "green",
      "pre_brown",
      "brown",
      "black",
    ]),

    sex: z
      .enum(["male", "female"], {
        error: "Campo obligatorio.",
      })

      .optional(),
    modalities: z
      .array(z.enum(["kata", "kumite"]))
      .min(1, "Selecciona al menos una modalidad."),

    kumiteExperienceLevel: z
      .enum(["debutant", "regular", "open"], {
        error: "Selecciona el nivel de experiencia en Kumite.",
      })
      .optional(),

    healthProvider: z
      .string()
      .trim()
      .min(2, "Ingresa la entidad de salud.")
      .max(120, "El nombre es demasiado largo."),

    guardianName: z
      .string()
      .trim()
      .max(120, "El nombre es demasiado largo.")
      .optional(),

    email: z
      .string()
      .trim()
      .email("Ingresa un correo electrónico válido.")
      .or(z.literal(""))
      .optional(),
  })
  .superRefine((values, ctx) => {
    const participatesKumite = values.modalities.includes("kumite");

    if (participatesKumite && !values.sex) {
      ctx.addIssue({
        code: "custom",
        path: ["sex"],
        message: "Selecciona el sexo para participar en Kumite.",
      });
    }

    if (participatesKumite && !values.kumiteExperienceLevel) {
      ctx.addIssue({
        code: "custom",
        path: ["kumiteExperienceLevel"],
        message: "Selecciona el nivel de experiencia en Kumite.",
      });
    }

    if (!participatesKumite && values.kumiteExperienceLevel) {
      ctx.addIssue({
        code: "custom",
        path: ["kumiteExperienceLevel"],
        message: "El nivel de experiencia solo aplica para Kumite.",
      });
    }
  });
