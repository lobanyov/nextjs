import { ReactNode } from "react";

export interface HeadingProps {
  level: 1 | 2 | 3;
  children: ReactNode;
}