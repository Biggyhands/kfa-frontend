import type { PrivacyContent } from "@/utils/types";

export const privacyContent: PrivacyContent = {
  eyebrow: "Privacidad y datos personales",

  title: "Tu información",
  highlightedTitle: "también merece cuidado.",

  description:
    "Fundación Kyokushin Fight Academy — KFA trata la información personal recibida a través de formularios, canales de contacto y procesos de inscripción únicamente para atender solicitudes, orientar a las personas interesadas y gestionar actividades relacionadas con su objeto institucional.",

  detailsTitle: "Ver información sobre privacidad",

  detailsDescription:
    "Consulta de forma clara qué datos podemos solicitar, para qué los usamos y cuáles son los canales disponibles para ejercer tus derechos.",

  detailSections: [
    {
      id: "datos-recopilados",
      title: "Información que podemos solicitar",

      paragraphs: [
        "Dependiendo del tipo de contacto o proceso, KFA puede solicitar información básica de identificación y contacto, así como datos relacionados con la actividad deportiva, institucional o de vinculación que la persona desea realizar.",
      ],

      items: [
        {
          title: "Identificación básica",
          description:
            "Nombre y demás información necesaria para identificar correctamente a la persona que realiza la solicitud.",
        },
        {
          title: "Datos de contacto",
          description:
            "Número de teléfono, WhatsApp, correo electrónico, ciudad o país cuando sean necesarios para responder la solicitud.",
        },
        {
          title: "Información deportiva",
          description:
            "Edad, disciplina, nivel, experiencia previa, dojo, academia, instructor o programa de interés cuando corresponda.",
        },
        {
          title: "Información institucional",
          description:
            "Datos de empresas, organizaciones, dojos, instituciones educativas, aliados, patrocinadores o responsables de contacto.",
        },
        {
          title: "Información para eventos",
          description:
            "Datos necesarios para procesos de inscripción, participación en seminarios, torneos, masterclasses u otras actividades organizadas o promovidas por KFA.",
        },
      ],
    },

    {
      id: "finalidades",
      title: "Para qué utilizamos la información",

      items: [
        {
          title: "Responder solicitudes",
          description:
            "Atender consultas relacionadas con clases, programas, dojos, eventos, seminarios, alianzas, donaciones o procesos institucionales.",
        },
        {
          title: "Gestionar inscripciones",
          description:
            "Procesar información necesaria para registros deportivos, torneos, seminarios, actividades formativas y eventos.",
        },
        {
          title: "Dar seguimiento",
          description:
            "Contactar a la persona interesada por los canales suministrados para continuar una conversación iniciada voluntariamente.",
        },
        {
          title: "Gestionar alianzas",
          description:
            "Dar respuesta y seguimiento a propuestas de cooperación, patrocinio, donación, voluntariado o vinculación institucional.",
        },
        {
          title: "Cumplir obligaciones institucionales",
          description:
            "Conservar información cuando sea necesario para soportar procesos administrativos, contractuales, contables o legales aplicables.",
        },
      ],
    },

    {
      id: "autorizacion",
      title: "Autorización y uso de formularios",

      paragraphs: [
        "Cuando un formulario incluya una casilla de autorización, su aceptación indica que la persona permite a KFA utilizar los datos suministrados para responder y gestionar específicamente la solicitud realizada.",

        "El envío de un formulario no implica por sí mismo la celebración de un contrato, la aceptación definitiva de una inscripción, una alianza, una donación o cualquier otra relación institucional. Cada proceso podrá requerir validaciones o documentación adicional.",
      ],
    },

    {
      id: "menores",
      title: "Información relacionada con niños y adolescentes",

      paragraphs: [
        "Los programas de KFA pueden involucrar niños, niñas y adolescentes. Cuando una solicitud corresponda a una persona menor de edad, la información deberá ser suministrada o autorizada por su madre, padre, representante legal o adulto responsable, según corresponda.",

        "KFA procurará solicitar únicamente la información necesaria para orientar, registrar o gestionar la participación del menor en el programa o actividad correspondiente.",
      ],
    },

    {
      id: "derechos",
      title: "Derechos sobre los datos personales",

      paragraphs: [
        "Las personas pueden solicitar información sobre los datos personales suministrados a KFA y, cuando corresponda, pedir su actualización, corrección o eliminación de acuerdo con las disposiciones aplicables.",
      ],

      items: [
        {
          title: "Conocer",
          description:
            "Solicitar información sobre los datos personales que hayan sido suministrados a KFA.",
        },
        {
          title: "Actualizar",
          description:
            "Solicitar la actualización de información que haya cambiado o se encuentre incompleta.",
        },
        {
          title: "Corregir",
          description:
            "Solicitar la corrección de información que sea incorrecta o inexacta.",
        },
        {
          title: "Solicitar eliminación",
          description:
            "Solicitar la eliminación de información cuando resulte procedente conforme a las obligaciones legales o institucionales aplicables.",
        },
        {
          title: "Revocar autorización",
          description:
            "Solicitar la revocación de una autorización cuando legalmente corresponda.",
        },
      ],
    },

    {
      id: "seguridad",
      title: "Protección y conservación",

      paragraphs: [
        "KFA procurará aplicar medidas administrativas, organizativas y tecnológicas razonables para reducir riesgos de acceso no autorizado, pérdida, alteración o uso indebido de la información recibida.",

        "La información será conservada únicamente durante el tiempo necesario para atender la finalidad para la cual fue recopilada o durante los periodos que puedan resultar exigibles por razones administrativas, contractuales, contables o legales.",
      ],
    },

    {
      id: "canales",
      title: "Canales para solicitudes sobre privacidad",

      items: [
        {
          title: "Correo electrónico",
          description: "senshiacademycol@gmail.com",
        },
        {
          title: "WhatsApp y teléfono",
          description: "301 482 8926",
        },
        {
          title: "Dirección",
          description:
            "Carrera 57 No. 75-152, Barranquilla, Atlántico, Colombia.",
        },
      ],
    },

    {
      id: "politica-oficial",
      title: "Política institucional",

      paragraphs: [
        "La política formal de tratamiento de datos personales podrá publicarse en este sitio una vez se encuentre aprobada y disponible como documento institucional oficial.",

        "Hasta entonces, esta sección funciona como una explicación general y accesible del tratamiento asociado a los formularios y canales digitales del sitio web.",
      ],
    },
  ],

  closingMessage:
    "La transparencia también significa explicar con claridad qué información solicitamos, por qué la necesitamos y cómo pueden las personas comunicarse con KFA sobre el tratamiento de sus datos.",
};
