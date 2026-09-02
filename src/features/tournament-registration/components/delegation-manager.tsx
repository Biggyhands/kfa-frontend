"use client";

import { useMutation } from "@tanstack/react-query";
import {
  AlertCircle,
  CheckCircle2,
  LoaderCircle,
  Plus,
  ShieldAlert,
  Trash2,
  Trophy,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { CompetitorForm } from "./competitor-form";
import { GradeBelt } from "./grade-belt";

import { useCompetitors } from "@/features/tournament-registration/hooks/use-competitors";
import { useEvent } from "@/features/tournament-registration/hooks/use-event";
import { deleteCompetitor } from "@/lib/api/competitors";

import type {
  ApiError,
  Competitor,
  DelegationManagerProps,
} from "@/utils/types";

function wait(milliseconds: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });
}

export function DelegationManager({
  slug,
  session,
  onInvalidSession,
}: DelegationManagerProps) {
  const [isCreatingCompetitor, setIsCreatingCompetitor] = useState(false);

  const [editingCompetitor, setEditingCompetitor] = useState<Competitor | null>(
    null,
  );

  const [competitorPendingRemoval, setCompetitorPendingRemoval] =
    useState<Competitor | null>(null);

  const [removalError, setRemovalError] = useState<string | null>(null);

  const [removalSucceededId, setRemovalSucceededId] = useState<string | null>(
    null,
  );

  const [removingCompetitorId, setRemovingCompetitorId] = useState<
    string | null
  >(null);

  const managerTopRef = useRef<HTMLDivElement>(null);

  const shouldRestoreScrollRef = useRef(false);

  const eventQuery = useEvent(slug);

  const competitorsQuery = useCompetitors(slug, session);

  const error = competitorsQuery.error;

  const competitors = competitorsQuery.data ?? [];

  const registrationsAvailable =
    eventQuery.data?.status === "published" &&
    eventQuery.data.registration_enabled === true;

  const isFormOpen =
    registrationsAvailable &&
    (isCreatingCompetitor || editingCompetitor !== null);
  const deleteCompetitorMutation = useMutation({
    mutationFn: (competitorId: string) =>
      deleteCompetitor(slug, session.delegationId, competitorId, session.token),

    onSuccess: async (_result, competitorId) => {
      setRemovalError(null);

      setRemovalSucceededId(competitorId);

      await wait(450);

      setRemovingCompetitorId(competitorId);

      await wait(280);

      await competitorsQuery.refetch();

      setCompetitorPendingRemoval(null);

      setRemovalSucceededId(null);

      setRemovingCompetitorId(null);
    },

    onError: (mutationError: ApiError) => {
      if (
        mutationError.code === "INVALID_DELEGATION_TOKEN" ||
        mutationError.code === "DELEGATION_TOKEN_REQUIRED"
      ) {
        onInvalidSession();

        return;
      }

      if (mutationError.code === "COMPETITOR_NOT_FOUND") {
        setRemovalError(
          "Este competidor ya no se encuentra disponible. Actualizaremos el listado.",
        );

        void competitorsQuery.refetch();

        return;
      }

      if (
        mutationError.code === "REGISTRATION_CLOSED" ||
        mutationError.code === "REGISTRATION_NOT_AVAILABLE"
      ) {
        setRemovalError(
          "Las inscripciones del evento ya no están disponibles.",
        );

        return;
      }

      if (mutationError.code === "TOO_MANY_REQUESTS") {
        setRemovalError(
          "Se han realizado demasiadas solicitudes. Espera unos minutos antes de intentarlo nuevamente.",
        );

        return;
      }

      setRemovalError(
        "No fue posible retirar al competidor. Intenta nuevamente.",
      );
    },
  });

  useEffect(() => {
    if (!error) {
      return;
    }

    if (
      error.code === "INVALID_DELEGATION_TOKEN" ||
      error.code === "DELEGATION_TOKEN_REQUIRED"
    ) {
      onInvalidSession();
    }
  }, [error, onInvalidSession]);

  useEffect(() => {
    if (isFormOpen || !shouldRestoreScrollRef.current) {
      return;
    }

    shouldRestoreScrollRef.current = false;

    requestAnimationFrame(() => {
      managerTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [isFormOpen]);

  function openCreateForm() {
    if (!registrationsAvailable) {
      return;
    }

    setEditingCompetitor(null);

    setCompetitorPendingRemoval(null);

    setRemovalError(null);

    setRemovalSucceededId(null);

    setRemovingCompetitorId(null);

    setIsCreatingCompetitor(true);

    requestAnimationFrame(() => {
      managerTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  function openEditForm(competitor: Competitor) {
    if (!registrationsAvailable) {
      return;
    }

    setIsCreatingCompetitor(false);

    setCompetitorPendingRemoval(null);

    setRemovalError(null);

    setRemovalSucceededId(null);

    setRemovingCompetitorId(null);

    setEditingCompetitor(competitor);

    requestAnimationFrame(() => {
      managerTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  function closeForm() {
    setIsCreatingCompetitor(false);

    setEditingCompetitor(null);
  }

  function openRemoveConfirmation(competitor: Competitor) {
    if (!registrationsAvailable) {
      return;
    }

    setRemovalError(null);

    setRemovalSucceededId(null);

    setRemovingCompetitorId(null);

    setCompetitorPendingRemoval(competitor);
  }

  function closeRemoveConfirmation() {
    if (
      deleteCompetitorMutation.isPending ||
      removalSucceededId !== null ||
      removingCompetitorId !== null
    ) {
      return;
    }

    setRemovalError(null);

    setCompetitorPendingRemoval(null);
  }

  function confirmRemoveCompetitor() {
    if (!registrationsAvailable || !competitorPendingRemoval) {
      return;
    }

    setRemovalError(null);

    deleteCompetitorMutation.mutate(competitorPendingRemoval.id);
  }

  async function handleCompetitorCreated() {
    await competitorsQuery.refetch();

    shouldRestoreScrollRef.current = true;

    closeForm();
  }

  async function handleCompetitorUpdated() {
    await competitorsQuery.refetch();

    shouldRestoreScrollRef.current = true;

    closeForm();
  }

  if (competitorsQuery.isPending) {
    return (
      <div className="border border-black/10 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.05)] sm:p-8">
        <div className="flex items-center gap-3">
          <LoaderCircle
            aria-hidden="true"
            size={20}
            className="animate-spin text-(--kfa-blue)"
          />

          <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/60">
            Cargando competidores
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    if (
      error.code === "INVALID_DELEGATION_TOKEN" ||
      error.code === "DELEGATION_TOKEN_REQUIRED"
    ) {
      return (
        <div className="border-l-4 border-(--kfa-red) bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="flex items-start gap-3">
            <ShieldAlert
              aria-hidden="true"
              size={19}
              className="mt-0.5 shrink-0 text-(--kfa-red)"
            />

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.08em]">
                Sesión de gestión no válida
              </p>

              <p className="mt-2 text-sm leading-6 text-black/60">
                El enlace o la sesión de gestión ya no es válido. Utiliza el
                enlace enviado por correo para volver a ingresar.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (error.code === "TOO_MANY_REQUESTS") {
      return (
        <div className="border-l-4 border-(--kfa-red) bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <div className="flex items-start gap-3">
            <AlertCircle
              aria-hidden="true"
              size={19}
              className="mt-0.5 shrink-0 text-(--kfa-red)"
            />

            <p className="text-sm leading-6 text-black/60">
              Se han realizado demasiadas solicitudes. Espera unos minutos e
              intenta nuevamente.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="border-l-4 border-(--kfa-red) bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="flex items-start gap-3">
          <AlertCircle
            aria-hidden="true"
            size={19}
            className="mt-0.5 shrink-0 text-(--kfa-red)"
          />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.08em]">
              No fue posible cargar los competidores
            </p>

            <p className="mt-2 text-sm text-black/55">Código: {error.code}</p>

            <button
              type="button"
              onClick={() => competitorsQuery.refetch()}
              className="mt-3 cursor-pointer text-xs font-bold uppercase tracking-[0.12em] text-(--kfa-blue) underline-offset-4 hover:underline"
            >
              Intentar nuevamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={managerTopRef} className="scroll-mt-28 space-y-6">
      <div className="flex flex-col gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Users aria-hidden="true" size={18} className="text-(--kfa-blue)" />

            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/50">
              Delegación
            </p>
          </div>

          <h4 className="mt-2 font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase leading-none sm:text-4xl">
            Competidores inscritos
          </h4>

          <p className="mt-2 text-sm text-black/55">
            {competitors.length === 1
              ? "1 competidor registrado"
              : `${competitors.length} competidores registrados`}
          </p>
        </div>

        {!isFormOpen && (
          <button
            type="button"
            onClick={openCreateForm}
            disabled={!registrationsAvailable}
            className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 bg-(--kfa-blue) px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-(--kfa-blue-dark) disabled:cursor-not-allowed disabled:bg-black/10 disabled:text-black/35 sm:w-auto"
          >
            <Plus aria-hidden="true" size={16} />

            {registrationsAvailable
              ? "Agregar competidor"
              : "Inscripciones cerradas"}
          </button>
        )}
      </div>

      {eventQuery.data && !registrationsAvailable && (
        <div className="border-l-4 border-(--kfa-red) bg-(--kfa-red)/5 p-4">
          <div className="flex items-start gap-3">
            <ShieldAlert
              aria-hidden="true"
              size={18}
              className="mt-0.5 shrink-0 text-(--kfa-red)"
            />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-(--kfa-red)">
                Inscripciones cerradas
              </p>

              <p className="mt-2 text-xs leading-5 text-black/60">
                Puedes consultar los competidores registrados, pero las
                modificaciones de la delegación ya no están disponibles.
              </p>
            </div>
          </div>
        </div>
      )}

      {isCreatingCompetitor && registrationsAvailable && (
        <CompetitorForm
          mode="create"
          slug={slug}
          session={session}
          onCreated={handleCompetitorCreated}
          onInvalidSession={onInvalidSession}
          onCancel={closeForm}
        />
      )}

      {editingCompetitor !== null && registrationsAvailable && (
        <CompetitorForm
          mode="edit"
          slug={slug}
          session={session}
          competitor={editingCompetitor}
          onUpdated={handleCompetitorUpdated}
          onInvalidSession={onInvalidSession}
          onCancel={closeForm}
        />
      )}

      {!isFormOpen && competitors.length === 0 && (
        <div className="border border-dashed border-black/20 bg-white px-5 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:px-8 lg:py-16">
          <UserRound
            aria-hidden="true"
            size={32}
            className="mx-auto text-(--kfa-blue)/35"
          />

          <h5 className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase sm:text-3xl">
            Aún no hay competidores
          </h5>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-black/55">
            {registrationsAvailable
              ? "Agrega el primer competidor de tu delegación para comenzar su inscripción al torneo."
              : "No hay competidores registrados y las inscripciones del evento no están disponibles."}
          </p>

          <button
            type="button"
            onClick={openCreateForm}
            disabled={!registrationsAvailable}
            className="mt-6 inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 bg-(--kfa-blue) px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-(--kfa-blue-dark) disabled:cursor-not-allowed disabled:bg-black/10 disabled:text-black/35"
          >
            <Plus aria-hidden="true" size={16} />

            {registrationsAvailable
              ? "Agregar competidor"
              : "Inscripciones cerradas"}
          </button>
        </div>
      )}

      {!isFormOpen && competitors.length > 0 && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {competitors.map((competitor) => {
            const isConfirmingRemoval =
              competitorPendingRemoval?.id === competitor.id;

            const removalSucceeded = removalSucceededId === competitor.id;

            const isLeaving = removingCompetitorId === competitor.id;

            return (
              <article
                key={competitor.id}
                className={
                  isLeaving
                    ? "pointer-events-none flex min-w-0 translate-y-3 scale-[0.985] flex-col overflow-hidden border border-black/15 bg-white opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.045)] transition-[opacity,transform] duration-300 ease-out motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:transition-none"
                    : "group flex min-w-0 flex-col overflow-hidden border border-black/15 bg-white opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.045)] transition-[opacity,transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-black/25 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)] motion-reduce:transition-none"
                }
              >
                <div className="h-1 bg-linear-to-r from-(--kfa-blue) via-(--kfa-blue-light) to-(--kfa-red)" />

                <div className="flex flex-1 flex-col p-4 min-[360px]:p-5 sm:p-6">
                  <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                    <div className="min-w-0">
                      <div className="flex min-w-0 flex-wrap items-center gap-2.5">
                        <span className="inline-flex min-h-7 shrink-0 items-center bg-black px-2.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                          #{competitor.registrationNumber}
                        </span>

                        {competitor.grade && (
                          <div className="min-w-0">
                            <GradeBelt
                              code={competitor.grade.code}
                              name={competitor.grade.name}
                            />
                          </div>
                        )}
                      </div>

                      <h5 className="mt-4 wrap-break-word font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-[0.95] min-[360px]:text-3xl">
                        {competitor.fullName}
                      </h5>

                      <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[11px] text-black/55 min-[360px]:text-xs">
                        <span>{competitor.weightKg} kg</span>

                        <span aria-hidden="true" className="text-black/20">
                          /
                        </span>

                        <span>{competitor.heightCm} cm</span>

                        <span aria-hidden="true" className="text-black/20">
                          /
                        </span>

                        <span className="break-all min-[360px]:break-normal">
                          {competitor.birthDate}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:flex sm:shrink-0">
                      <button
                        type="button"
                        onClick={() => openEditForm(competitor)}
                        disabled={
                          !registrationsAvailable || isConfirmingRemoval
                        }
                        className="inline-flex min-h-11 min-w-0 cursor-pointer items-center justify-center border border-black/15 bg-white px-3 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors hover:border-(--kfa-blue) hover:bg-(--kfa-blue) hover:text-white disabled:cursor-not-allowed disabled:border-black/10 disabled:bg-black/[0.025] disabled:text-black/25 sm:min-h-10 sm:px-4 sm:tracking-[0.12em]"
                      >
                        Editar
                      </button>

                      <button
                        type="button"
                        onClick={() => openRemoveConfirmation(competitor)}
                        disabled={
                          !registrationsAvailable || isConfirmingRemoval
                        }
                        className="inline-flex min-h-11 min-w-0 cursor-pointer items-center justify-center border border-(--kfa-red)/15 px-3 text-[10px] font-bold uppercase tracking-[0.1em] text-(--kfa-red) transition-colors hover:border-(--kfa-red)/30 hover:bg-(--kfa-red)/5 disabled:cursor-not-allowed disabled:border-black/10 disabled:bg-black/[0.025] disabled:text-black/25 sm:min-h-10 sm:px-3 sm:tracking-[0.12em]"
                      >
                        Retirar
                      </button>
                    </div>
                  </div>

                  {isConfirmingRemoval && (
                    <div
                      className={
                        removalSucceeded
                          ? "mt-5 border-l-4 border-(--kfa-blue) bg-(--kfa-blue)/5 p-4 transition-colors duration-300"
                          : "mt-5 border-l-4 border-(--kfa-red) bg-(--kfa-red)/5 p-4 transition-colors duration-300"
                      }
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex min-w-0 items-start gap-3">
                          {removalSucceeded ? (
                            <CheckCircle2
                              aria-hidden="true"
                              size={19}
                              className="mt-0.5 shrink-0 text-(--kfa-blue)"
                            />
                          ) : (
                            <Trash2
                              aria-hidden="true"
                              size={18}
                              className="mt-0.5 shrink-0 text-(--kfa-red)"
                            />
                          )}

                          <div className="min-w-0">
                            {removalSucceeded ? (
                              <>
                                <p className="text-xs font-bold uppercase tracking-[0.1em] text-(--kfa-blue)">
                                  Competidor retirado
                                </p>

                                <p className="mt-2 text-xs leading-5 text-black/60">
                                  La inscripción fue retirada correctamente de
                                  la delegación.
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                                  ¿Deseas retirar a este competidor de la
                                  delegación?
                                </p>

                                <p className="mt-2 text-xs leading-5 text-black/60">
                                  La inscripción dejará de aparecer en tu
                                  delegación.
                                </p>
                              </>
                            )}
                          </div>
                        </div>

                        {!removalSucceeded && (
                          <button
                            type="button"
                            onClick={closeRemoveConfirmation}
                            disabled={deleteCompetitorMutation.isPending}
                            aria-label="Cancelar retiro"
                            className="flex size-9 shrink-0 cursor-pointer items-center justify-center text-black/45 transition-colors hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <X aria-hidden="true" size={17} />
                          </button>
                        )}
                      </div>

                      {removalError && (
                        <p
                          role="alert"
                          className="mt-3 text-xs leading-5 text-(--kfa-red)"
                        >
                          {removalError}
                        </p>
                      )}

                      {!removalSucceeded && (
                        <div className="mt-4 flex flex-col-reverse gap-2 min-[360px]:flex-row min-[360px]:justify-end">
                          <button
                            type="button"
                            onClick={closeRemoveConfirmation}
                            disabled={deleteCompetitorMutation.isPending}
                            className="min-h-11 cursor-pointer border border-black/15 bg-white px-4 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors hover:border-black disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            Cancelar
                          </button>

                          <button
                            type="button"
                            onClick={confirmRemoveCompetitor}
                            disabled={deleteCompetitorMutation.isPending}
                            className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 bg-(--kfa-red) px-4 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            {deleteCompetitorMutation.isPending ? (
                              <>
                                <LoaderCircle
                                  aria-hidden="true"
                                  size={14}
                                  className="animate-spin"
                                />
                                Retirando...
                              </>
                            ) : (
                              <>
                                <Trash2 aria-hidden="true" size={14} />
                                Confirmar retiro
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-5 space-y-3 border-t border-black/10 pt-5">
                    {competitor.entries.map((entry) => (
                      <div
                        key={entry.id}
                        className="relative min-w-0 overflow-hidden border border-(--kfa-blue)/10 bg-(--kfa-blue)/[0.035] p-3.5 min-[360px]:p-4"
                      >
                        <div className="absolute inset-y-0 left-0 w-1 bg-(--kfa-blue)" />

                        <div className="flex min-w-0 flex-col gap-3 pl-2 xl:flex-row xl:items-center xl:justify-between">
                          <div className="flex min-w-0 items-start gap-3">
                            <div className="flex size-8 shrink-0 items-center justify-center bg-(--kfa-blue)/10 text-(--kfa-blue)">
                              <Trophy aria-hidden="true" size={16} />
                            </div>

                            <div className="min-w-0">
                              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--kfa-blue-dark)">
                                {entry.modality === "kata" ? "Kata" : "Kumite"}
                              </p>

                              <p className="mt-1 wrap-break-word text-xs leading-5 text-black/65 min-[360px]:text-sm">
                                {entry.category?.name ?? "Categoría pendiente"}
                              </p>
                            </div>
                          </div>

                          <span
                            className={
                              entry.classificationStatus === "classified"
                                ? "inline-flex min-h-7 w-fit max-w-full shrink-0 items-center bg-(--kfa-blue)/10 px-2.5 text-[8px] font-bold uppercase leading-4 tracking-[0.08em] text-(--kfa-blue) min-[360px]:text-[9px] min-[360px]:tracking-[0.1em]"
                                : "inline-flex min-h-7 w-fit max-w-full shrink-0 items-center bg-(--kfa-red)/10 px-2.5 text-[8px] font-bold uppercase leading-4 tracking-[0.08em] text-(--kfa-red) min-[360px]:text-[9px] min-[360px]:tracking-[0.1em]"
                            }
                          >
                            {entry.classificationStatus === "classified"
                              ? "Clasificado automáticamente"
                              : "Pendiente de clasificación"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
