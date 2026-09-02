import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";

import type { TeamSectionProps } from "@/utils/types";

export function TeamSection({ content }: TeamSectionProps) {
  const { director } = content;

  return (
    <section
      id="equipo"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 xl:gap-28">
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
              <div className="absolute inset-x-[8%] bottom-7 top-0 overflow-hidden bg-black sm:inset-x-[10%] sm:bottom-8">
                <Image
                  src="/images/sensei-alvaro.jpg"
                  alt="Sensei Álvaro Oviedo Villamil, director técnico de Kyokushin Fight Academy"
                  fill
                  sizes="(max-width: 1024px) 90vw, 500px"
                  className="object-cover object-[16%_35%]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent"
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-[78%] w-7 bg-(--kfa-red) sm:w-8"
              />

              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[10%] right-0 h-7 bg-(--kfa-red) sm:h-8"
              />

              <div className="absolute bottom-12 left-[9%] z-10 sm:bottom-14">
                <span className="block max-w-24 text-[9px] font-black uppercase leading-4 tracking-[0.18em] text-white/70">
                  Dirección
                  <br />
                  técnica
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-(--kfa-red)" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white sm:text-xs">
                {director.eyebrow}
              </p>
            </div>

            <div className="mt-8">
              <span className="block font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.82] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                {director.honorific}
              </span>

              <span className="mt-2 block font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.82] tracking-[-0.02em] text-(--kfa-red) sm:text-6xl lg:text-7xl">
                {director.firstName}
              </span>

              <h2 className="mt-2 max-w-3xl font-[family-name:var(--font-barlow-condensed)] text-5xl font-black uppercase leading-[0.86] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                {director.lastName}
              </h2>
            </div>

            <p className="mt-7 max-w-3xl text-[10px] font-bold uppercase leading-5 tracking-[0.1em] text-(--kfa-blue-light) sm:text-xs">
              {director.role}
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              {director.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-4">
              {director.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="text-[9px] font-bold uppercase leading-4 tracking-[0.12em] text-white/70"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={director.primaryActionHref}
                className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-(--kfa-red)"
              >
                {director.primaryActionLabel}

                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>

              <a
                href={director.secondaryActionHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-(--kfa-blue-light)"
              >
                {director.secondaryActionLabel}

                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
