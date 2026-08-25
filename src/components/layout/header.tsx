"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { MobileMenu } from "@/components/layout/mobile-menu";
import type { HeaderProps } from "@/utils/types";

export function Header({ items }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="bg-[var(--kfa-red)]">
        <Container className="flex min-h-8 items-center justify-center text-[10px] font-bold uppercase tracking-[0.18em] sm:justify-between">
          <span>Fundación Kyokushin Fight Academy</span>

          <span className="hidden sm:inline">Barranquilla · Colombia</span>
        </Container>
      </div>

      <div className="relative border-b border-white/10 bg-black/70 backdrop-blur-md">
        <Container className="flex min-h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kfa-blue-light)]"
          >
            <div className="relative size-10 shrink-0 overflow-hidden border border-white/30 sm:size-11">
              <Image
                src="/images/logo.jpeg"
                alt="Kyokushin Fight Academy"
                fill
                sizes="44px"
                className="object-contain p-1"
                priority
              />
            </div>

            <div className="hidden sm:block">
              {" "}
              <strong className="block text-xs font-bold uppercase tracking-[0.16em]">
                Kyokushin Fight Academy
              </strong>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/60">
                Fundación · Colombia
              </span>
            </div>
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-6 lg:flex"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-wider text-white/75 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center border border-white/20 lg:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={22} />
            ) : (
              <Menu aria-hidden="true" size={22} />
            )}
          </button>
        </Container>

        <div id="mobile-navigation">
          <MobileMenu
            items={items}
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
