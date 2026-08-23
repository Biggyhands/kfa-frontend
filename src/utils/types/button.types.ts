import type { ReactNode } from "react";

export interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  className?: string;
}
