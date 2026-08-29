"use client";

import { AlertCircle, CalendarDays, LoaderCircle, MapPin } from "lucide-react";

import { useEvent } from "@/features/tournament-registration/hooks/use-event";

import type { Event, EventRegistrationSummaryProps } from "@/utils/types";

function formatEventDate(eventDate: string): string {
  const [year, month, day] = eventDate.split("-").map(Number);

  if (!year || !month || !day) {
    return eventDate;
  }

  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function getLocationLabel(event: Event): string {
  return [event.city, event.country].filter(Boolean).join(", ");
}

export function EventRegistrationSummary({
  slug,
}: EventRegistrationSummaryProps) {
  const eventQuery = useEvent(slug);

  if (eventQuery.isPending) {
    return (
      <div className="flex min-h-48 items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <LoaderCircle
            aria-hidden="true"
            size={24}
            className="animate-spin text-(--kfa-blue)"
          />

          <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.14em] text-black/45">
            Cargando evento
          </p>
        </div>
      </div>
    );
  }

  if (eventQuery.isError || !eventQuery.data) {
    return (
      <div className="border-l-4 border-(--kfa-red) bg-(--kfa-red)/5 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle
            aria-hidden="true"
            size={18}
            className="mt-0.5 shrink-0 text-(--kfa-red)"
          />

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em]">
              No fue posible cargar el evento
            </p>

            <button
              type="button"
              onClick={() => eventQuery.refetch()}
              className="mt-3 cursor-pointer text-[10px] font-bold uppercase tracking-[0.12em] text-(--kfa-blue) underline-offset-4 hover:underline"
            >
              Intentar nuevamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  const event = eventQuery.data;

  const locationLabel = getLocationLabel(event);

  const registrationsAvailable =
    event.status === "published" && event.registration_enabled;

  return (
    <div>
      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-(--kfa-blue)">
        Información del evento
      </p>

      <div className="mt-7 space-y-7">
        <div className="flex items-start gap-4">
          <div className="flex size-9 shrink-0 items-center justify-center bg-white text-(--kfa-blue) shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <CalendarDays aria-hidden="true" size={17} />
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/40">
              Fecha
            </p>

            <p className="mt-1 font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase leading-none sm:text-2xl">
              {formatEventDate(event.event_date)}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex size-9 shrink-0 items-center justify-center bg-white text-(--kfa-blue) shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <MapPin aria-hidden="true" size={17} />
          </div>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-black/40">
              Lugar
            </p>

            {locationLabel && (
              <p className="mt-1 font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase leading-none sm:text-2xl">
                {locationLabel}
              </p>
            )}

            {event.venue_name && (
              <p className="mt-2 text-xs leading-5 text-black/50">
                {event.venue_name}
              </p>
            )}

            {event.address && (
              <p className="mt-1 text-xs leading-5 text-black/40">
                {event.address}
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-(--kfa-blue)/15 pt-6">
          <span
            className={
              registrationsAvailable
                ? "inline-flex min-h-8 items-center bg-(--kfa-blue) px-4 text-[9px] font-bold uppercase tracking-[0.12em] text-white"
                : "inline-flex min-h-8 items-center bg-(--kfa-red) px-4 text-[9px] font-bold uppercase tracking-[0.12em] text-white"
            }
          >
            {registrationsAvailable
              ? "Inscripciones habilitadas"
              : "Inscripciones no disponibles"}
          </span>

          {event.registration_deadline && (
            <p className="mt-3 text-xs leading-5 text-black/45">
              Fecha límite de inscripción:{" "}
              {new Intl.DateTimeFormat("es-CO", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "America/Bogota",
              }).format(new Date(event.registration_deadline))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
