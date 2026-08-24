import { CalendarDays, MapPin, Trophy } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";

import { TournamentRegistrationForm } from "./tournament-registration-form";

import type { TournamentRegistrationSectionProps } from "@/utils/types";

export function TournamentRegistrationSection({
  content,
}: TournamentRegistrationSectionProps) {
  return (
    <section
      id="inscripcion-colombia-open"
      className="scroll-mt-24 bg-white py-20 text-black sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 xl:gap-28">
          <div>
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              highlightedTitle={content.highlightedTitle}
            />

            <p className="mt-6 max-w-lg text-sm leading-7 text-black/60 sm:text-base">
              {content.description}
            </p>

            <div className="mt-10 border-t border-black/10">
              <div className="flex gap-4 border-b border-black/10 py-5">
                <Trophy
                  aria-hidden="true"
                  size={19}
                  className="shrink-0 text-(--kfa-red)"
                />

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
                    Evento
                  </span>

                  <strong className="mt-1 block text-sm">
                    {content.eventName}
                  </strong>
                </div>
              </div>

              <div className="flex gap-4 border-b border-black/10 py-5">
                <CalendarDays
                  aria-hidden="true"
                  size={19}
                  className="shrink-0 text-(--kfa-red)"
                />

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
                    Fecha
                  </span>

                  <strong className="mt-1 block text-sm">
                    {content.eventDate}
                  </strong>
                </div>
              </div>

              <div className="flex gap-4 border-b border-black/10 py-5">
                <MapPin
                  aria-hidden="true"
                  size={19}
                  className="shrink-0 text-(--kfa-red)"
                />

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
                    Lugar
                  </span>

                  <strong className="mt-1 block text-sm leading-6">
                    {content.eventLocation}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <TournamentRegistrationForm eventName={content.eventName} />
        </div>
      </Container>
    </section>
  );
}
