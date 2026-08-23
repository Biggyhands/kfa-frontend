import type { AboutValueCardProps } from "@/utils/types";

export function AboutValueCard({ value }: AboutValueCardProps) {
  return (
    <article className="group relative overflow-hidden border border-black/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7 lg:p-8">
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 size-28 rounded-full bg-[var(--kfa-red)]/5 transition-transform duration-300 group-hover:scale-150"
      />

      <span className="relative text-[10px] font-bold tracking-[0.18em] text-[var(--kfa-red)]">
        {value.index}
      </span>

      <h3 className="relative mt-8 text-2xl font-black uppercase tracking-tight sm:text-3xl">
        {value.title}
      </h3>

      <p className="relative mt-3 max-w-xs text-sm leading-6 text-black/60">
        {value.description}
      </p>
    </article>
  );
}
