// src/components/ui/Card.tsx

import { ReactNode } from "react";
import clsx from "clsx";

import { radius, spacing } from "@/styles/design";

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({
  children,
  className,
  interactive = true,
}: CardProps) {
  return (
    <div
      className={clsx(
        `
        relative
        overflow-hidden

        transition-all
        duration-500
        ease-out
        `,
        interactive &&
          `
          hover:-translate-y-1.5
          hover:border-sky-200
          hover:shadow-[0_20px_60px_rgba(15,126,168,0.10)]
        `,
        className
      )}
      style={{
        borderRadius: radius.lg,

        border: "1px solid rgba(229,229,229,.8)",

        background: "rgba(255,255,255,.90)",
        backdropFilter: "blur(20px)",

        padding: spacing.card,

        boxShadow: "0 4px 20px rgba(0,0,0,.025)",
      }}
    >
      {/* Halo */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle at top, rgba(15,126,168,.04), transparent 60%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
}