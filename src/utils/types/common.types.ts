import type { ReactNode } from "react";

export interface BaseComponentProps {
  className?: string;
}

export interface ChildrenProps {
  children: ReactNode;
}
