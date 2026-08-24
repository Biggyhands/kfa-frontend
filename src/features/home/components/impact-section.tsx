import { ArrowUpRight } from "lucide-react";

import { Disclosure } from "@/components/shared/disclosure";
import { SectionHeading } from "@/components/shared/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

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

      <Container className="relative">
        {/* Main content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">
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
        </div>

        {/* Extended impact information */}
        <div className="mt-12 lg:mt-16">
          <Disclosure
            id="impacto-informacion"
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

              {/* Detailed sections */}
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

              {/* Closing */}
              <div className="border-t border-white/15 pt-8 lg:pt-10">
                <div className="border-l-4 border-(--kfa-red) bg-white/[0.04] p-6 sm:p-8 lg:p-10">
                  <p className="max-w-5xl font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-4xl">
                    {content.closingMessage}
                  </p>
                </div>

                <ButtonLink
                  href={content.supportActionHref}
                  variant="primary"
                  className="mt-7 w-full sm:w-auto"
                >
                  {content.supportActionLabel}

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
