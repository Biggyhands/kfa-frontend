import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/utils/cn";
import type { ProgramCardProps } from "@/utils/types";

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article
      className={cn(
        "group relative flex min-h-[340px] flex-col overflow-hidden border border-white/10 p-6 sm:p-7 lg:p-8",
        program.featured
          ? "bg-[var(--kfa-red)] text-white"
          : "bg-[#0b0b0b] text-white",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-14 -top-14 size-36 rounded-full bg-white/5 transition-transform duration-300 group-hover:scale-125"
      />

      <span
        className={cn(
          "relative text-[10px] font-bold tracking-[0.18em]",
          program.featured ? "text-white/80" : "text-[var(--kfa-red)]",
        )}
      >
        {program.index}
      </span>

      <div className="relative mt-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
          {program.audience}
        </p>

        <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl">
          {program.title}
        </h3>

        <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
          {program.description}
        </p>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {program.benefits.map((benefit) => (
          <span
            key={benefit}
            className="border border-white/15 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/70"
          >
            {benefit}
          </span>
        ))}
      </div>

      <Link
        href={program.href}
        className="relative mt-auto inline-flex min-h-11 items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.14em] transition-colors hover:text-[var(--kfa-blue-light)]"
      >
        Solicitar información
        <ArrowUpRight aria-hidden="true" size={16} />
      </Link>
    </article>
  );
}
