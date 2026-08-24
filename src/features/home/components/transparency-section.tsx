import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

import { Disclosure } from "@/components/shared/disclosure";
import { Container } from "@/components/ui/container";

import type { TransparencySectionProps } from "@/utils/types";

export function TransparencySection({ content }: TransparencySectionProps) {
  return (
    <section
      id="transparencia"
      className="scroll-mt-24 bg-black py-20 text-white sm:py-24 lg:py-32"
    >
      <Container>
        {/* Header + institutional data */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20 xl:gap-28">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-(--kfa-red)" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white sm:text-xs">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-8 max-w-3xl font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.82] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl">
              {content.title}

              <br />

              <span className="text-(--kfa-red)">
                {content.highlightedTitle}
              </span>
            </h2>
          </div>

          <dl className="border-t border-white/20">
            {content.institutionalData.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-1 gap-2 border-b border-white/20 py-5 sm:grid-cols-[180px_1fr] sm:items-start sm:gap-8"
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-(--kfa-blue-light)">
                  {item.label}
                </dt>

                <dd className="text-sm font-semibold leading-6 text-white sm:text-right">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Documents */}
        <div className="mt-16 max-w-4xl lg:mt-24">
          <h3 className="text-lg font-black uppercase tracking-[0.04em] sm:text-xl">
            {content.documentsTitle}
          </h3>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
            {content.documentsDescription}
          </p>

          <div className="mt-7 space-y-2">
            {content.documents.map((document) => (
              <div
                key={document.id}
                className="flex flex-col gap-3 border border-white/15 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <FileText
                    aria-hidden="true"
                    size={17}
                    className="mt-0.5 shrink-0 text-(--kfa-blue-light)"
                  />

                  <span className="text-xs font-semibold leading-5 text-white">
                    {document.title}
                  </span>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/40 sm:text-right">
                  {document.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={content.requestActionHref}
              className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-(--kfa-red)"
            >
              {content.requestActionLabel}

              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>

            <Link
              href={content.privacyActionHref}
              className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/65 transition-colors hover:text-(--kfa-blue-light) sm:ml-6"
            >
              {content.privacyActionLabel}

              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        {/* Full transparency */}
        <div className="mt-12 lg:mt-16">
          <Disclosure
            id="transparencia-informacion"
            title={content.detailsTitle}
            description={content.detailsDescription}
            theme="dark"
          >
            <div className="mx-auto max-w-6xl space-y-12 py-2">
              {content.detailSections.map((section) => (
                <section
                  key={section.id}
                  className="border-t border-white/15 pt-8 first:border-t-0 first:pt-0 lg:pt-10"
                >
                  <h3 className="max-w-4xl text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
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
                    <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-(--kfa-red) py-1 pl-4 text-sm leading-7 text-white/60"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="border-l-4 border-(--kfa-red) bg-white/[0.04] p-6 sm:p-8 lg:p-10">
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
