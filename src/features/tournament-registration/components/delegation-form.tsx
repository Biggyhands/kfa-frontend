"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AlertCircle, ArrowRight, Building2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { createDelegation } from "@/lib/api/delegations";
import { delegationSchema } from "@/utils/schemas/delegation.schema";

import type {
  ApiError,
  DelegationCreateInput,
  DelegationFormProps,
  DelegationFormValues,
} from "@/utils/types";

const inputClassName =
  "min-h-12 w-full border-b border-black/20 bg-transparent px-0 text-sm text-black outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)";

const labelClassName =
  "mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-black";

const errorClassName = "mt-2 text-xs leading-5 text-(--kfa-red)";

export function DelegationForm({ slug, onSuccess }: DelegationFormProps) {
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DelegationFormValues>({
    resolver: zodResolver(delegationSchema),

    defaultValues: {
      organizationName: "",
      dojoName: "",
      responsibleProfessor: "",
      contactName: "",
      contactEmail: "",
      whatsapp: "",
      country: "",
      city: "",
      privacyAccepted: undefined,
    },
  });

  const createDelegationMutation = useMutation({
    mutationFn: (payload: DelegationCreateInput) =>
      createDelegation(slug, payload),

    onSuccess: (data) => {
      setFormError(null);

      onSuccess({
        delegationId: data.id,
        token: data.editToken,
      });
    },

    onError: (error: ApiError) => {
      if (error.code === "DELEGATION_ALREADY_EXISTS") {
        setFormError(
          "Ya existe una delegación registrada con este correo para el evento. Utiliza el enlace de gestión que recibiste por correo para continuar administrándola.",
        );

        return;
      }

      if (error.code === "REGISTRATION_CLOSED") {
        setFormError("El periodo de inscripción para este evento ya finalizó.");

        return;
      }

      if (error.code === "REGISTRATION_NOT_AVAILABLE") {
        setFormError(
          "La inscripción para este evento no está disponible en este momento.",
        );

        return;
      }

      if (error.code === "TOO_MANY_REQUESTS") {
        setFormError(
          "Se han realizado demasiadas solicitudes. Espera unos minutos antes de intentarlo nuevamente.",
        );

        return;
      }

      if (error.code === "VALIDATION_ERROR") {
        setFormError("Revisa la información ingresada e intenta nuevamente.");

        return;
      }

      setFormError(
        error.message ||
          "No fue posible registrar la delegación. Intenta nuevamente.",
      );
    },
  });

  function onSubmit(values: DelegationFormValues) {
    setFormError(null);

    const payload: DelegationCreateInput = {
      organizationName: values.organizationName.trim(),

      dojoName: values.dojoName.trim(),

      responsibleProfessor: values.responsibleProfessor.trim(),

      contactName: values.contactName.trim(),

      contactEmail: values.contactEmail.trim(),

      whatsapp: values.whatsapp.trim(),

      country: values.country.trim(),

      city: values.city.trim(),

      privacyAccepted: true,
    };

    createDelegationMutation.mutate(payload);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="bg-white p-6 text-black shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:p-8 lg:p-10 xl:p-12"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center bg-black text-white">
          <Building2 aria-hidden="true" size={19} />
        </div>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-(--kfa-red)">
            Paso 01
          </p>

          <h3 className="mt-1 font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase leading-none tracking-[-0.02em] sm:text-4xl">
            Registra tu delegación
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
            Ingresa los datos de la organización y de la persona responsable.
            Después podrás agregar y administrar los competidores de tu
            delegación.
          </p>
        </div>
      </div>

      {formError && (
        <div
          role="alert"
          className="mt-8 flex items-start gap-3 border-l-4 border-(--kfa-red) bg-(--kfa-red)/5 p-4"
        >
          <AlertCircle
            aria-hidden="true"
            size={18}
            className="mt-0.5 shrink-0 text-(--kfa-red)"
          />

          <p className="text-sm leading-6 text-black/70">{formError}</p>
        </div>
      )}

      <div className="mt-10 space-y-10">
        <section>
          <h4 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase tracking-tight">
            Información de la delegación
          </h4>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            <div>
              <label htmlFor="organizationName" className={labelClassName}>
                Organización *
              </label>

              <input
                id="organizationName"
                type="text"
                autoComplete="organization"
                {...register("organizationName")}
                aria-invalid={Boolean(errors.organizationName)}
                className={inputClassName}
                placeholder="Ej. Fundación / Academia / Asociación"
              />

              {errors.organizationName && (
                <p className={errorClassName}>
                  {errors.organizationName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="dojoName" className={labelClassName}>
                Dojo *
              </label>

              <input
                id="dojoName"
                type="text"
                {...register("dojoName")}
                aria-invalid={Boolean(errors.dojoName)}
                className={inputClassName}
                placeholder="Nombre del dojo"
              />

              {errors.dojoName && (
                <p className={errorClassName}>{errors.dojoName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="responsibleProfessor" className={labelClassName}>
                Profesor responsable *
              </label>

              <input
                id="responsibleProfessor"
                type="text"
                {...register("responsibleProfessor")}
                aria-invalid={Boolean(errors.responsibleProfessor)}
                className={inputClassName}
                placeholder="Nombre completo del profesor responsable"
              />

              {errors.responsibleProfessor && (
                <p className={errorClassName}>
                  {errors.responsibleProfessor.message}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 pt-8">
          <h4 className="font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase tracking-tight">
            Contacto
          </h4>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            <div>
              <label htmlFor="contactName" className={labelClassName}>
                Persona de contacto *
              </label>

              <input
                id="contactName"
                type="text"
                autoComplete="name"
                {...register("contactName")}
                aria-invalid={Boolean(errors.contactName)}
                className={inputClassName}
                placeholder="Nombre completo"
              />

              {errors.contactName && (
                <p className={errorClassName}>{errors.contactName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="contactEmail" className={labelClassName}>
                Correo electrónico *
              </label>

              <input
                id="contactEmail"
                type="email"
                autoComplete="email"
                {...register("contactEmail")}
                aria-invalid={Boolean(errors.contactEmail)}
                className={inputClassName}
                placeholder="correo@ejemplo.com"
              />

              {errors.contactEmail && (
                <p className={errorClassName}>{errors.contactEmail.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="whatsapp" className={labelClassName}>
                WhatsApp *
              </label>

              <input
                id="whatsapp"
                type="tel"
                autoComplete="tel"
                {...register("whatsapp")}
                aria-invalid={Boolean(errors.whatsapp)}
                className={inputClassName}
                placeholder="+57 301 000 0000"
              />

              {errors.whatsapp && (
                <p className={errorClassName}>{errors.whatsapp.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="country" className={labelClassName}>
                País *
              </label>

              <input
                id="country"
                type="text"
                autoComplete="country-name"
                {...register("country")}
                aria-invalid={Boolean(errors.country)}
                className={inputClassName}
                placeholder="Colombia"
              />

              {errors.country && (
                <p className={errorClassName}>{errors.country.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className={labelClassName}>
                Ciudad *
              </label>

              <input
                id="city"
                type="text"
                autoComplete="address-level2"
                {...register("city")}
                aria-invalid={Boolean(errors.city)}
                className={inputClassName}
                placeholder="Ciudad"
              />

              {errors.city && (
                <p className={errorClassName}>{errors.city.message}</p>
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-black/10 pt-8">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              {...register("privacyAccepted")}
              className="mt-1 size-4 shrink-0 accent-(--kfa-blue)"
            />

            <span className="text-xs leading-6 text-black/60">
              Autorizo el tratamiento de los datos suministrados para gestionar
              la inscripción de la delegación y las comunicaciones relacionadas
              con Colombia Open 2026. *
            </span>
          </label>

          {errors.privacyAccepted && (
            <p className={errorClassName}>{errors.privacyAccepted.message}</p>
          )}
        </section>

        <div className="border-t border-black/10 pt-8">
          <button
            type="submit"
            disabled={createDelegationMutation.isPending}
            className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-3 bg-(--kfa-blue) px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-(--kfa-blue-dark) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {createDelegationMutation.isPending ? (
              <>
                <LoaderCircle
                  aria-hidden="true"
                  size={16}
                  className="animate-spin"
                />
                Registrando delegación...
              </>
            ) : (
              <>
                Continuar con competidores
                <ArrowRight aria-hidden="true" size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
