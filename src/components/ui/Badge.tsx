import { ReactNode } from "react";

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

        rounded-full

        border
        border-sky-100

        bg-sky-50

        px-3
        py-1.5

        text-xs
        font-medium

        tracking-wide

        text-[#0F7EA8]

        transition-colors
        duration-300

        hover:bg-sky-100

        ${className}
      `}
    >
      {children}
    </span>
  );
}