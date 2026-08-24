import type { ReactNode } from "react";

export interface DisclosureProps {
  title: string;
  description?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  id?: string;
  theme?: "light" | "dark";
}
