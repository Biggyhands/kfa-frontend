"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/utils/cn";

import type { DisclosureProps } from "@/utils/types";

export function Disclosure({
  title,
  description,
  children,
  defaultOpen = false,
  id,
  theme = "light",
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const contentId = id
    ? `${id}-content`
    : `disclosure-${title.toLowerCase().replace(/\s+/g, "-")}`;

  const isDark = theme === "dark";

  return (
    <div
      className={cn("border-y", isDark ? "border-white/15" : "border-black/15")}
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className={cn(
          "group flex w-full cursor-pointer items-center justify-between gap-6 px-0 py-5 text-left transition-colors duration-200 sm:py-6",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--kfa-blue) focus-visible:ring-offset-2",
          isDark
            ? "hover:bg-white/5 focus-visible:ring-offset-black"
            : "hover:bg-black/4 focus-visible:ring-offset-white",
        )}
      >
        <div className="min-w-0 pr-4">
          <h3
            className={cn(
              "font-[family-name:var(--font-barlow-condensed)] text-base font-black uppercase tracking-[0.04em] transition-colors duration-200 sm:text-lg",
              isDark
                ? "text-white group-hover:text-white"
                : "text-black group-hover:text-(--kfa-red)",
            )}
          >
            {title}
          </h3>

          {description && (
            <p
              className={cn(
                "mt-2 max-w-4xl text-sm leading-6 transition-colors duration-200",
                isDark
                  ? "text-white/60 group-hover:text-white/80"
                  : "text-black/55 group-hover:text-black/75",
              )}
            >
              {description}
            </p>
          )}
        </div>

        <ChevronDown
          aria-hidden="true"
          size={18}
          className={cn(
            "shrink-0 transition-all duration-300",
            isDark
              ? "text-white/80 group-hover:text-white"
              : "text-black/70 group-hover:text-(--kfa-red)",
            "group-hover:translate-y-0.5",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <div
        id={contentId}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "pb-8 pt-2 sm:pb-10",
              isDark ? "text-white" : "text-black",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
