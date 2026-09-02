import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Disclosure } from "@/components/shared/disclosure";
import { Container } from "@/components/ui/container";

import { ContactForm } from "./contact-form";

import type { ContactSectionProps } from "@/utils/types";

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-(--kfa-red) py-20 text-white sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-20">
          {/* Información institucional */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-white/40" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white sm:text-xs">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="mt-8 max-w-[8ch] font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.82] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              {content.title}
              <br />
              {content.highlightedTitle}
            </h2>

            <div className="mt-12 border-t border-white/30">
              {content.channels.map((channel) => (
                <div
                  key={channel.label}
                  className="grid grid-cols-1 gap-2 border-b border-white/30 py-5 sm:grid-cols-[130px_1fr] sm:items-start sm:gap-6"
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/70">
                    {channel.label}
                  </span>

                  {channel.href ? (
                    <Link
                      href={channel.href}
                      target={
                        channel.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-white/70 sm:justify-end sm:text-right"
                    >
                      {channel.value}

                      <ArrowUpRight aria-hidden="true" size={14} />
                    </Link>
                  ) : (
                    <span className="text-sm font-bold leading-6 text-white sm:text-right">
                      {channel.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <ContactForm content={content} />
        </div>

        {/* Disclosure */}
        <div className="mt-16 lg:mt-20">
          <Disclosure
            id="contacto-informacion"
            title={content.detailsTitle}
            description={content.detailsDescription}
            theme="dark"
          >
            <div className="mx-auto max-w-6xl space-y-12 py-2">
              {/* Introducción */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                {content.detailsIntro.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-white/75 sm:text-base sm:leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Secciones */}
              {content.detailSections.map((section) => (
                <section
                  key={section.id}
                  className="border-t border-white/25 pt-8 lg:pt-10"
                >
                  <h3 className="max-w-4xl font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                    {section.title}
                  </h3>

                  {section.paragraphs && (
                    <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
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
                          className="border-l-2 border-white/60 pl-4"
                        >
                          <h4 className="text-sm font-bold uppercase tracking-[0.08em] text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-7 text-white/70">
                            {item.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {/* Respuesta automática 
              <section className="border-t border-white/25 pt-8 lg:pt-10">
                <h3 className="font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase tracking-tight sm:text-3xl lg:text-4xl">
                  Respuesta automática sugerida
                </h3>

                <div className="mt-6 border-l-2 border-white/60 pl-5 sm:pl-6">
                  <p className="max-w-4xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                    {content.automaticResponse}
                  </p>
                </div>
              </section>
*/}
              {/* Cierre */}
              <div className="border-l-4 border-white bg-black/15 p-6 sm:p-8 lg:p-10">
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
