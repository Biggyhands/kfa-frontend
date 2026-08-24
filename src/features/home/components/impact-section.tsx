import { ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";

import { ImpactBenefitCard } from "./impact-benefit-card";

import type { ImpactSectionProps } from "@/utils/types";

export function ImpactSection({ content }: ImpactSectionProps) {
  return (
    <section
      id="impacto"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(217,4,41,0.15),transparent_30%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-10 font-[family-name:var(--font-barlow-condensed)] text-[14rem] font-black leading-none text-white/[0.025] sm:text-[20rem] lg:text-[28rem]"
      >
        KFA
      </div>

      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">
        <div>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            highlightedTitle={content.highlightedTitle}
            theme="dark"
          />

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            {content.description}
          </p>

          <ButtonLink
            href={content.actionHref}
            variant="secondary"
            className="mt-8 w-full sm:w-auto"
          >
            {content.actionLabel}

            <ArrowUpRight aria-hidden="true" size={16} />
          </ButtonLink>
        </div>

        <div>
          {content.benefits.map((benefit) => (
            <ImpactBenefitCard key={benefit.index} benefit={benefit} />
          ))}
        </div>
      </Container>
    </section>
  );
}
