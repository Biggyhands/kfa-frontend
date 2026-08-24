import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Disclosure } from "@/components/shared/disclosure";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/ui/container";

import { AllianceCard } from "./alliance-card";

import type { AlliancesSectionProps } from "@/utils/types";

export function AlliancesSection({ content }: AlliancesSectionProps) {
  return (
    <section
      id="alianzas"
      className="scroll-mt-24 bg-[#f5f5f3] py-20 text-black sm:py-24 lg:py-32"
    >
      <Container>
        {/* Intro */}
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

        {/* Main alliance options */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {content.options.map((option) => (
            <AllianceCard key={option.id} option={option} />
          ))}
        </div>

        {/* Full alliance information */}
        <div className="mt-12 lg:mt-16">
          <Disclosure
            id="alianzas-informacion"
            title={content.detailsTitle}
            description={content.detailsDescription}
          >
            <div className="mx-auto max-w-6xl space-y-12 py-2">
              {/* Introduction */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                {content.detailsIntro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-black/65 sm:text-base sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Detailed content */}
              {content.detailSections.map((section) => (
                <section
                  key={section.id}
                  className="border-t border-black/10 pt-8 lg:pt-10"
                >
                  <h3 className="max-w-4xl text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {section.title}
                  </h3>

                  {section.paragraphs && (
                    <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-black/60 sm:text-base sm:leading-8"
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
                          <h4 className="text-sm font-bold uppercase tracking-[0.08em]">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-7 text-black/60">
                            {item.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* Actions */}
              <section className="border-t border-black/10 pt-8 lg:pt-10">
                <h3 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                  {content.actionsTitle}
                </h3>

                <div className="mt-7 grid grid-cols-1 gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
                  {content.actions.map((action) => (
                    <Link
                      key={action.id}
                      href={action.href}
                      className="group flex min-h-24 items-center justify-between gap-5 bg-white p-5 transition-colors hover:bg-black hover:text-white sm:p-6"
                    >
                      <span className="max-w-[18rem] text-xs font-bold uppercase leading-5 tracking-[0.1em]">
                        {action.label}
                      </span>

                      <ArrowUpRight
                        aria-hidden="true"
                        size={17}
                        className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  ))}
                </div>
              </section>

              {/* Closing */}
              <div className="border-l-4 border-(--kfa-red) bg-white p-6 sm:p-8 lg:p-10">
                <p className="max-w-5xl font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-4xl">
                  {content.closingMessage}
                </p>
              </div>
            </div>
          </Disclosure>
        </div>
      </Container>
    </section>
  );
}
