import type { TransparencyContent } from "@/utils/types";

export const transparencyContent: TransparencyContent = {
  eyebrow: "Transparencia",

  title: "Una fundación",
  highlightedTitle: "con propósito y claridad.",

  institutionalData: [
    {
      label: "Razón social",
      value: "Fundación Kyokushin Fight Academy",
    },
    {
      label: "NIT",
      value: "902.085.667-9",
    },
    {
      label: "Domicilio principal",
      value: "Barranquilla, Atlántico, Colombia",
    },
    {
      label: "Dirección",
      value: "Carrera 57 No. 75-152",
    },
    {
      label: "CIIU",
      value: "8552 · Enseñanza deportiva y recreativa",
    },
    {
      label: "Naturaleza",
      value:
        "Entidad sin ánimo de lucro, de derecho privado, permanente, apolítica, independiente, autónoma y de utilidad común.",
    },
    {
      label: "Correo",
      value: "senshiacademycol@gmail.com",
    },
    {
      label: "Teléfono / WhatsApp",
      value: "301 482 8926",
    },
  ],

  documentsTitle: "Documentación institucional · actualización progresiva",

  documentsDescription:
    "Los documentos oficiales que KFA autorice para publicación se incorporarán en este espacio de forma progresiva.",

  documents: [
    {
      id: "certificado-existencia",
      title: "Certificado de existencia y representación legal",
      status: "Pendiente de archivo autorizado",
    },
    {
      id: "estatutos",
      title: "Estatutos sociales",
      status: "Pendiente de archivo autorizado",
    },
    {
      id: "certificaciones",
      title: "Certificaciones institucionales o tributarias",
      status: "Según disponibilidad",
    },
    {
      id: "informes",
      title: "Informes de gestión / estados financieros",
      status: "Según corresponda",
    },
    {
      id: "tratamiento-datos",
      title: "Política de tratamiento de datos",
      status: "Pendiente de versión oficial",
    },
  ],

  requestActionLabel: "Solicitar documentación",
  requestActionHref: "#contacto",

  privacyActionLabel: "Ver aviso de privacidad inicial",
  privacyActionHref: "#privacidad",

  detailsTitle: "Ver toda la información de transparencia",

  detailsDescription:
    "Conoce la información jurídica, administrativa, tributaria y misional esencial de KFA.",

  detailSections: [
    {
      id: "datos-basicos",
      title: "Datos institucionales básicos",

      items: [
        "Razón social: Fundación Kyokushin Fight Academy.",
        "NIT: 902.085.667-9.",
        "Domicilio principal: Barranquilla, Atlántico, Colombia.",
        "Dirección: Carrera 57 No. 75-152.",
        "Correo electrónico: senshiacademycol@gmail.com.",
        "Teléfono: 301 482 8926.",
        "Naturaleza jurídica: entidad sin ánimo de lucro, de derecho privado, permanente, apolítica, independiente, autónoma y de utilidad común.",
        "Actividad económica principal: CIIU 8552 — Enseñanza deportiva y recreativa.",
      ],
    },

    {
      id: "naturaleza-sin-animo-lucro",
      title: "Naturaleza sin ánimo de lucro",

      paragraphs: [
        "KFA comunica de forma expresa que sus aportes no son reembolsables, que sus excedentes no se distribuyen bajo ninguna modalidad y que sus recursos se destinan exclusivamente al cumplimiento de su objeto social, al desarrollo de actividades meritorias y a programas de interés general con acceso a la comunidad.",
      ],
    },

    {
      id: "representacion-legal",
      title: "Representación legal y dirección institucional",

      paragraphs: [
        "La información institucional puede incluir al Director Ejecutivo como Representante Legal Principal y a la Subdirección Ejecutiva como Representación Legal Suplente.",

        "La Asamblea General constituye el máximo órgano de dirección y decisión de la Fundación. Esta información debe mantenerse presentada de forma clara, sobria y verificable.",
      ],
    },

    {
      id: "documentos-publicables",
      title: "Documentos sugeridos para publicar o enlazar",

      items: [
        "Certificado de Existencia y Representación Legal vigente.",
        "Estatutos Sociales de la Fundación.",
        "Certificaciones institucionales o tributarias cuando correspondan.",
        "Informes de gestión.",
        "Estados financieros aprobados, cuando sea procedente publicarlos.",
        "Información relacionada con calificación, actualización o permanencia en el Régimen Tributario Especial, cuando aplique.",
        "Política de tratamiento de datos personales.",
        "Canales de contacto para solicitudes institucionales o de transparencia.",
      ],
    },

    {
      id: "regimen-tributario",
      title: "Régimen Tributario Especial",

      paragraphs: [
        "KFA mantiene una comunicación coherente con su propósito de desarrollar actividades meritorias de interés general y acceso a la comunidad.",

        "Cuando corresponda, el sitio web podrá informar de manera clara, verificable y actualizada los avances, documentos, certificaciones y obligaciones relacionadas con la solicitud, calificación, actualización o permanencia en el Régimen Tributario Especial ante la DIAN.",
      ],
    },
  ],

  closingMessage:
    "En Fundación Kyokushin Fight Academy trabajamos con responsabilidad, transparencia y compromiso social. Nuestros recursos se orientan al cumplimiento de nuestra misión institucional y al desarrollo de programas de deporte, enseñanza recreativa, cultura, bienestar, inclusión y desarrollo comunitario.",
};
