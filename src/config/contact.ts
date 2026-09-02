import type { ContactContent } from "@/utils/types";

export const contactContent: ContactContent = {
  eyebrow: "Hablemos",

  title: "El primer paso",
  highlightedTitle: "es escribirnos.",

  channels: [
    {
      label: "WhatsApp",
      value: "301 482 8926",
      href: "https://wa.me/573014828926",
    },
    {
      label: "Correo",
      value: "senshiacademycol@gmail.com",
      href: "mailto:senshiacademycol@gmail.com",
    },
    {
      label: "Dirección",
      value: "Carrera 57 No. 75-152, Barranquilla, Atlántico",
    },
  ],

  formTitle: "¿Qué necesitas?",

  interests: [
    {
      value: "trial-class",
      label: "Clase de prueba",
      defaultMessage: "Hola KFA, quiero agendar una clase de prueba.",
    },
    {
      value: "parents",
      label: "Información para padres / KFA Kids",
      defaultMessage: "Hola KFA, quiero información para mi hijo o hija.",
    },
    {
      value: "dojo",
      label: "Vinculación de dojo",
      defaultMessage: "Hola KFA, quiero información para vincular mi dojo.",
    },
    {
      value: "alliance",
      label: "Alianzas / patrocinios",
      defaultMessage: "Hola KFA, quiero proponer una alianza o patrocinio.",
    },
    {
      value: "donation",
      label: "Donación",
      defaultMessage:
        "Hola KFA, quiero información para realizar una donación.",
    },
    {
      value: "volunteer",
      label: "Voluntariado",
      defaultMessage: "Hola KFA, quiero participar como voluntario.",
    },
    {
      value: "colombia-open",
      label: "Colombia Open 2026",
      defaultMessage:
        "Hola KFA, quiero información sobre el Colombia Open 2026.",
    },
    {
      value: "master-class",
      label: "Master Class Valencia 2026",
      defaultMessage:
        "Hola KFA, quiero información sobre la Master Class Valencia 2026.",
    },
    {
      value: "seminars",
      label: "Seminarios / formación de instructores",
      defaultMessage:
        "Hola KFA, quiero información sobre seminarios o formación de instructores.",
    },
    {
      value: "institutional",
      label: "Contacto institucional",
      defaultMessage: "Hola KFA, quiero realizar una consulta institucional.",
    },
  ],

  detailsTitle: "Ver todas las rutas de contacto",

  detailsDescription:
    "Aquí puedes revisar qué información pide cada tipo de solicitud y cuál es la ruta adecuada para cada persona o institución.",

  detailsIntro: [
    "Diseñamos este espacio para conectarte exactamente con lo que buscas. Ya sea que quieras agendar tu primera clase de prueba, inscribirte, sumarte como voluntario o activar una alianza con tu dojo.",

    "Estamos listos para orientarte. Escríbenos y te ayudamos a encontrar el programa, alianza o ruta de vinculación más adecuada.",
  ],

  detailSections: [
    {
      id: "canales-contacto",
      title: "Canales de contacto",

      items: [
        {
          title: "Dominio oficial",
          description: "www.kfa.plus",
        },
        {
          title: "WhatsApp y teléfono",
          description: "301 482 8926",
        },
        {
          title: "Correo electrónico",
          description: "senshiacademycol@gmail.com",
        },
        {
          title: "Dirección",
          description: "Carrera 57 No. 75-152, Barranquilla, Atlántico.",
        },
        {
          title: "Atención",
          description:
            "Los horarios de atención presencial, atención por WhatsApp y respuesta a formularios se publicarán cuando sean definidos oficialmente.",
        },
      ],
    },

    {
      id: "formularios-recomendados",
      title: "",

      items: [],
    },

    {
      id: "rutas-rapidas",
      title: "Rutas rápidas",

      items: [
        {
          title: "Agendar clase de prueba",
          description:
            "Para quienes desean comenzar un proceso de entrenamiento.",
        },
        {
          title: "Hablar por WhatsApp",
          description: "Para una conversación directa con el equipo de KFA.",
        },
        {
          title: "Solicitar información para mi hijo",
          description:
            "Para padres y familias interesadas en programas infantiles o juveniles.",
        },
        {
          title: "Vincular mi dojo",
          description: "Para instructores, academias y grupos de práctica.",
        },
        {
          title: "Proponer una alianza",
          description: "Para empresas, instituciones y organizaciones.",
        },
        {
          title: "Hacer una donación",
          description:
            "Para personas o entidades interesadas en apoyar programas.",
        },
        {
          title: "Preguntar por seminarios",
          description: "Para practicantes, instructores, dojos y academias.",
        },
      ],
    },
  ],

  automaticResponse:
    "Gracias por contactar a Fundación Kyokushin Fight Academy — KFA. Recibimos tu mensaje y pronto te orientaremos según tu interés. Si deseas agilizar la comunicación, puedes escribirnos por WhatsApp al 301 482 8926 indicando si buscas clase de prueba, información para padres, alianza institucional, donación, seminario o vinculación de dojo.",

  closingMessage:
    "El primer paso es escribirnos. Desde allí te orientamos hacia la clase, programa, alianza, donación, seminario o ruta de vinculación que mejor responda a tu interés.",

  whatsappNumber: "573014828926",
};
