"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
  AlertCircle,
  Check,
  LoaderCircle,
  Save,
  Sword,
  Swords,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import {
  competitorGradeOptions,
  kumiteExperienceOptions,
} from "@/features/tournament-registration/constants/tournament.constants";
import { useEvent } from "@/features/tournament-registration/hooks/use-event";
import { createCompetitor, updateCompetitor } from "@/lib/api/competitors";
import { competitorSchema } from "@/utils/schemas/competitor.schema";

import type {
  ApiError,
  CompetitionModality,
  CompetitorCreateInput,
  CompetitorFormProps,
  CompetitorFormValues,
  CompetitorUpdateInput,
} from "@/utils/types";

const inputClassName =
  "min-h-12 min-w-0 max-w-full w-full border-b border-black/20 bg-transparent px-0 text-sm text-black outline-none transition-colors placeholder:text-black/35 focus:border-(--kfa-blue)";

const labelClassName =
  "mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-black";

const errorClassName = "mt-2 text-xs leading-5 text-(--kfa-red)";

function getAgeAtEventDate(
  birthDate: string,
  eventDate: string,
): number | null {
  if (!birthDate || !eventDate) {
    return null;
  }

  const [birthYear, birthMonth, birthDay] = birthDate.split("-").map(Number);

  const [eventYear, eventMonth, eventDay] = eventDate.split("-").map(Number);

  if (
    !birthYear ||
    !birthMonth ||
    !birthDay ||
    !eventYear ||
    !eventMonth ||
    !eventDay
  ) {
    return null;
  }

  let age = eventYear - birthYear;

  const birthdayHasNotOccurred =
    eventMonth < birthMonth ||
    (eventMonth === birthMonth && eventDay < birthDay);

  if (birthdayHasNotOccurred) {
    age -= 1;
  }

  return age;
}

