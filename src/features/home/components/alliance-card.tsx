import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/utils/cn";

import type { AllianceCardProps } from "@/utils/types";

export function AllianceCard({ option }: AllianceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex min-h-[320px] flex-col overflow-hidden border p-6 sm:p-8",
        option.featured
          ? "border-(--kfa-blue) bg-(--kfa-blue) text-white"
          : "border-black/10 bg-white text-black",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute -right-16 -top-16 size-40 rounded-full transition-transform duration-500 group-hover:scale-125",
          option.featured ? "bg-white/10" : "bg-black/[0.03]",
        )}
      />

      <div className="relative">
        <span
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.16em]",
            option.featured ? "text-white/70" : "text-(--kfa-red)",
          )}
        >
          {option.index}
        </span>

        <h3 className="mt-8 text-3xl font-black uppercase leading-[0.9] tracking-tight sm:text-4xl">
          {option.title}
        </h3>

        <p
          className={cn(
            "mt-5 max-w-md text-sm leading-7",
            option.featured ? "text-white/75" : "text-black/60",
          )}
        >
          {option.description}
        </p>
      </div>

      <Link
        href={option.actionHref}
        className={cn(
          "relative mt-auto inline-flex min-h-11 items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.14em] transition-colors",
          option.featured
            ? "text-white hover:text-white/70"
            : "text-black hover:text-(--kfa-red)",
        )}
      >
        {option.actionLabel}

        <ArrowUpRight aria-hidden="true" size={16} />
      </Link>
    </article>
  );
}
