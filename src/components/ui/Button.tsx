import Link from "next/link";
import { ReactNode } from "react";

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
  const classes = `
    inline-flex
    items-center
    gap-3

    rounded-full

    px-7
    py-4

    text-sm
    font-semibold
    tracking-wide

    transition-all
    duration-300

    hover:-translate-y-1

    ${
      variant === "primary"
        ? `
          bg-[#111827]
          text-white
          hover:bg-[#0F172A]
          shadow-xl shadow-black/10
        `
        : `
          bg-white/70
          backdrop-blur-md
          border border-gray-200
          text-[#111827]
          hover:border-[#0F7EA8]
          hover:text-[#0F7EA8]
        `
    }

    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group ${classes}`}>
      {content}
    </button>
  );
}