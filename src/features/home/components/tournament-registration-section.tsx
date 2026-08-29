import { ShieldCheck, Trophy } from "lucide-react";

import { Container } from "@/components/ui/container";

import { EventRegistrationSummary } from "@/features/tournament-registration/components/event-registration-summary";
import { TournamentRegistrationFlow } from "@/features/tournament-registration/components/tournament-registration-flow";
import { COLOMBIA_OPEN_SLUG } from "@/features/tournament-registration/constants/tournament.constants";

export function TournamentRegistrationSection() {
  return (
    <section
      id="inscripcion-colombia-open"
      className="scroll-mt-24 bg-white py-16 text-black sm:py-20 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden border border-black/10 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.07)]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-(--kfa-blue) via-(--kfa-blue-light) to-(--kfa-red)"
            />

            <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_0.85fr]">
              <div className="relative p-6 sm:p-8 lg:p-10 xl:p-12">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center bg-(--kfa-red) text-white">
                    <Trophy aria-hidden="true" size={18} />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--kfa-red)">
                    Colombia Open 2026
                  </p>
                </div>

                <h2 className="mt-6 max-w-4xl font-[family-name:var(--font-barlow-condensed)] text-4xl font-black uppercase leading-[0.9] tracking-[-0.035em] sm:text-5xl lg:text-6xl xl:text-7xl">
                  Inscripción de delegaciones y competidores
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60 sm:text-base">
                  Registra tu delegación y administra los competidores que
                  participarán en el Colombia Open 2026.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/10 pt-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      aria-hidden="true"
                      size={16}
                      className="text-(--kfa-blue)"
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/50">
                      Gestión segura
                    </span>
                  </div>

                  <div className="h-3 w-px bg-black/15" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/50">
                    Delegaciones
                  </span>

                  <div className="h-3 w-px bg-black/15" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/50">
                    Competidores
                  </span>
                </div>
              </div>

              <div className="border-t border-black/10 bg-(--kfa-blue)/[0.045] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10 xl:p-12">
                <EventRegistrationSummary slug={COLOMBIA_OPEN_SLUG} />
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-10">
            <div
              aria-hidden="true"
              className="absolute -left-3 top-0 hidden h-16 w-1 bg-(--kfa-red) lg:block"
            />

            <TournamentRegistrationFlow slug={COLOMBIA_OPEN_SLUG} />
          </div>
        </div>
      </Container>
    </section>
  );
}
