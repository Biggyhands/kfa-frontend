"use client";

import { LoaderCircle, ShieldCheck, Users } from "lucide-react";

import { DelegationForm } from "./delegation-form";
import { DelegationManager } from "./delegation-manager";

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
      <div className="flex min-h-80 items-center justify-center bg-white p-8 text-black">
        <div className="flex flex-col items-center text-center">
          <LoaderCircle
            aria-hidden="true"
            size={28}
            className="animate-spin text-(--kfa-blue)"
          />

          <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-black/60">
            Verificando sesión
          </p>
        </div>
      </div>
    );
  }

  if (!session) {
    return <DelegationForm slug={slug} onSuccess={handleDelegationCreated} />;
  }

  return (
    <div className="bg-white p-6 text-black shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:p-8 lg:p-10 xl:p-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center bg-(--kfa-blue) text-white">
            <ShieldCheck aria-hidden="true" size={20} />
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-(--kfa-red)">
              Paso 02
            </p>

            <h3 className="mt-1 font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase leading-none tracking-[-0.02em] sm:text-4xl">
              Gestiona tus competidores
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-black/60">
              La delegación ya está registrada. Ahora puedes agregar, consultar
              y administrar los competidores asociados.
            </p>
          </div>
        </div>

        <div className="border-y border-black/10 py-6">
          <div className="flex items-start gap-3">
            <Users
              aria-hidden="true"
              size={18}
              className="mt-0.5 shrink-0 text-(--kfa-blue)"
            />

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em]">
                Sesión de gestión activa
              </p>

              <p className="mt-2 text-sm leading-6 text-black/60">
                Puedes continuar administrando los competidores de esta
                delegación durante esta sesión.
              </p>
            </div>
          </div>
        </div>

        <DelegationManager
          slug={slug}
          session={session}
          onInvalidSession={clearSession}
        />

        <div className="border-t border-black/10 pt-6">
          <button
            type="button"
            onClick={clearSession}
            className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.14em] text-black/45 underline-offset-4 transition-colors hover:text-(--kfa-red) hover:underline"
          >
            Cerrar sesión de gestión
          </button>
        </div>
      </div>
    </div>
  );
}
