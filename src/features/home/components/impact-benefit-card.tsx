import type { ImpactBenefitCardProps } from "@/utils/types";

export function ImpactBenefitCard({ benefit }: ImpactBenefitCardProps) {
  return (
    <article className="group border-b border-white/10 py-6 first:border-t sm:py-7">
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <span className="font-[family-name:var(--font-barlow-condensed)] text-xl font-black text-[var(--kfa-red)]">
          {benefit.index}
        </span>

        <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-white sm:text-base">
          {benefit.title}
        </h3>

        <p className="col-start-2 max-w-xl text-sm leading-6 text-white/55 sm:leading-7">
          {benefit.description}
        </p>
      </div>
    </article>
  );
}
