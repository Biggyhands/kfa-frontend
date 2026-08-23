import Link from "next/link";

import { cn } from "@/utils/cn";
import type { ButtonLinkProps } from "@/utils/types";

const variants = {
  primary: "bg-[var(--kfa-blue)] text-white hover:bg-[var(--kfa-blue-dark)]",

  secondary:
    "border border-white/30 bg-transparent text-white hover:border-white hover:bg-white hover:text-black",

  text: "px-0 py-2 text-white/80 underline-offset-4 hover:text-white hover:underline",
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  external = false,
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--kfa-blue-light)] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
