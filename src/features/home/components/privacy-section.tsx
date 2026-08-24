import { Disclosure } from "@/components/shared/disclosure";
import { Container } from "@/components/ui/container";

import type { PrivacySectionProps } from "@/utils/types";

export function PrivacySection({ content }: PrivacySectionProps) {
  return (
    <section
      id="privacidad"
      className="scroll-mt-24 bg-white py-20 text-black sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-black/30" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/65 sm:text-xs">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-8 max-w-[9ch] font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.84] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              {content.title}

              <br />

              <span className="text-(--kfa-red)">
                {content.highlightedTitle}
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-2xl text-base leading-8 text-black/65 sm:text-lg sm:leading-9">
              {content.description}
            </p>
          </div>
        </div>

        <div className="mt-14 lg:mt-20">
          <Disclosure
            id="privacidad-informacion"
            title={content.detailsTitle}
            description={content.detailsDescription}
            theme="light"
          >
            <div className="mx-auto max-w-6xl space-y-12 py-2">
              {content.detailSections.map((section) => (
                <section
                  key={section.id}
                  className="border-t border-black/15 pt-8 first:border-t-0 first:pt-0 lg:pt-10"
                >
                  <h3 className="max-w-4xl font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {section.title}
                  </h3>

                  {section.paragraphs && (
                    <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-black/65 sm:text-base sm:leading-8"
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
                          <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-black">
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

              <div className="border-l-4 border-(--kfa-red) bg-black/[0.03] p-6 sm:p-8 lg:p-10">
                <p className="max-w-5xl font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-tight text-black sm:text-3xl lg:text-4xl">
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
