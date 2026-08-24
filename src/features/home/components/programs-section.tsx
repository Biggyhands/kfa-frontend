import { Disclosure } from "@/components/shared/disclosure";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/ui/container";

import { ProgramCard } from "./program-card";

import type { ProgramsSectionProps } from "@/utils/types";

export function ProgramsSection({ content }: ProgramsSectionProps) {
  return (
    <section
      id="programas"
      className="scroll-mt-24 bg-black py-20 text-white sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            highlightedTitle={content.highlightedTitle}
            theme="dark"
          />

          <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base lg:justify-self-end">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {content.programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="mt-10 lg:mt-14">
          <Disclosure
            id="programas-informacion"
            title="Ver toda la información de los programas"
            description="Si quieres conocer cada programa con más detalle, abre esta parte y encuentra la información completa."
            theme="dark"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {content.programs.map((program) => (
                <article
                  key={program.id}
                  className="border-t border-white/15 pt-5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--kfa-red)">
                    {program.audience}
                  </span>

                  <h3 className="mt-3 text-2xl font-black uppercase text-white">
                    {program.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {program.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {program.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50"
                      >
                        — {benefit}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Disclosure>
        </div>
      </Container>
    </section>
  );
}
