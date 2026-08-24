import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";

import type { FooterProps } from "@/utils/types";

export function Footer({ content }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Marca decorativa de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-[family-name:var(--font-barlow-condensed)] text-[16rem] font-black leading-none tracking-[-0.08em] text-white/[0.025] sm:text-[22rem] lg:text-[30rem]"
      >
        KFA
      </div>

      <Container className="relative py-10 sm:py-12 lg:py-14">
        {/* Parte superior */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          {/* Marca */}
          <div className="flex items-center gap-4">
            <div className="relative size-12 shrink-0 border border-white/80 sm:size-14">
              <Image
                src="/images/logo.jpeg"
                alt="Fundación Kyokushin Fight Academy"
                fill
                sizes="56px"
                className="object-contain p-1"
              />
            </div>

            <div>
              <p className="font-[family-name:var(--font-barlow-condensed)] text-base font-bold uppercase tracking-[0.12em] sm:text-lg">
                {content.brandName}
              </p>

              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.22em] text-(--kfa-red) sm:text-[9px]">
                {content.brandTagline}
              </p>
            </div>
          </div>

          {/* Mensaje */}
          <div className="max-w-sm lg:text-right">
            <p className="text-xs font-bold text-white">
              {content.statementTitle}
            </p>

            <p className="mt-1 text-xs leading-5 text-white/55">
              {content.statementDescription}
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className="my-9 h-px bg-white/15" />

        {/* Parte inferior */}
        <div className="grid grid-cols-1 gap-6 text-[9px] font-bold uppercase tracking-[0.08em] text-white/80 md:grid-cols-[1fr_auto] md:items-center lg:grid-cols-[1fr_auto_1fr]">
          {/* Copyright */}
          <p className="leading-5">{content.copyright}</p>

          {/* Dominio */}
          <Link
            href={content.domainHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-(--kfa-red) lg:justify-self-center"
          >
            {content.domainLabel}
          </Link>

          {/* Links */}
          <nav
            aria-label="Navegación legal del footer"
            className="flex flex-wrap gap-x-2 gap-y-2 md:col-span-2 lg:col-span-1 lg:justify-self-end"
          >
            {content.links.map((link, index) => (
              <span key={link.label} className="inline-flex items-center">
                {index > 0 && (
                  <span aria-hidden="true" className="mr-2 text-white/30">
                    ·
                  </span>
                )}

                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-(--kfa-red)"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        {/* Firma */}
        <div className="mt-7 flex justify-start border-t border-white/10 pt-5 sm:justify-end">
          {content.codedByHref ? (
            <Link
              href={content.codedByHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline gap-1.5 text-[9px] uppercase tracking-[0.12em] text-white/35 transition-colors hover:text-white"
            >
              <span className="font-normal normal-case">
                {content.codedByLabel}
              </span>

              <span className="font-bold tracking-[0.16em] text-white/60 transition-colors group-hover:text-(--kfa-red)">
                {content.codedByName}
              </span>
            </Link>
          ) : (
            <p className="inline-flex items-baseline gap-1.5 text-[9px] tracking-[0.12em] text-white/35">
              <span>{content.codedByLabel}</span>

              <span className="font-bold uppercase tracking-[0.16em] text-white/60">
                {content.codedByName}
              </span>
            </p>
          )}
        </div>
      </Container>
    </footer>
  );
}
