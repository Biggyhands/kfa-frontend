import type { DojosContent } from "@/utils/types";

export const dojosContent: DojosContent = {
  eyebrow: "Nuestra red",

  title: "Dojos que",
  highlightedTitle: "crecen juntos.",

  description:
    "KFA articula dojos, instructores y comunidades de práctica que comparten principios de formación, disciplina, calidad técnica y desarrollo humano.",

  dojos: [
    {
      id: "senshi-fight-academy",
      slug: "senshi",

      name: "Senshi Fight Academy",

      city: "Barranquilla",
      country: "Colombia",

      description:
        "Dojo asociado a KFA orientado a la formación marcial, el entrenamiento técnico y el desarrollo integral de su comunidad.",

      disciplines: [
        "Kyokushin Karate",
        "SENSHI Kickboxing",
        "Brazilian Jiu-Jitsu",
        "Acondicionamiento",
      ],

      href: "/senshi",

      featured: true,
      status: "active",
    },

    {
      id: "future-dojo-01",
      slug: "future-dojo-01",

      name: "Próximo dojo asociado",

      city: "Colombia",
      country: "Red KFA",

      description:
        "La red KFA continúa construyendo alianzas con dojos y grupos de práctica comprometidos con una formación responsable.",

      disciplines: ["Kyokushin", "Formación", "Comunidad"],

      href: "#contacto",

      status: "coming-soon",
    },
  ],
};
