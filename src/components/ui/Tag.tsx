import Link from "next/link";
import { ReactNode } from "react";

import { radius, spacing } from "@/styles/design";

interface TagProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function Tag({
  children,
  href,
  className = "",
}: TagProps) {
  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",

    borderRadius: radius.xl,

    border: "1px solid #E5E7EB",

    background: "#FFFFFF",

    padding: `${spacing.sm} ${spacing.md}`,

    fontSize: "0.875rem",
    fontWeight: 500,

    color: "#404040",
  };

  const classes = `
    transition-all
    duration-300

    hover:-translate-y-0.5
    hover:border-[#0F7EA8]
    hover:bg-sky-50
    hover:text-[#0F7EA8]

    ${className}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <span
      className={classes}
      style={style}
    >
      {children}
    </span>
  );
}