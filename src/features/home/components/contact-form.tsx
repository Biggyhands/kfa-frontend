"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";

import { ContactDynamicFields } from "./contact-dynamic-fields";

import { contactSchema } from "@/utils/schemas/contact.schema";

import type { ContactFormProps, ContactFormValues } from "@/utils/types";

export function ContactForm({ content }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    shouldUnregister: true,

    defaultValues: {
      name: "",
      phone: "",
      interest: "trial-class",
      message: content.interests[0]?.defaultMessage ?? "",
      privacyAccepted: false,
    },
  });

  const interest = watch("interest");

  useEffect(() => {
    const selectedInterest = content.interests.find(
      (item) => item.value === interest,
    );

    if (!selectedInterest) {
      return;
    }

    setValue("message", selectedInterest.defaultMessage);
  }, [interest, content.interests, setValue]);

  function onSubmit(values: ContactFormValues) {
    const selectedInterest = content.interests.find(
      (item) => item.value === values.interest,
    );

    const lines = [
      "Hola KFA, quiero realizar una solicitud.",
      "",
      `Nombre: ${values.name}`,
      `Teléfono: ${values.phone}`,
      `Motivo: ${selectedInterest?.label ?? values.interest}`,
    ];

    if (values.age) {
      lines.push(`Edad: ${values.age}`);
    }

    if (values.program) {
      lines.push(`Programa de interés: ${values.program}`);
    }

    if (values.availability) {
      lines.push(`Disponibilidad: ${values.availability}`);
    }

    if (values.childAge) {
      lines.push(`Edad del niño/joven: ${values.childAge}`);
    }

    if (values.previousExperience) {
      lines.push(`Experiencia previa: ${values.previousExperience}`);
    }

    if (values.mainGoal) {
      lines.push(`Objetivo principal: ${values.mainGoal}`);
    }

    if (values.preferredChannel) {
      lines.push(`Canal preferido: ${values.preferredChannel}`);
    }

    if (values.country) {
      lines.push(`País: ${values.country}`);
    }

    if (values.city) {
      lines.push(`Ciudad: ${values.city}`);
    }

    if (values.dojoName) {
      lines.push(`Dojo: ${values.dojoName}`);
    }

    if (values.instructorName) {
      lines.push(`Instructor responsable: ${values.instructorName}`);
    }

    if (values.disciplines) {
      lines.push(`Disciplinas: ${values.disciplines}`);
    }

    if (values.background) {
      lines.push(`Trayectoria: ${values.background}`);
    }

    if (values.entityType) {
      lines.push(`Tipo de entidad: ${values.entityType}`);
    }

    if (values.responsibleContact) {
      lines.push(`Contacto responsable: ${values.responsibleContact}`);
    }

    if (values.supportInterest) {
      lines.push(`Interés de apoyo: ${values.supportInterest}`);
    }

    if (values.allianceType) {
      lines.push(`Modalidad de alianza: ${values.allianceType}`);
    }

    if (values.contributionType) {
      lines.push(`Tipo de aporte: ${values.contributionType}`);
    }

    if (values.supportedProgram) {
      lines.push(`Programa a apoyar: ${values.supportedProgram}`);
    }

    if (values.followUpPreference) {
      lines.push(`Preferencia de seguimiento: ${values.followUpPreference}`);
    }

    if (values.seminarDiscipline) {
      lines.push(`Disciplina: ${values.seminarDiscipline}`);
    }

    if (values.seminarLevel) {
      lines.push(`Nivel: ${values.seminarLevel}`);
    }

    if (values.academy) {
      lines.push(`Dojo / academia: ${values.academy}`);
    }

    lines.push("", `Mensaje: ${values.message}`);

    const whatsappMessage = encodeURIComponent(lines.join("\n"));

    const whatsappUrl =
      `https://wa.me/${content.whatsappNumber}` + `?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white p-6 text-black sm:p-8 lg:p-10"
    >
      <h3 className="font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-none tracking-[-0.02em] sm:text-5xl">
        {content.formTitle}
      </h3>

      <div className="mt-8 space-y-7">
        {/* Nombre */}
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em]"
          >
            Nombre *
          </label>

          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            {...register("name")}
            aria-invalid={Boolean(errors.name)}
            className="min-h-12 w-full border-b border-black/20 bg-transparent text-sm outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)"
            placeholder="Tu nombre"
          />

          {errors.name && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Teléfono */}
        <div>
          <label
            htmlFor="contact-phone"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em]"
          >
            WhatsApp / teléfono *
          </label>

          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            aria-invalid={Boolean(errors.phone)}
            className="min-h-12 w-full border-b border-black/20 bg-transparent text-sm outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)"
            placeholder="Ej. 301 482 8926"
          />

          {errors.phone && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Motivo */}
        <div>
          <label
            htmlFor="contact-interest"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em]"
          >
            Motivo de contacto *
          </label>

          <select
            id="contact-interest"
            {...register("interest")}
            aria-invalid={Boolean(errors.interest)}
            className="min-h-12 w-full border-b border-black/20 bg-white text-sm font-semibold outline-none transition-colors focus:border-(--kfa-blue)"
          >
            {content.interests.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {errors.interest && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.interest.message}
            </p>
          )}
        </div>

        {/* Campos dinámicos */}
        <ContactDynamicFields
          interest={interest}
          register={register}
          errors={errors}
        />

        {/* Mensaje */}
        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em]"
          >
            Mensaje *
          </label>

          <textarea
            id="contact-message"
            rows={5}
            {...register("message")}
            aria-invalid={Boolean(errors.message)}
            className="w-full resize-y border-b border-black/20 bg-transparent py-3 text-sm leading-7 outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)"
            placeholder="Cuéntanos cómo podemos ayudarte"
          />

          {errors.message && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Privacidad */}
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              {...register("privacyAccepted")}
              className="mt-1 size-4 shrink-0 accent-(--kfa-blue)"
            />

            <span className="text-[11px] leading-5 text-black/65">
              Autorizo el tratamiento de mis datos personales para recibir
              respuesta a esta solicitud. *
            </span>
          </label>

          {errors.privacyAccepted && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.privacyAccepted.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 bg-(--kfa-blue) px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-(--kfa-blue-dark) disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {isSubmitting ? "Procesando..." : "Enviar solicitud"}

          <ArrowUpRight aria-hidden="true" size={16} />
        </button>
      </div>
    </form>
  );
}
