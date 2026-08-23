"use client";

import Link from "next/link";

import { cn } from "@/utils/cn";
import type { MobileMenuProps } from "@/utils/types";

export function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "absolute inset-x-0 top-full border-t border-white/10 bg-black transition-all duration-300 lg:hidden",
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0",
      )}
      aria-hidden={!isOpen}
    >
      <nav
        aria-label="Navegación móvil"
        className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6"
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex min-h-12 items-center border-b border-white/10 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors last:border-none hover:text-[var(--kfa-blue-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kfa-blue-light)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
