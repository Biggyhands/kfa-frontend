import { ArrowUpRight } from "lucide-react";

import { cn } from "@/utils/cn";

import type { TeamMemberCardProps } from "@/utils/types";

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "group relative flex min-h-[320px] flex-col overflow-hidden border p-6 sm:p-8",
        member.featured
          ? "border-(--kfa-red) bg-black text-white"
          : "border-black/10 bg-white text-black",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute -right-16 -top-16 size-40 rounded-full transition-transform duration-500 group-hover:scale-125",
          member.featured ? "bg-(--kfa-red)/10" : "bg-black/[0.03]",
        )}
      />

      <div className="relative">
        <span
          className={cn(
            "text-[10px] font-bold uppercase tracking-[0.16em]",
            member.featured ? "text-(--kfa-red)" : "text-black/40",
          )}
        >
          {member.role}
        </span>

        <h3 className="mt-8 max-w-md text-3xl font-black uppercase leading-[0.9] tracking-tight sm:text-4xl">
          {member.name}
        </h3>

        <p
          className={cn(
            "mt-6 max-w-lg text-sm leading-7",
            member.featured ? "text-white/65" : "text-black/60",
          )}
        >
          {member.description}
        </p>
      </div>

      <div
        className={cn(
          "relative mt-auto flex items-center gap-2 pt-8 text-xs font-bold uppercase tracking-[0.12em]",
          member.featured ? "text-white/60" : "text-black/45",
        )}
      >
        KFA
        <ArrowUpRight aria-hidden="true" size={15} />
      </div>
    </article>
  );
}
