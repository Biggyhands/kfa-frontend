import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";

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

            <Link
              href={content.linkHref}
              className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-black/30 text-xs font-bold uppercase tracking-[0.15em] transition-colors hover:border-[var(--kfa-red)] hover:text-[var(--kfa-red)]"
            >
              {content.linkLabel}

              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
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
