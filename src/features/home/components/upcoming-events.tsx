import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { cn } from "@/utils/cn";

import type { UpcomingEventsProps } from "@/utils/types";

const accentClasses = {
  red: "border-t-[var(--kfa-red)]",
  blue: "border-t-[var(--kfa-blue)]",
};

export function UpcomingEvents({ events }: UpcomingEventsProps) {
  return (
    <section className="bg-white py-16 text-black sm:py-20 lg:py-24">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--kfa-red)]" />

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/60 sm:text-xs">
              Próximos eventos KFA / KWU SENSHI
            </p>
          </div>

          <h2 className="mt-5 text-5xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Agenda
            <br />
            <span className="text-[var(--kfa-red)]">2026.</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-black/65 sm:text-base">
            Conoce los próximos espacios de competencia, formación técnica y
            comunidad marcial.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.id}
              className={cn(
                "flex min-h-56 flex-col border-t-4 bg-black p-6 text-white",
                accentClasses[event.accent],
              )}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
                {event.dateLabel}
              </span>

              <h3 className="mt-4 text-3xl font-black uppercase leading-none">
                {event.title}
              </h3>

              <p className="mt-4 text-xs leading-6 text-white/60">
                {event.location}
              </p>

              <Link
                href={event.actionHref}
                className="mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-xs font-bold uppercase tracking-[0.12em] transition-colors hover:text-[var(--kfa-blue-light)]"
              >
                {event.actionLabel}

                <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
