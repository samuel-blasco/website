import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <article
      className={`
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-neutral-200/70

        bg-white/70
        backdrop-blur-md

        p-10

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-neutral-300
        hover:shadow-2xl

        ${className}
      `}
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100

          bg-gradient-to-br
          from-white
          via-transparent
          to-sky-50
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </article>
  );
}