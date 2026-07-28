// src/components/layout/Container.tsx

import { ReactNode } from "react";
import clsx from "clsx";

import { layout, spacing } from "@/styles/design";

interface Props {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "full";
}

export default function Container({
  children,
  className,
  size = "default",
}: Props) {
  const maxWidths = {
    default: layout.container,
    wide: layout.containerWide,
    full: "100%",
  };

  return (
    <div
      className={clsx(className)}
      style={{
        width: "100%",
        maxWidth: maxWidths[size],
        margin: "0 auto",
        paddingLeft: spacing.lg,
        paddingRight: spacing.lg,
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}