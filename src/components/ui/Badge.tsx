import { ReactNode } from "react";

import { radius, spacing } from "@/styles/design";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center

        border
        border-sky-100

        bg-sky-50

        text-xs
        font-medium

        tracking-wide

        text-[#0F7EA8]

        transition-colors
        duration-300

        hover:bg-sky-100

        ${className}
      `}
      style={{
        borderRadius: radius.xl,
        padding: `${spacing.xs} ${spacing.sm}`,
      }}
    >
      {children}
    </span>
  );
}