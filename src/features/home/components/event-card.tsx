import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";

import { cn } from "@/utils/cn";

import type { EventCardProps } from "@/utils/types";

const accentClasses = {
  red: {
    date: "bg-(--kfa-red)",
    marker: "bg-(--kfa-red)",
    secondaryHover: "hover:border-(--kfa-red) hover:text-(--kfa-red)",
    primaryHover: "hover:bg-(--kfa-red) hover:text-white",
  },

  blue: {
    date: "bg-(--kfa-blue)",
    marker: "bg-(--kfa-blue)",
    secondaryHover: "hover:border-(--kfa-blue) hover:text-(--kfa-blue)",
    primaryHover: "hover:bg-(--kfa-blue) hover:text-white",
  },
};

export function EventCard({ event }: EventCardProps) {
  const accent = accentClasses[event.accent];

  return (
    <article
      id={event.id}
      className="scroll-mt-28 border border-black/10 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr]">
        {/* Date */}
        <div
          className={cn(
            "flex min-h-32 items-center justify-between gap-5 px-6 py-5 text-white md:min-h-full md:flex-col md:items-start md:justify-start md:px-7 md:py-8",
            accent.date,
          )}
        >
          <span className="font-[family-name:var(--font-barlow-condensed)] text-6xl font-black leading-none sm:text-7xl">
            {event.dateDay}
          </span>

          <div className="text-right md:text-left">
            <span className="block text-sm font-black uppercase tracking-[0.16em] text-white">
              {event.dateMonth}
            </span>

            <span className="mt-1 block text-xs font-bold tracking-[0.12em] text-white/70">
              {event.dateYear}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn("size-2 shrink-0 rounded-full", accent.marker)}
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/50">
              {event.category}
            </span>
          </div>

          <h3 className="mt-5 text-4xl font-black uppercase leading-[0.9] tracking-tight text-black sm:text-5xl">
            {event.title}
          </h3>

          <div className="mt-5 flex items-start gap-2 text-black/55">
            <MapPin aria-hidden="true" size={16} className="mt-1 shrink-0" />

            <p className="text-xs leading-6 sm:text-sm">{event.location}</p>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-black/65 sm:text-base">
            {event.description}
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {event.details.map((detail) => (
              <li
                key={detail}
                className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-black/60"
              >
                <span
                  className={cn(
                    "size-1.5 shrink-0 rounded-full",
                    accent.marker,
                  )}
                />

                {detail}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={event.primaryActionHref}
              className={cn(
                "inline-flex min-h-11 w-full items-center justify-center gap-2 bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 sm:w-auto",
                accent.primaryHover,
              )}
            >
              <span className="text-white">{event.primaryActionLabel}</span>

              <ArrowUpRight
                aria-hidden="true"
                size={16}
                className="text-white"
              />
            </Link>

            {event.secondaryActionLabel && event.secondaryActionHref && (
              <Link
                href={event.secondaryActionHref}
                className={cn(
                  "inline-flex min-h-11 w-full items-center justify-center gap-2 border border-black/20 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 sm:w-auto",
                  accent.secondaryHover,
                )}
              >
                <span>{event.secondaryActionLabel}</span>

                <ArrowDownRight aria-hidden="true" size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
