import Link from "next/link";
import { ReactNode } from "react";

import { radius, spacing, typography } from "@/styles/design";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: spacing.sm,

    padding: `${spacing.sm} ${spacing.md}`,

    borderRadius: radius.xl,

    fontSize: typography.body,
    fontWeight: 600,
    letterSpacing: "0.02em",

    transition: "all 300ms ease",
  };

  if (variant === "primary") {
    Object.assign(style, {
      background: "#111827",
      color: "#FFFFFF",
      boxShadow: "0 12px 32px rgba(0,0,0,.10)",
    });
  } else {
    Object.assign(style, {
      background: "rgba(255,255,255,.7)",
      backdropFilter: "blur(16px)",
      border: "1px solid #E5E7EB",
      color: "#111827",
    });
  }

  if (href) {
    return (
      <Link
        href={href}
        className={`group ${className}`}
        style={style}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`group ${className}`}
      style={style}
    >
      {content}
    </button>
  );
}