import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

import type { HeroProps } from "@/utils/types";

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(23,105,170,0.24),transparent_30%),radial-gradient(circle_at_12%_88%,rgba(217,4,41,0.14),transparent_28%)]"
      />

      <Container className="relative grid min-h-screen grid-cols-1 items-center gap-16 pb-20 pt-36 sm:gap-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:gap-24 lg:pb-24 lg:pt-40 xl:gap-28">
        <div className="order-1 min-w-0 lg:pr-4">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-(--kfa-red)" />

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/70 sm:text-xs">
              {content.eyebrow}
            </p>
          </div>

          <h1 className="max-w-[11ch] font-[family-name:var(--font-barlow-condensed)] text-5xl font-extrabold uppercase leading-[0.86] tracking-[-0.012em] sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.6rem] 2xl:text-[6.2rem]">
            <span className="block">{content.title}</span>

            <span className="block text-(--kfa-red)">
              {content.highlightedTitle}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {content.actions.map((action) => (
              <ButtonLink
                key={action.label}
                href={action.href}
                variant={action.variant}
                external={action.external}
                className="w-full sm:w-auto"
              >
                {action.label}

                {action.variant === "secondary" ? (
                  <ArrowDownRight aria-hidden="true" size={16} />
                ) : (
                  <ArrowUpRight aria-hidden="true" size={16} />
                )}
              </ButtonLink>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:max-w-xl sm:gap-6 lg:mt-12">
            {content.metrics.map((metric) => (
              <div
                key={metric.label}
                className="min-w-0 border-l border-white/10 pl-3 sm:pl-4"
              >
                <strong className="block font-[family-name:var(--font-barlow-condensed)] text-2xl font-black uppercase sm:text-3xl">
                  {metric.value}
                </strong>

                <span className="mt-1 block text-[8px] uppercase leading-4 tracking-[0.1em] text-white/50 sm:text-[9px] lg:text-[10px]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-2 flex min-w-0 justify-center pt-4 sm:pt-8 lg:justify-end lg:pt-0">
          <div className="relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[430px] xl:max-w-[470px]">
            <div
              aria-hidden="true"
              className="absolute -inset-10 rounded-full bg-(--kfa-blue)/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-full border border-(--kfa-red)/20"
            />

            <div className="relative aspect-[1600/2187] overflow-hidden border border-white/10 bg-black shadow-2xl">
              <Image
                src={content.imageSrc}
                alt={content.imageAlt}
                fill
                priority
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 380px, (max-width: 1280px) 430px, 470px"
                className="object-contain"
              />
            </div>

            <div className="absolute -bottom-4 right-1 grid size-20 place-items-center rounded-full bg-(--kfa-red) text-center shadow-xl sm:size-24">
              <div>
                <strong className="block font-[family-name:var(--font-barlow-condensed)] text-2xl font-black leading-none">
                  KFA
                </strong>

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] sm:text-[9px]">
                  Plus
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
