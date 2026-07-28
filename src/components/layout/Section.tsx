import { ReactNode } from "react";
import clsx from "clsx";

import { spacing as s } from "@/styles/design";

interface Props {
  children: ReactNode;
  className?: string;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

export default function Section({
  children,
  className,
  spacing = "lg",
}: Props) {
  const paddings = {
    none: "0",
    sm: s.md,
    md: s.xl,
    lg: s.section,
    xl: s.sectionLarge,
  };

  return (
    <section
      className={clsx(className)}
      style={{
        paddingTop: paddings[spacing],
        paddingBottom: paddings[spacing],
        width: "100%",
      }}
    >
      {children}
    </section>
  );
}