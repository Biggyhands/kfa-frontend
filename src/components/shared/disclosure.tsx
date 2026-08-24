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

  const isDark = theme === "dark";

  return (
    <div
      id={id}
      className={cn("border-y", isDark ? "border-white/15" : "border-black/10")}
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={id ? `${id}-content` : undefined}
        className={cn(
          "flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--kfa-blue)",
        )}
      >
        <div>
          <span
            className={cn(
              "block text-sm font-bold uppercase tracking-[0.12em]",
              isDark ? "text-white" : "text-black",
            )}
          >
            {title}
          </span>

          {description && (
            <p
              className={cn(
                "mt-2 max-w-3xl text-sm leading-6",
                isDark ? "text-white/55" : "text-black/55",
              )}
            >
              {description}
            </p>
          )}
        </div>

        <ChevronDown
          aria-hidden="true"
          size={20}
          className={cn(
            "shrink-0 transition-transform duration-300",
            isOpen && "rotate-180",
            isDark ? "text-white" : "text-black",
          )}
        />
      </button>

      <div
        id={id ? `${id}-content` : undefined}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-8 pt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
