import { ArrowUpRight } from "lucide-react";

import { Disclosure } from "@/components/shared/disclosure";
import { SectionHeading } from "@/components/shared/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
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
        {/* Heading */}
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

        {/* Program cards */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {content.programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Extended information */}
        <div className="mt-12 lg:mt-16">
          <Disclosure
            id="programas-informacion"
            title={content.detailsTitle}
            description={content.detailsDescription}
            theme="dark"
          >
            <div className="mx-auto max-w-6xl space-y-12 py-2">
              {/* Intro */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                {content.detailsIntro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-white/65 sm:text-base sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Detail sections */}
              {content.detailSections.map((section) => (
                <section
                  key={section.id}
                  className="border-t border-white/15 pt-8 lg:pt-10"
                >
                  <h3 className="max-w-3xl text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {section.title}
                  </h3>

                  {section.paragraphs && (
                    <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {section.items.map((item) => (
                        <article
                          key={item.title}
                          className="border-l-2 border-(--kfa-red) pl-4"
                        >
                          <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-7 text-white/55">
                            {item.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* CTA */}
              <div className="border-t border-white/15 pt-8">
                <p className="max-w-4xl font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-4xl">
                  {content.closingMessage}
                </p>

                <ButtonLink
                  href={content.actionHref}
                  variant="primary"
                  className="mt-7 w-full sm:w-auto"
                >
                  {content.actionLabel}

                  <ArrowUpRight aria-hidden="true" size={16} />
                </ButtonLink>
              </div>
            </div>
          </Disclosure>
        </div>
      </Container>
    </section>
  );
}
