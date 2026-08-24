import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { cn } from "@/utils/cn";

import type { DojoCardProps } from "@/utils/types";

export function DojoCard({ dojo }: DojoCardProps) {
  const isComingSoon = dojo.status === "coming-soon";

  return (
    <article
      className={cn(
        "group relative flex min-h-[360px] flex-col overflow-hidden border p-6 sm:p-8",
        dojo.featured
          ? "border-(--kfa-red) bg-black text-white"
          : "border-black/10 bg-white text-black",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute -right-20 -top-20 size-52 rounded-full transition-transform duration-500 group-hover:scale-125",
          dojo.featured ? "bg-(--kfa-red)/10" : "bg-black/[0.03]",
        )}
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span
            className={cn(
              "text-[10px] font-bold uppercase tracking-[0.16em]",
              dojo.featured ? "text-(--kfa-red)" : "text-black/40",
            )}
          >
            {dojo.featured ? "Dojo asociado" : "Red KFA"}
          </span>

          {isComingSoon && (
            <span
              className={cn(
                "border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em]",
                dojo.featured
                  ? "border-white/20 text-white/50"
                  : "border-black/10 text-black/40",
              )}
            >
              Próximamente
            </span>
          )}
        </div>

        <h3 className="mt-8 max-w-md text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl">
          {dojo.name}
        </h3>

        <div
          className={cn(
            "mt-5 flex items-start gap-2",
            dojo.featured ? "text-white/55" : "text-black/50",
          )}
        >
          <MapPin aria-hidden="true" size={16} className="mt-0.5 shrink-0" />

          <span className="text-xs font-semibold uppercase tracking-[0.08em]">
            {dojo.city} · {dojo.country}
          </span>
        </div>

        <p
          className={cn(
            "mt-6 max-w-lg text-sm leading-7",
            dojo.featured ? "text-white/65" : "text-black/60",
          )}
        >
          {dojo.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {dojo.disciplines.map((discipline) => (
            <span
              key={discipline}
              className={cn(
                "border px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.1em]",
                dojo.featured
                  ? "border-white/15 text-white/60"
                  : "border-black/10 text-black/50",
              )}
            >
              {discipline}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-auto pt-8">
        <Link
          href={dojo.href}
          className={cn(
            "inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] transition-colors",
            dojo.featured
              ? "text-white hover:text-(--kfa-red)"
              : "text-black hover:text-(--kfa-blue)",
          )}
        >
          {isComingSoon ? "Quiero vincular mi dojo" : "Conocer dojo"}

          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}
