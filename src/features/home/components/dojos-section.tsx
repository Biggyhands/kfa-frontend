import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";

import { DojoCard } from "./dojo-card";

import type { DojosSectionProps } from "@/utils/types";

export function DojosSection({ content }: DojosSectionProps) {
  return (
    <section
      id="dojos"
      className="scroll-mt-24 bg-[#f5f5f3] py-20 text-black sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            highlightedTitle={content.highlightedTitle}
          />

          <p className="max-w-xl text-sm leading-7 text-black/60 sm:text-base lg:justify-self-end">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-2">
          {content.dojos.map((dojo) => (
            <DojoCard key={dojo.id} dojo={dojo} />
          ))}
        </div>
      </Container>
    </section>
  );
}
