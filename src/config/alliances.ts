import type { AlliancesContent } from "@/utils/types";

export const alliancesContent: AlliancesContent = {
  eyebrow: "Alianzas y cooperación",

  title: "Construimos",
  highlightedTitle: "juntos.",

  description:
    "KFA construye alianzas con empresas, instituciones educativas, entidades públicas, organizaciones sociales, cooperantes, donantes, patrocinadores, voluntarios y dojos que quieran transformar intención en impacto real.",

  options: [
    {
      id: "donaciones",
      index: "01",
      title: "Donaciones",
      description:
        "Aportes económicos o en especie que pueden convertirse en becas, dotación, materiales y oportunidades para nuestra comunidad.",
      actionLabel: "Quiero donar",
      actionHref: "#contacto",
      featured: true,
    },

    {
      id: "patrocinios",
      index: "02",
      title: "Patrocinios",
      description:
        "Apoyo a eventos, seminarios, campañas, torneos, jornadas comunitarias y programas de impacto social.",
      actionLabel: "Quiero patrocinar",
      actionHref: "#contacto",
    },

    {
      id: "convenios",
      index: "03",
      title: "Convenios",
      description:
        "Alianzas con empresas, colegios, universidades, entidades públicas, fundaciones y organizaciones comunitarias.",
      actionLabel: "Proponer alianza",
      actionHref: "#contacto",
    },

    {
      id: "voluntariado",
      index: "04",
      title: "Voluntariado",
      description:
        "Participación profesional, deportiva, logística, pedagógica, jurídica, médica, comunicacional o administrativa.",
      actionLabel: "Ser voluntario",
      actionHref: "#contacto",
    },

    {
      id: "becas-dotacion",
      index: "05",
      title: "Becas y dotación",
      description:
        "Apoyo directo para facilitar que más niños, jóvenes y comunidades puedan acceder a procesos de formación.",
      actionLabel: "Financiar oportunidades",
      actionHref: "#contacto",
    },

    {
      id: "cooperacion",
      index: "06",
      title: "Cooperación",
      description:
        "Formulación conjunta de iniciativas deportivas, culturales, educativas, de bienestar, inclusión y desarrollo social.",
      actionLabel: "Explorar cooperación",
      actionHref: "#contacto",
    },
  ],

  detailsTitle: "Conoce todas las formas de apoyar a KFA",

  detailsDescription:
    "Aquí puedes ver las modalidades de apoyo, lo que puede financiar un aliado y las formas de crear una alianza.",

  detailsIntro: [
    "En la Fundación KFA abrimos las puertas a empresas, instituciones, donantes y voluntarios que quieren ser parte de un cambio positivo. Creemos que las grandes transformaciones ocurren cuando sumamos esfuerzos; por eso, este espacio es una invitación abierta para conocer nuestro trabajo y descubrir cómo, desde tu sector, puedes unirte a nuestra causa de forma transparente y segura.",
    "Nuestro propósito es demostrar que apoyar a KFA es mucho más que una donación: es una inversión directa en el futuro de la comunidad. Cada alianza y respaldo que recibimos se traduce en programas reales de formación deportiva, inclusión, cultura y bienestar integral, devolviéndole a los jóvenes espacios de convivencia y oportunidades de desarrollo humano.",
  ],

  detailSections: [
    {
      id: "mensaje-principal",
      title: "Tu apoyo puede transformar oportunidades",

      paragraphs: [
        "Tu apoyo puede convertirse en clases, becas, dotación, bienestar y oportunidades para niños, jóvenes, familias y comunidades.",

        "En KFA creemos en alianzas que transforman. Cada donación, convenio, patrocinio o aporte en especie contribuye a sostener programas de enseñanza deportiva y recreativa, formación integral, prevención de riesgos sociales, bienestar físico y mental, cultura, inclusión y convivencia ciudadana.",
      ],
    },

    {
      id: "modalidades-apoyo",
      title: "Modalidades de apoyo",

      items: [
        {
          title: "Donaciones económicas",
          description:
            "Aportes destinados a becas, programas comunitarios, eventos, materiales pedagógicos y sostenimiento de actividades meritorias.",
        },
        {
          title: "Donaciones en especie",
          description:
            "Uniformes, implementos deportivos, protecciones, equipos, material audiovisual, tecnología, hidratación, transporte o alimentación para actividades específicas.",
        },
        {
          title: "Patrocinios",
          description:
            "Apoyo a eventos, seminarios, jornadas comunitarias, becas deportivas, torneos, campañas y programas de impacto social.",
        },
        {
          title: "Convenios institucionales",
          description:
            "Alianzas con colegios, universidades, empresas, fundaciones, entidades públicas, clubes, cajas de compensación y organizaciones comunitarias.",
        },
        {
          title: "Voluntariado",
          description:
            "Apoyo profesional, logístico, pedagógico, comunicacional, jurídico, psicológico, médico, deportivo o administrativo.",
        },
        {
          title: "Cooperación y proyectos",
          description:
            "Formulación conjunta de iniciativas de deporte, cultura, bienestar, inclusión, prevención y desarrollo social.",
        },
      ],
    },

    {
      id: "financiacion",
      title: "¿Qué puede financiar un aliado?",

      items: [
        {
          title: "Becas",
          description:
            "Becas parciales o completas para niños, niñas, adolescentes y jóvenes.",
        },
        {
          title: "Dotación deportiva",
          description:
            "Implementos y equipamiento para beneficiarios y programas comunitarios.",
        },
        {
          title: "Jornadas comunitarias",
          description:
            "Actividades de deporte, recreación, bienestar y convivencia.",
        },
        {
          title: "Formación técnica",
          description:
            "Seminarios y procesos de formación técnica para instructores.",
        },
        {
          title: "Material pedagógico",
          description:
            "Contenidos audiovisuales, materiales y recursos de aprendizaje.",
        },
        {
          title: "Prevención y liderazgo",
          description:
            "Actividades de prevención, liderazgo juvenil y hábitos saludables.",
        },
        {
          title: "Programas especiales",
          description:
            "Iniciativas dirigidas a comunidades vulnerables o instituciones aliadas.",
        },
      ],
    },

    {
      id: "empresas-instituciones",
      title: "Empresas e instituciones",

      paragraphs: [
        "Una alianza con KFA permite a empresas e instituciones vincular su marca o gestión social con programas concretos de deporte, educación, bienestar e inclusión.",

        "La Fundación puede diseñar propuestas a la medida para jornadas empresariales, programas con colegios, actividades comunitarias, campañas de prevención, proyectos de responsabilidad social y procesos de formación deportiva y recreativa.",
      ],
    },

    {
      id: "transparencia",
      title: "Compromiso de transparencia",

      paragraphs: [
        "KFA comunica que los recursos recibidos se destinan exclusivamente al cumplimiento de su objeto social y a la ejecución de actividades meritorias de interés general.",

        "La Fundación mantiene un compromiso con el buen manejo de los recursos, la trazabilidad, la documentación, los informes de gestión, la rendición de cuentas y el respeto por su naturaleza no lucrativa.",
      ],
    },
  ],

  actionsTitle: "¿Cómo quieres participar?",

  actions: [
    {
      id: "donar",
      label: "Quiero hacer una donación",
      href: "#contacto",
    },
    {
      id: "patrocinar",
      label: "Quiero patrocinar un programa",
      href: "#contacto",
    },
    {
      id: "alianza",
      label: "Quiero proponer una alianza",
      href: "#contacto",
    },
    {
      id: "voluntario",
      label: "Quiero ser voluntario",
      href: "#contacto",
    },
    {
      id: "becas",
      label: "Quiero financiar becas o dotación",
      href: "#contacto",
    },
    {
      id: "reunion",
      label: "Agendar una reunión institucional",
      href: "#contacto",
    },
  ],

  closingMessage:
    "Aliarse con KFA es convertir la intención de ayudar en programas concretos de deporte, bienestar, formación, inclusión y comunidad.",
};
