import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/shared/section-heading";

import type { NetworkSectionProps } from "@/utils/types";

export function NetworkSection({ content }: NetworkSectionProps) {
  return (
    <section
      id="kwu"
      className="relative overflow-hidden bg-[var(--kfa-red)] py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(255,255,255,0.12),transparent_24%)]"
      />

      <Container className="relative">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            highlightedTitle={content.highlightedTitle}
            theme="dark"
          />

          <div className="grid size-24 shrink-0 place-items-center self-start rounded-full border border-white/40 bg-[var(--kfa-blue)] text-center sm:size-28">
            <div>
              <strong className="block font-[family-name:var(--font-barlow-condensed)] text-xl font-black uppercase leading-none sm:text-2xl">
                {content.badgeTop}
              </strong>

              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-white/80">
                {content.badgeBottom}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div>
            <p className="max-w-xl font-[family-name:var(--font-barlow-condensed)] text-3xl font-black uppercase leading-[1] tracking-tight sm:text-4xl lg:text-5xl">
              {content.lead}
            </p>
          </div>

          <div className="space-y-5">
            {content.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 border-t border-white/30 sm:grid-cols-2">
          {content.benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex min-h-16 items-center gap-3 border-b border-white/30 py-4 sm:px-4"
            >
              <ArrowUpRight aria-hidden="true" size={18} className="shrink-0" />

              <span className="text-xs font-bold uppercase tracking-[0.12em]">
                {benefit.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink
            href={content.primaryActionHref}
            variant="secondary"
            className="w-full border-white/40 bg-black text-white hover:bg-white hover:text-black sm:w-auto"
          >
            {content.primaryActionLabel}

            <ArrowUpRight aria-hidden="true" size={16} />
          </ButtonLink>

          <ButtonLink
            href={content.secondaryActionHref}
            variant="secondary"
            className="w-full border-white/40 sm:w-auto"
          >
            {content.secondaryActionLabel}

            <ArrowDownRight aria-hidden="true" size={16} />
          </ButtonLink>

          <Link
            href={content.officialSiteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 px-1 text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-colors hover:text-white sm:ml-2"
          >
            {content.officialSiteLabel}

            <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
