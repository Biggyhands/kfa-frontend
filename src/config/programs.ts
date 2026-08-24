import type { ProgramsSectionContent } from "@/utils/types";

export const programsContent: ProgramsSectionContent = {
  eyebrow: "Artes marciales",
  title: "Encuentra",
  highlightedTitle: "tu disciplina.",

  description:
    "Programas de formación marcial y deportiva para diferentes edades, niveles y objetivos.",

  programs: [
    {
      id: "kyokushin-karate",
      index: "01",
      title: "Kyokushin Karate",
      shortTitle: "Kyokushin",
      description:
        "Formación marcial enfocada en disciplina, técnica, respeto, autocontrol y desarrollo del carácter.",
      audience: "Niños, jóvenes y adultos",
      benefits: [
        "Disciplina",
        "Condición física",
        "Autocontrol",
        "Técnica marcial",
      ],
      href: "#contacto",
      featured: true,
    },

    {
      id: "kyokushin-kids",
      index: "02",
      title: "Kyokushin Kids",
      description:
        "Programa infantil orientado al desarrollo de disciplina, concentración, confianza y hábitos positivos.",
      audience: "Niños",
      benefits: ["Concentración", "Confianza", "Coordinación", "Respeto"],
      href: "#contacto",
    },

    {
      id: "kyokushin-adultos",
      index: "03",
      title: "Kyokushin Adultos",
      description:
        "Entrenamiento progresivo para mejorar condición física, técnica, resistencia y manejo del estrés.",
      audience: "Adultos",
      benefits: ["Resistencia", "Fuerza", "Movilidad", "Bienestar"],
      href: "#contacto",
    },

    {
      id: "senshi-kickboxing",
      index: "04",
      title: "SENSHI Kickboxing",
      description:
        "Entrenamiento de striking y combate orientado al desarrollo técnico, físico y competitivo.",
      audience: "Jóvenes y adultos",
      benefits: ["Striking", "Velocidad", "Resistencia", "Competencia"],
      href: "#contacto",
    },

    {
      id: "bjj",
      index: "05",
      title: "Brazilian Jiu-Jitsu",
      shortTitle: "BJJ",
      description:
        "Disciplina enfocada en control, técnica, estrategia y combate en suelo.",
      audience: "Jóvenes y adultos",
      benefits: ["Técnica", "Control", "Estrategia", "Condición física"],
      href: "#contacto",
    },
  ],
};
