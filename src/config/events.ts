import type { EventsContent, UpcomingEvent } from "@/utils/types";

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "colombia-open-2026",
    slug: "colombia-open-2026",
    dateLabel: "20 SEP 2026",
    title: "Colombia Open 2026",
    location: "Coliseo de la Universidad Javeriana · Bogotá D.C.",
    actionLabel: "Inscribir delegación",
    actionHref: "#colombia-open-2026",
    accent: "red",
  },
  {
    id: "master-class-valencia-2026",
    slug: "master-class-valencia-2026",
    dateLabel: "07—12 OCT 2026",
    title: "Master Class Valencia 2026",
    location: "Valencia · Venezuela",
    actionLabel: "Ver evento",
    actionHref: "#master-class-valencia-2026",
    accent: "blue",
  },
];

export const eventsContent: EventsContent = {
  eyebrow: "Eventos",
  title: "Competir.",
  highlightedTitle: "Aprender. Crecer.",

  description:
    "Competencias, seminarios, masterclasses y espacios de formación que conectan nuestra comunidad local con la proyección regional e internacional.",

  events: [
    {
      id: "colombia-open-2026",
      slug: "colombia-open-2026",

      dateDay: "20",
      dateMonth: "SEP",
      dateYear: "2026",

      title: "Colombia Open 2026",
      category: "Campeonato",

      location: "Coliseo de la Universidad Javeriana · Bogotá D.C.",

      description:
        "Encuentro competitivo de Kyokushin que reunirá atletas, delegaciones, instructores y familias alrededor del desarrollo deportivo y marcial.",

      details: [
        "Kyokushin Karate",
        "Delegaciones nacionales e internacionales",
        "Categorías competitivas",
      ],

      primaryActionLabel: "Inscribirme",
      primaryActionHref: "#inscripcion-colombia-open",
      secondaryActionLabel: "Ver información",
      secondaryActionHref: "#colombia-open-2026",

      accent: "red",
    },

    {
      id: "master-class-valencia-2026",
      slug: "master-class-valencia-2026",

      dateDay: "07",
      dateMonth: "OCT",
      dateYear: "2026",

      title: "Master Class Valencia 2026",
      category: "Formación internacional",

      location: "Valencia · Venezuela",

      description:
        "Jornada internacional de formación técnica, intercambio marcial y actualización para practicantes e instructores.",

      details: ["Kyokushin Karate", "SENSHI Kickboxing", "Formación técnica"],

      primaryActionLabel: "Solicitar información",
      primaryActionHref: "#inscripcion-colombia-open",

      accent: "blue",
    },
  ],
};
