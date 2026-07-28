import Link from "next/link";
import { ReactNode } from "react";

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
  const classes = `
    inline-flex
    items-center

    rounded-full

    border
    border-neutral-200

    bg-white

    px-4
    py-2

    text-sm
    font-medium

    text-neutral-700

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
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <span className={classes}>{children}</span>;
}