"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useForm } from "react-hook-form";

import { tournamentRegistrationSchema } from "@/utils/schemas/tournament-registration.schema";

import type {
  TournamentRegistrationFormProps,
  TournamentRegistrationFormValues,
} from "@/utils/types";

export function TournamentRegistrationForm({
  eventName,
}: TournamentRegistrationFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TournamentRegistrationFormValues>({
    resolver: zodResolver(tournamentRegistrationSchema),

    defaultValues: {
      representativeName: "",
      delegationName: "",
      country: "Colombia",
      city: "",
      email: "",
      phone: "",
      athletesCount: 1,
      notes: "",
      privacyAccepted: false,
    },
  });

  function onSubmit(values: TournamentRegistrationFormValues) {
    /*
     * Temporalmente no enviamos a backend.
     *
     * En la siguiente fase este punto será sustituido por:
     *
     * mutation.mutate(values)
     *
     * usando TanStack Query y nuestra API.
     */

    console.log({
      event: eventName,
      ...values,
    });

    setIsSubmitted(true);

    reset();
  }

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="border border-black/10 bg-[#f5f5f3] p-6 sm:p-8"
      >
        <CheckCircle2
          aria-hidden="true"
          className="text-(--kfa-blue)"
          size={32}
        />

        <h3 className="mt-5 text-3xl font-black uppercase leading-none">
          Registro recibido
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-7 text-black/60">
          Los datos fueron validados correctamente. La conexión definitiva con
          el sistema de inscripciones se realizará cuando integremos el backend.
        </p>

        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 min-h-11 border border-black px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-white"
        >
          Registrar otra delegación
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="representativeName"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]"
          >
            Representante *
          </label>

          <input
            id="representativeName"
            type="text"
            autoComplete="name"
            {...register("representativeName")}
            aria-invalid={Boolean(errors.representativeName)}
            className="min-h-12 w-full border border-black/20 bg-white px-4 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)"
            placeholder="Nombre completo"
          />

          {errors.representativeName && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.representativeName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="delegationName"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]"
          >
            Dojo / Delegación *
          </label>

          <input
            id="delegationName"
            type="text"
            {...register("delegationName")}
            aria-invalid={Boolean(errors.delegationName)}
            className="min-h-12 w-full border border-black/20 bg-white px-4 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)"
            placeholder="Nombre de la organización"
          />

          {errors.delegationName && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.delegationName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="country"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]"
          >
            País *
          </label>

          <input
            id="country"
            type="text"
            autoComplete="country-name"
            {...register("country")}
            aria-invalid={Boolean(errors.country)}
            className="min-h-12 w-full border border-black/20 bg-white px-4 text-sm outline-none transition-colors focus:border-(--kfa-blue)"
          />

          {errors.country && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="city"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]"
          >
            Ciudad *
          </label>

          <input
            id="city"
            type="text"
            autoComplete="address-level2"
            {...register("city")}
            aria-invalid={Boolean(errors.city)}
            className="min-h-12 w-full border border-black/20 bg-white px-4 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)"
            placeholder="Ciudad"
          />

          {errors.city && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.city.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]"
          >
            Correo electrónico *
          </label>

          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            aria-invalid={Boolean(errors.email)}
            className="min-h-12 w-full border border-black/20 bg-white px-4 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)"
            placeholder="correo@ejemplo.com"
          />

          {errors.email && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]"
          >
            Teléfono / WhatsApp *
          </label>

          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            aria-invalid={Boolean(errors.phone)}
            className="min-h-12 w-full border border-black/20 bg-white px-4 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)"
            placeholder="+57 300 000 0000"
          />

          {errors.phone && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="athletesCount"
            className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]"
          >
            Número aproximado de atletas *
          </label>

          <input
            id="athletesCount"
            type="number"
            min={1}
            max={200}
            inputMode="numeric"
            {...register("athletesCount", {
              valueAsNumber: true,
            })}
            aria-invalid={Boolean(errors.athletesCount)}
            className="min-h-12 w-full border border-black/20 bg-white px-4 text-sm outline-none transition-colors focus:border-(--kfa-blue)"
          />

          {errors.athletesCount && (
            <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
              {errors.athletesCount.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="mb-2 block text-xs font-bold uppercase tracking-[0.1em]"
        >
          Observaciones
        </label>

        <textarea
          id="notes"
          rows={5}
          {...register("notes")}
          aria-invalid={Boolean(errors.notes)}
          className="w-full resize-y border border-black/20 bg-white px-4 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)"
          placeholder="Categorías, número de acompañantes o información adicional..."
        />

        {errors.notes && (
          <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
            {errors.notes.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            {...register("privacyAccepted")}
            className="mt-1 size-4 shrink-0 accent-(--kfa-blue)"
          />

          <span className="text-xs leading-6 text-black/60">
            Autorizo el tratamiento de mis datos personales para gestionar esta
            inscripción y las comunicaciones relacionadas con el evento. *
          </span>
        </label>

        {errors.privacyAccepted && (
          <p role="alert" className="mt-2 text-xs text-(--kfa-red)">
            {errors.privacyAccepted.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-black px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-(--kfa-red) disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {isSubmitting ? "Procesando..." : "Enviar inscripción"}

        <Send aria-hidden="true" size={16} />
      </button>
    </form>
  );
}
