"use client";

import { LoaderCircle, ShieldCheck, Users } from "lucide-react";

import { DelegationForm } from "./delegation-form";
import { DelegationManager } from "./delegation-manager";
import { DelegationRecoveryForm } from "./delegation-recovery-form";

import { useDelegationSession } from "@/features/tournament-registration/hooks/use-delegation-session";

import type {
  DelegationSession,
  TournamentRegistrationFlowProps,
} from "@/utils/types";

export function TournamentRegistrationFlow({
  slug,
}: TournamentRegistrationFlowProps) {
  const { session, isReady, saveSession, clearSession } = useDelegationSession({
    slug,
  });

  function handleDelegationCreated(nextSession: DelegationSession) {
    saveSession(nextSession);
  }

  if (!isReady) {
    return (
      <div className="border border-black/10 bg-white p-8 text-black shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
        <div className="flex min-h-48 items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <LoaderCircle
              aria-hidden="true"
              size={28}
              className="animate-spin text-(--kfa-blue)"
            />

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-black/55">
              Verificando sesión
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-1 bg-(--kfa-blue) lg:block"
        />

        <DelegationForm slug={slug} onSuccess={handleDelegationCreated} />

        <DelegationRecoveryForm slug={slug} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-black/10 bg-white text-black shadow-[0_30px_80px_rgba(0,0,0,0.07)]">
      <div className="grid grid-cols-1 border-b border-black/10 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center bg-(--kfa-blue) text-white">
              <ShieldCheck aria-hidden="true" size={20} />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-(--kfa-red)">
                Paso 02
              </p>

              <h3 className="mt-1 font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase leading-none tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                Gestiona tus competidores
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/60">
                La delegación ya está registrada. Ahora puedes agregar,
                consultar y administrar los competidores asociados.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 bg-(--kfa-blue)/[0.04] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center bg-white text-(--kfa-blue) shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <Users aria-hidden="true" size={17} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-(--kfa-blue-dark)">
                Sesión de gestión activa
              </p>

              <p className="mt-2 text-sm leading-6 text-black/60">
                Puedes continuar administrando los competidores de esta
                delegación durante esta sesión.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <DelegationManager
          slug={slug}
          session={session}
          onInvalidSession={clearSession}
        />
      </div>

      <div className="border-t border-black/10 bg-black/[0.015] px-6 py-4 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={clearSession}
          className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.14em] text-black/45 underline-offset-4 transition-colors hover:text-(--kfa-red) hover:underline"
        >
          Cerrar sesión de gestión
        </button>
      </div>
    </div>
  );
}
