import type { HeroContent } from "@/utils/types";

export const heroContent: HeroContent = {
  eyebrow: "Kyokushin · Disciplina · Carácter",

  title: "Más que",
  highlightedTitle: "entrenamiento.",

  description:
    "Deporte, disciplina y bienestar para transformar vidas. Formamos personas fuertes, disciplinadas y conscientes mediante el deporte, las artes marciales, el bienestar y el desarrollo comunitario.",

  actions: [
    {
      label: "Agendar clase de prueba",
      href: "#contacto",
      variant: "primary",
    },
    {
      label: "Conocer programas",
      href: "#programas",
      variant: "secondary",
    },
    {
      label: "Hablar por WhatsApp",
      href: "https://wa.me/573014828926",
      variant: "text",
      external: true,
    },
  ],

  metrics: [
    {
      value: "1995",
      label: "Trayectoria marcial",
    },
    {
      value: "KWU",
      label: "Proyección regional",
    },
    {
      value: "KFA",
      label: "Impacto social",
    },
  ],

  imageSrc: "/images/KFA-hero.jpg",
  imageAlt: "Identidad visual de Kyokushin Fight Academy",
};