export function CompetitorForm({
  slug,
  session,
  mode = "create",
  competitor,
  onCreated,
  onUpdated,
  onInvalidSession,
  onCancel,
}: CompetitorFormProps) {
  const [formError, setFormError] = useState<string | null>(null);

  const eventQuery = useEvent(slug);

  const isEditing = mode === "edit";

  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    clearErrors,

    formState: { errors },
  } = useForm<CompetitorFormValues>({
    resolver: zodResolver(competitorSchema),

    defaultValues: {
      fullName: competitor?.fullName ?? "",

      birthDate: competitor?.birthDate ?? "",

      heightCm: competitor?.heightCm,

      weightKg: competitor?.weightKg,

      gradeCode: competitor?.grade?.code ?? "white",

      sex: competitor?.sex ?? undefined,

      modalities: competitor?.entries.map((entry) => entry.modality) ?? [],

      kumiteExperienceLevel: competitor?.kumiteExperienceLevel ?? undefined,

      healthProvider: competitor?.healthProvider ?? "",

      guardianName: competitor?.guardianName ?? "",

      email: competitor?.email ?? "",
    },
  });

  const modalities =
    useWatch({
      control,
      name: "modalities",
    }) ?? [];

  const birthDate = useWatch({
    control,
    name: "birthDate",
  });

  const gradeCode = useWatch({
    control,
    name: "gradeCode",
  });

  const kumiteExperienceLevel = useWatch({
    control,
    name: "kumiteExperienceLevel",
  });

  const participatesKumite = modalities.includes("kumite");

  const ageAtEvent = eventQuery.data
    ? getAgeAtEventDate(birthDate ?? "", eventQuery.data.event_date)
    : null;

  const isMinor = ageAtEvent !== null && ageAtEvent < 18;

  const debutantAllowed =
    gradeCode === "white" ||
    gradeCode === "orange" ||
    gradeCode === "blue" ||
    gradeCode === "yellow";

  function handleApiError(error: ApiError) {
    if (error.code === "VALIDATION_ERROR") {
      setFormError(
        "Revisa la información ingresada. Algunos datos no son válidos.",
      );

      return;
    }

    if (error.code === "KUMITE_DEBUTANT_NOT_ALLOWED_FOR_GRADE") {
      setFormError(
        "La experiencia Debutante en Kumite solo está disponible para cinturones blanco, naranja, azul y amarillo.",
      );

      return;
    }

    if (
      error.code === "INVALID_DELEGATION_TOKEN" ||
      error.code === "DELEGATION_TOKEN_REQUIRED"
    ) {
      onInvalidSession();

      return;
    }

    if (error.code === "COMPETITOR_NOT_FOUND") {
      setFormError(
        "Este competidor ya no se encuentra disponible. Actualiza el listado e intenta nuevamente.",
      );

      return;
    }

    if (error.code === "REGISTRATION_CLOSED") {
      setFormError("El periodo de inscripción para este evento ya finalizó.");

      return;
    }

    if (error.code === "REGISTRATION_NOT_AVAILABLE") {
      setFormError("La inscripción no está disponible en este momento.");

      return;
    }

    if (error.code === "TOO_MANY_REQUESTS") {
      setFormError(
        "Se han realizado demasiadas solicitudes. Espera unos minutos antes de intentarlo nuevamente.",
      );

      return;
    }

    setFormError(
      isEditing
        ? "No fue posible actualizar al competidor. Intenta nuevamente."
        : "No fue posible registrar al competidor. Intenta nuevamente.",
    );
  }

  const createCompetitorMutation = useMutation({
    mutationFn: (payload: CompetitorCreateInput) =>
      createCompetitor(slug, session.delegationId, session.token, payload),

    onSuccess: (result) => {
      setFormError(null);

      onCreated?.(result);
    },

    onError: handleApiError,
  });

  const updateCompetitorMutation = useMutation({
    mutationFn: (payload: CompetitorUpdateInput) => {
      if (!competitor) {
        throw new Error("Competitor is required in edit mode.");
      }

      return updateCompetitor(
        slug,
        session.delegationId,
        competitor.id,
        session.token,
        payload,
      );
    },

    onSuccess: (result) => {
      setFormError(null);

      onUpdated?.(result);
    },

    onError: handleApiError,
  });

  const isSubmitting =
    createCompetitorMutation.isPending || updateCompetitorMutation.isPending;

  useEffect(() => {
    if (participatesKumite) {
      return;
    }

    setValue("kumiteExperienceLevel", undefined, {
      shouldValidate: true,
    });

    clearErrors("kumiteExperienceLevel");
  }, [participatesKumite, setValue, clearErrors]);

  useEffect(() => {
    if (!isMinor || kumiteExperienceLevel !== "open") {
      return;
    }

    setValue("kumiteExperienceLevel", undefined, {
      shouldDirty: true,
      shouldValidate: true,
    });

    clearErrors("kumiteExperienceLevel");
  }, [isMinor, kumiteExperienceLevel, setValue, clearErrors]);

  useEffect(() => {
    if (debutantAllowed || kumiteExperienceLevel !== "debutant") {
      return;
    }

    setValue("kumiteExperienceLevel", undefined, {
      shouldDirty: true,
      shouldValidate: true,
    });

    clearErrors("kumiteExperienceLevel");
  }, [debutantAllowed, kumiteExperienceLevel, setValue, clearErrors]);

  function toggleModality(modality: CompetitionModality) {
    if (modalities.includes(modality)) {
      setValue(
        "modalities",
        modalities.filter((currentModality) => currentModality !== modality),
        {
          shouldDirty: true,
          shouldValidate: true,
        },
      );

      return;
    }

    setValue("modalities", [...modalities, modality], {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function onSubmit(values: CompetitorFormValues) {
    setFormError(null);

    const participatesInKumite = values.modalities.includes("kumite");

    const guardianName = values.guardianName?.trim();

    const email = values.email?.trim();

    if (isMinor && !guardianName) {
      setError(
        "guardianName",
        {
          type: "manual",
          message:
            "Debes ingresar el nombre del padre, madre o acudiente para un competidor menor de 18 años.",
        },
        {
          shouldFocus: true,
        },
      );

      return;
    }

    if (isMinor && values.kumiteExperienceLevel === "open") {
      setError("kumiteExperienceLevel", {
        type: "manual",
        message:
          "La categoría Open no está disponible para competidores menores de 18 años.",
      });

      return;
    }

    if (!debutantAllowed && values.kumiteExperienceLevel === "debutant") {
      setError("kumiteExperienceLevel", {
        type: "manual",
        message:
          "La experiencia Debutante solo está disponible para cinturones blanco, naranja, azul y amarillo.",
      });

      return;
    }

    const payload: CompetitorCreateInput = {
      fullName: values.fullName.trim(),

      birthDate: values.birthDate,

      heightCm: values.heightCm,

      weightKg: values.weightKg,

      gradeCode: values.gradeCode,

      entries: values.modalities.map((modality) => ({
        modality,
      })),

      healthProvider: values.healthProvider.trim(),

      ...(values.sex
        ? {
            sex: values.sex,
          }
        : {}),

      ...(participatesInKumite && values.kumiteExperienceLevel
        ? {
            kumiteExperienceLevel: values.kumiteExperienceLevel,
          }
        : {}),

      ...(guardianName
        ? {
            guardianName,
          }
        : {}),

      ...(email
        ? {
            email,
          }
        : {}),
    };

    if (isEditing) {
      if (!competitor) {
        setFormError(
          "No fue posible identificar al competidor que deseas editar.",
        );

        return;
      }

      updateCompetitorMutation.mutate(payload);

      return;
    }

    createCompetitorMutation.mutate(payload);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="min-w-0 max-w-full overflow-hidden border border-black/10 bg-white shadow-[0_20px_55px_rgba(0,0,0,0.045)]"
    >
      <div className="flex min-w-0 items-start justify-between gap-3 border-b border-black/10 p-4 min-[360px]:p-5 sm:p-6 lg:px-8 lg:py-7">
        <div className="flex min-w-0 items-start gap-3 min-[360px]:gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center bg-black text-white min-[360px]:size-11">
            <UserRound aria-hidden="true" size={19} />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-(--kfa-red)">
              {isEditing ? "Editar competidor" : "Nuevo competidor"}
            </p>

            <h4 className="mt-1 wrap-break-word font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-none min-[360px]:text-3xl sm:text-4xl">
              {isEditing ? "Actualiza los datos" : "Datos del competidor"}
            </h4>

            <p className="mt-2 max-w-2xl text-xs leading-5 text-black/55 min-[360px]:text-sm min-[360px]:leading-6">
              {isEditing
                ? "Modifica la información necesaria. La clasificación será actualizada por el sistema cuando corresponda."
                : "Registra los datos personales, técnicos y las modalidades en las que participará."}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          aria-label="Cerrar formulario"
          className="flex size-10 shrink-0 cursor-pointer items-center justify-center border border-black/10 text-black/50 transition-colors hover:border-black/30 hover:text-black disabled:cursor-not-allowed disabled:opacity-50 min-[360px]:size-11"
        >
          <X aria-hidden="true" size={18} />
        </button>
      </div>

      {formError && (
        <div
          role="alert"
          className="mx-4 mt-5 flex min-w-0 items-start gap-3 border-l-4 border-(--kfa-red) bg-(--kfa-red)/5 p-4 min-[360px]:mx-5 sm:mx-6 lg:mx-8"
        >
          <AlertCircle
            aria-hidden="true"
            size={18}
            className="mt-0.5 shrink-0 text-(--kfa-red)"
          />

          <p className="min-w-0 wrap-break-word text-sm leading-6 text-black/65">
            {formError}
          </p>
        </div>
      )}

      <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="min-w-0 p-4 min-[360px]:p-5 sm:p-6 lg:border-r lg:border-black/10 lg:p-8 xl:p-9">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-7 shrink-0 items-center justify-center bg-black text-[9px] font-bold text-white">
              01
            </span>

            <h5 className="min-w-0 wrap-break-word font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase sm:text-2xl">
              Información personal
            </h5>
          </div>

          <div className="mt-6 grid min-w-0 grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2">
            <div className="min-w-0 sm:col-span-2">
              <label htmlFor="fullName" className={labelClassName}>
                Nombre completo *
              </label>

              <input
                id="fullName"
                type="text"
                autoComplete="name"
                {...register("fullName")}
                aria-invalid={Boolean(errors.fullName)}
                className={inputClassName}
                placeholder="Nombre completo del competidor"
              />

              {errors.fullName && (
                <p className={errorClassName}>{errors.fullName.message}</p>
              )}
            </div>

            <div className="min-w-0">
              <label htmlFor="birthDate" className={labelClassName}>
                Fecha de nacimiento *
              </label>

              <input
                id="birthDate"
                type="date"
                {...register("birthDate")}
                aria-invalid={Boolean(errors.birthDate)}
                className={inputClassName}
              />

              {errors.birthDate && (
                <p className={errorClassName}>{errors.birthDate.message}</p>
              )}

              {ageAtEvent !== null && (
                <p
                  className={
                    isMinor
                      ? "mt-2 text-xs font-semibold leading-5 text-(--kfa-blue)"
                      : "mt-2 text-xs leading-5 text-black/45"
                  }
                >
                  Edad al evento: {ageAtEvent}{" "}
                  {ageAtEvent === 1 ? "año" : "años"}
                </p>
              )}
            </div>

            <div className="min-w-0">
              <label htmlFor="sex" className={labelClassName}>
                Sexo
                {participatesKumite ? " *" : ""}
              </label>

              <select
                id="sex"
                {...register("sex")}
                aria-invalid={Boolean(errors.sex)}
                className={inputClassName}
              >
                <option value="">Seleccionar</option>

                <option value="male">Masculino</option>

                <option value="female">Femenino</option>
              </select>

              {errors.sex && (
                <p className={errorClassName}>{errors.sex.message}</p>
              )}
            </div>

            <div className="min-w-0">
              <label htmlFor="heightCm" className={labelClassName}>
                Estatura (cm) *
              </label>

              <input
                id="heightCm"
                type="number"
                inputMode="decimal"
                min="1"
                step="0.1"
                {...register("heightCm", {
                  valueAsNumber: true,
                })}
                aria-invalid={Boolean(errors.heightCm)}
                className={inputClassName}
                placeholder="Ej. 173"
              />

              {errors.heightCm && (
                <p className={errorClassName}>{errors.heightCm.message}</p>
              )}
            </div>

            <div className="min-w-0">
              <label htmlFor="weightKg" className={labelClassName}>
                Peso (kg) *
              </label>

              <input
                id="weightKg"
                type="number"
                inputMode="decimal"
                min="1"
                step="0.1"
                {...register("weightKg", {
                  valueAsNumber: true,
                })}
                aria-invalid={Boolean(errors.weightKg)}
                className={inputClassName}
                placeholder="Ej. 80"
              />

              {errors.weightKg && (
                <p className={errorClassName}>{errors.weightKg.message}</p>
              )}
            </div>
          </div>

          {isMinor && (
            <div className="mt-6 min-w-0 border-l-4 border-(--kfa-blue) bg-(--kfa-blue)/5 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-(--kfa-blue)">
                Competidor menor de edad
              </p>

              <p className="mt-2 text-xs leading-5 text-black/60">
                Será obligatorio registrar un padre, madre o acudiente antes de
                completar la inscripción.
              </p>
            </div>
          )}
        </section>

        <section className="min-w-0 border-t border-black/10 p-4 min-[360px]:p-5 sm:p-6 lg:border-t-0 lg:p-8 xl:p-9">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-7 shrink-0 items-center justify-center bg-(--kfa-blue) text-[9px] font-bold text-white">
              02
            </span>

            <h5 className="min-w-0 wrap-break-word font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase sm:text-2xl">
              Información técnica
            </h5>
          </div>

          <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-[0.7fr_1.3fr]">
            <div className="min-w-0">
              <label htmlFor="gradeCode" className={labelClassName}>
                Grado actual *
              </label>

              <select
                id="gradeCode"
                {...register("gradeCode")}
                aria-invalid={Boolean(errors.gradeCode)}
                className={inputClassName}
              >
                {competitorGradeOptions.map((grade) => (
                  <option key={grade.value} value={grade.value}>
                    {grade.label}
                  </option>
                ))}
              </select>

              {errors.gradeCode && (
                <p className={errorClassName}>{errors.gradeCode.message}</p>
              )}
            </div>

            <div className="min-w-0">
              <p className={labelClassName}>Modalidades *</p>

              <div className="grid min-w-0 grid-cols-1 gap-3 min-[360px]:grid-cols-2">
                {[
                  {
                    value: "kata" as const,
                    label: "Kata",
                    description: "Formas y técnica.",
                  },
                  {
                    value: "kumite" as const,
                    label: "Kumite",
                    description: "Combate.",
                  },
                ].map((option) => {
                  const selected = modalities.includes(option.value);

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => toggleModality(option.value)}
                      className={
                        selected
                          ? "flex min-h-20 min-w-0 cursor-pointer items-start justify-between gap-3 border-2 border-(--kfa-red) bg-(--kfa-red)/5 p-3.5 text-left"
                          : "flex min-h-20 min-w-0 cursor-pointer items-start justify-between gap-3 border border-black/15 p-3.5 text-left transition-colors hover:border-black/35"
                      }
                    >
                      <div className="min-w-0">
                        <div className="flex min-w-0 items-center gap-2">
                          {option.value === "kata" ? (
                            <Sword
                              aria-hidden="true"
                              size={16}
                              className={
                                selected
                                  ? "shrink-0 text-(--kfa-red)"
                                  : "shrink-0 text-black/40"
                              }
                            />
                          ) : (
                            <Swords
                              aria-hidden="true"
                              size={16}
                              className={
                                selected
                                  ? "shrink-0 text-(--kfa-red)"
                                  : "shrink-0 text-black/40"
                              }
                            />
                          )}

                          <span className="min-w-0 text-[10px] font-bold uppercase tracking-[0.12em]">
                            {option.label}
                          </span>
                        </div>

                        <p className="mt-1.5 text-[11px] leading-4 text-black/45">
                          {option.description}
                        </p>
                      </div>

                      <span
                        className={
                          selected
                            ? "flex size-5 shrink-0 items-center justify-center bg-(--kfa-red) text-white"
                            : "size-5 shrink-0 border border-black/15"
                        }
                      >
                        {selected && <Check aria-hidden="true" size={12} />}
                      </span>
                    </button>
                  );
                })}
              </div>

              {errors.modalities && (
                <p className={errorClassName}>{errors.modalities.message}</p>
              )}
            </div>
          </div>

          {participatesKumite && (
            <div className="mt-7 min-w-0 border-t border-black/10 pt-6">
              <p className={labelClassName}>Experiencia en Kumite *</p>

              <div className="mt-3 grid min-w-0 grid-cols-1 gap-2.5 xl:grid-cols-3">
                {kumiteExperienceOptions.map((option) => {
                  const isOpenDisabled = isMinor && option.value === "open";

                  const isDebutantDisabled =
                    !debutantAllowed && option.value === "debutant";

                  const isDisabled = isOpenDisabled || isDebutantDisabled;

                  return (
                    <label
                      key={option.value}
                      className={
                        isDisabled
                          ? "flex min-h-24 min-w-0 cursor-not-allowed items-start gap-3 border border-black/10 bg-black/[0.025] p-3.5 opacity-45 xl:min-h-28"
                          : "flex min-h-24 min-w-0 cursor-pointer items-start gap-3 border border-black/15 p-3.5 transition-colors has-checked:border-(--kfa-blue) has-checked:bg-(--kfa-blue)/5 xl:min-h-28"
                      }
                    >
                      <input
                        type="radio"
                        value={option.value}
                        disabled={isDisabled}
                        {...register("kumiteExperienceLevel")}
                        className="mt-1 size-4 shrink-0 accent-(--kfa-blue)"
                      />

                      <span className="min-w-0">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.12em]">
                          {option.label}
                        </span>

                        <span className="mt-1.5 block text-[11px] leading-4 text-black/55">
                          {option.description}
                        </span>

                        {isOpenDisabled && (
                          <span className="mt-1.5 block text-[11px] font-semibold leading-4 text-(--kfa-red)">
                            No disponible para menores.
                          </span>
                        )}

                        {isDebutantDisabled && (
                          <span className="mt-1.5 block text-[11px] font-semibold leading-4 text-(--kfa-red)">
                            Disponible únicamente hasta cinturón amarillo.
                          </span>
                        )}
                      </span>
                    </label>
                  );
                })}
              </div>

              {errors.kumiteExperienceLevel && (
                <p className={errorClassName}>
                  {errors.kumiteExperienceLevel.message}
                </p>
              )}
            </div>
          )}
        </section>
      </div>

      <section className="min-w-0 border-t border-black/10 bg-(--kfa-blue)/[0.025] p-4 min-[360px]:p-5 sm:p-6 lg:px-8 lg:py-7">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-7 shrink-0 items-center justify-center bg-(--kfa-red) text-[9px] font-bold text-white">
            03
          </span>

          <div className="min-w-0">
            <h5 className="wrap-break-word font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase sm:text-2xl">
              Información adicional
            </h5>

            <p className="mt-1 text-xs text-black/45">
              Salud y contacto del participante.
            </p>
          </div>
        </div>

        <div className="mt-6 grid min-w-0 grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="min-w-0">
            <label htmlFor="healthProvider" className={labelClassName}>
              Entidad de salud *
            </label>

            <input
              id="healthProvider"
              type="text"
              {...register("healthProvider")}
              aria-invalid={Boolean(errors.healthProvider)}
              className={inputClassName}
              placeholder="Ej. Sanitas"
            />

            {errors.healthProvider && (
              <p className={errorClassName}>{errors.healthProvider.message}</p>
            )}
          </div>

          <div className="min-w-0">
            <label htmlFor="email" className={labelClassName}>
              Correo del competidor
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              aria-invalid={Boolean(errors.email)}
              className={inputClassName}
              placeholder="correo@ejemplo.com"
            />

            {errors.email && (
              <p className={errorClassName}>{errors.email.message}</p>
            )}
          </div>

          <div className="min-w-0">
            <label htmlFor="guardianName" className={labelClassName}>
              Padre, madre o acudiente
              {isMinor ? " *" : ""}
            </label>

            <input
              id="guardianName"
              type="text"
              {...register("guardianName")}
              aria-invalid={Boolean(errors.guardianName)}
              className={inputClassName}
              placeholder={
                isMinor
                  ? "Nombre completo del acudiente"
                  : "Opcional para mayores de edad"
              }
            />

            {errors.guardianName && (
              <p className={errorClassName}>{errors.guardianName.message}</p>
            )}

            {isMinor && (
              <p className="mt-2 text-xs font-semibold leading-5 text-(--kfa-red)">
                Obligatorio para menores de 18 años.
              </p>
            )}
          </div>
        </div>
      </section>

      <div className="flex min-w-0 flex-col-reverse gap-3 border-t border-black/10 bg-white p-4 min-[360px]:p-5 sm:flex-row sm:justify-end sm:p-6 lg:px-8">
        <button
          type="button"
          onClick={onCancel}
          disabled={isSubmitting}
          className="min-h-12 cursor-pointer border border-black/15 px-6 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancelar
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 bg-(--kfa-blue) px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-(--kfa-blue-dark) disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle
                aria-hidden="true"
                size={16}
                className="animate-spin"
              />

              {isEditing ? "Guardando..." : "Registrando..."}
            </>
          ) : isEditing ? (
            <>
              <Save aria-hidden="true" size={16} />
              Guardar cambios
            </>
          ) : (
            <>
              <Check aria-hidden="true" size={16} />
              Registrar competidor
            </>
          )}
        </button>
      </div>
    </form>
  );
}
