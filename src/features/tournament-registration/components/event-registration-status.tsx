"use client";

import { CalendarDays, MapPin } from "lucide-react";

import { useEvent } from "@/features/tournament-registration/hooks/use-event";
import { COLOMBIA_OPEN_SLUG } from "@/features/tournament-registration/constants/tournament.constants";

export function EventRegistrationStatus() {
  const { data: event, isLoading, isError } = useEvent(COLOMBIA_OPEN_SLUG);

  if (isLoading) {
    return (
      <div className="space-y-3 border-t border-black/10 pt-6">
        <div className="h-4 w-32 animate-pulse bg-black/10" />
        <div className="h-4 w-52 animate-pulse bg-black/10" />
        <div className="h-4 w-40 animate-pulse bg-black/10" />
      </div>
    );
  }

  if (isError || !event) {
    return (
      <div className="border-l-2 border-(--kfa-red) pl-4">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-(--kfa-red)">
          Información no disponible
        </p>

        <p className="mt-2 text-sm leading-6 text-black/60">
          No pudimos consultar el estado actual del evento.
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-black/10 pt-6">
      <div className="flex flex-wrap gap-x-6 gap-y-3">
        <div className="flex items-center gap-2 text-sm text-black/65">
          <CalendarDays aria-hidden="true" size={16} />

          <span>{event.event_date}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-black/65">
          <MapPin aria-hidden="true" size={16} />

          <span>
            {event.venue_name}, {event.city}
          </span>
        </div>
      </div>

      <div className="mt-5">
        {event.registration_enabled ? (
          <span className="inline-flex bg-black px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
            Inscripciones habilitadas
          </span>
        ) : (
          <span className="inline-flex border border-(--kfa-red) px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-(--kfa-red)">
            Inscripciones no disponibles
          </span>
        )}
      </div>
    </div>
  );
}
