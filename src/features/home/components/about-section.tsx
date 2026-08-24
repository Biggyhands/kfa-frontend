import { Disclosure } from "@/components/shared/disclosure";
import { SectionHeading } from "@/components/shared/section-heading";
import { Container } from "@/components/ui/container";

import { AboutValueCard } from "./about-value-card";

import type { AboutSectionProps } from "@/utils/types";

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="nosotros"
      className="scroll-mt-24 bg-white py-20 text-black sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            highlightedTitle={content.highlightedTitle}
          />

          <div className="lg:pt-12">
            <div className="space-y-5">
              {content.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-sm leading-7 text-black/65 sm:text-base sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8">
              <Disclosure id="historia" title={content.historyTitle}>
                <div className="space-y-10">
                  {content.historySections.map((section) => (
                    <section
                      key={section.id}
                      className="border-t border-black/10 pt-7 first:border-t-0 first:pt-0"
                    >
                      {section.title && (
                        <h3 className="text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl">
                          {section.title}
                        </h3>
                      )}

                      {section.paragraphs && (
                        <div className="mt-4 space-y-4 first:mt-0">
                          {section.paragraphs.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="max-w-3xl text-sm leading-7 text-black/65 sm:text-base sm:leading-8"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      {section.items && (
                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {section.items.map((item) => (
                            <article
                              key={item.title}
                              className="border-l-2 border-(--kfa-red) pl-4"
                            >
                              <h4 className="text-sm font-bold uppercase tracking-[0.08em]">
                                {item.title}
                              </h4>

                              <p className="mt-2 text-sm leading-6 text-black/60">
                                {item.description}
                              </p>
                            </article>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}

                  <blockquote className="border-l-4 border-(--kfa-red) bg-[#f5f5f3] p-6 sm:p-8">
                    <p className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-tight sm:text-3xl">
                      {content.closingMessage}
                    </p>
                  </blockquote>
                </div>
              </Disclosure>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {content.values.map((value) => (
            <AboutValueCard key={value.index} value={value} />
          ))}
        </div>
      </Container>
    </section>
  );
}
