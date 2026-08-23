import { cn } from "@/utils/cn";

import type { SectionHeadingProps } from "@/utils/types";

export function SectionHeading({
  eyebrow,
  title,
  highlightedTitle,
  description,
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 shrink-0 bg-[var(--kfa-red)]" />

          <p
            className={cn(
              "text-[10px] font-bold uppercase tracking-[0.25em] sm:text-xs",
              isDark ? "text-white/60" : "text-black/60",
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={cn(
          "text-5xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-6xl lg:text-7xl",
          isDark ? "text-white" : "text-black",
        )}
      >
        {title}

        {highlightedTitle && (
          <>
            <br />

            <span className="text-[var(--kfa-red)]">{highlightedTitle}</span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-6 max-w-xl text-sm leading-7 sm:text-base",
            isDark ? "text-white/65" : "text-black/65",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
