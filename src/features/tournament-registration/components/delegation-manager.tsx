"use client";

import {
  AlertCircle,
  LoaderCircle,
  Plus,
  ShieldAlert,
  Trophy,
  UserRound,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { CompetitorForm } from "./competitor-form";
import { GradeBelt } from "./grade-belt";

import { useCompetitors } from "@/features/tournament-registration/hooks/use-competitors";

import type {
  CompetitorMutationResponse,
  DelegationManagerProps,
} from "@/utils/types";

export function DelegationManager({
  slug,
  session,
  onInvalidSession,
}: DelegationManagerProps) {
  const [isCreatingCompetitor, setIsCreatingCompetitor] = useState(false);

  const managerTopRef = useRef<HTMLDivElement>(null);

  const shouldRestoreScrollRef = useRef(false);

  const competitorsQuery = useCompetitors(slug, session);

  const error = competitorsQuery.error;

  const competitors = competitorsQuery.data ?? [];

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
    if (isCreatingCompetitor || !shouldRestoreScrollRef.current) {
      return;
    }

    shouldRestoreScrollRef.current = false;

    requestAnimationFrame(() => {
      managerTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [isCreatingCompetitor]);

  async function handleCompetitorCreated(
    _competitor: CompetitorMutationResponse,
  ) {
    await competitorsQuery.refetch();

    shouldRestoreScrollRef.current = true;

    setIsCreatingCompetitor(false);
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

        {!isCreatingCompetitor && (
          <button
            type="button"
            onClick={() => setIsCreatingCompetitor(true)}
            className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 bg-(--kfa-blue) px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-(--kfa-blue-dark) sm:w-auto"
          >
            <Plus aria-hidden="true" size={16} />
            Agregar competidor
          </button>
        )}
      </div>

      {isCreatingCompetitor && (
        <CompetitorForm
          slug={slug}
          session={session}
          onCreated={handleCompetitorCreated}
          onCancel={() => setIsCreatingCompetitor(false)}
        />
      )}

      {!isCreatingCompetitor && competitors.length === 0 && (
        <div className="border border-dashed border-black/20 bg-white px-6 py-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:px-8 lg:py-16">
          <UserRound
            aria-hidden="true"
            size={32}
            className="mx-auto text-(--kfa-blue)/35"
          />

          <h5 className="mt-4 font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase sm:text-3xl">
            Aún no hay competidores
          </h5>

          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-black/55">
            Agrega el primer competidor de tu delegación para comenzar su
            inscripción al torneo.
          </p>

          <button
            type="button"
            onClick={() => setIsCreatingCompetitor(true)}
            className="mt-6 inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 bg-(--kfa-blue) px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-(--kfa-blue-dark)"
          >
            <Plus aria-hidden="true" size={16} />
            Agregar competidor
          </button>
        </div>
      )}

      {!isCreatingCompetitor && competitors.length > 0 && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {competitors.map((competitor) => (
            <article
              key={competitor.id}
              className="group flex min-w-0 flex-col overflow-hidden border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.045)] transition-all hover:-translate-y-0.5 hover:border-(--kfa-blue)/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="h-1 bg-linear-to-r from-(--kfa-blue) via-(--kfa-blue-light) to-(--kfa-red)" />

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-wrap items-center gap-3">
                    <span className="inline-flex min-h-7 shrink-0 items-center bg-black px-2.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                      #{competitor.registrationNumber}
                    </span>

                    {competitor.grade && (
                      <GradeBelt
                        code={competitor.grade.code}
                        name={competitor.grade.name}
                      />
                    )}
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      className="min-h-10 cursor-pointer border border-black/15 bg-white px-4 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors hover:border-(--kfa-blue) hover:bg-(--kfa-blue) hover:text-white"
                    >
                      Editar
                    </button>

                    <button
                      type="button"
                      className="min-h-10 cursor-pointer px-3 text-[10px] font-bold uppercase tracking-[0.12em] text-(--kfa-red) transition-colors hover:bg-(--kfa-red)/5"
                    >
                      Retirar
                    </button>
                  </div>
                </div>

                <div className="mt-5 min-w-0">
                  <h5 className="wrap-break-word font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-[0.95] sm:text-3xl">
                    {competitor.fullName}
                  </h5>

                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-xs text-black/55">
                    <span>{competitor.weightKg} kg</span>

                    <span className="text-black/20">/</span>

                    <span>{competitor.heightCm} cm</span>

                    <span className="text-black/20">/</span>

                    <span>{competitor.birthDate}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-3 border-t border-black/10 pt-5">
                  {competitor.entries.map((entry) => (
                    <div
                      key={entry.id}
                      className="relative overflow-hidden border border-(--kfa-blue)/10 bg-(--kfa-blue)/[0.035] p-4"
                    >
                      <div className="absolute inset-y-0 left-0 w-1 bg-(--kfa-blue)" />

                      <div className="flex flex-col gap-3 pl-2 xl:flex-row xl:items-center xl:justify-between">
                        <div className="flex min-w-0 items-start gap-3">
                          <div className="flex size-8 shrink-0 items-center justify-center bg-(--kfa-blue)/10 text-(--kfa-blue)">
                            <Trophy aria-hidden="true" size={16} />
                          </div>

                          <div className="min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--kfa-blue-dark)">
                              {entry.modality === "kata" ? "Kata" : "Kumite"}
                            </p>

                            <p className="mt-1 text-sm leading-5 text-black/65">
                              {entry.category?.name ?? "Categoría pendiente"}
                            </p>
                          </div>
                        </div>

                        <span
                          className={
                            entry.classificationStatus === "classified"
                              ? "inline-flex min-h-7 w-fit shrink-0 items-center bg-(--kfa-blue)/10 px-2.5 text-[9px] font-bold uppercase tracking-[0.1em] text-(--kfa-blue)"
                              : "inline-flex min-h-7 w-fit shrink-0 items-center bg-(--kfa-red)/10 px-2.5 text-[9px] font-bold uppercase tracking-[0.1em] text-(--kfa-red)"
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
          ))}
        </div>
      )}
    </div>
  );
}
