"use client";

import Link from "next/link";

const links = [
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "Journal",
    href: "/journal",
  },
  {
    label: "Atlas",
    href: "/atlas",
  },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pt-6">
      <nav
        className="
          flex
          items-center
          gap-10

          rounded-full

          border
          border-black/5

          bg-white/70
          backdrop-blur-xl

          px-8
          py-4

          shadow-lg
          shadow-black/5
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            mr-4

            text-base
            font-semibold
            tracking-tight

            text-[#111827]

            transition-colors

            hover:text-[#0F7EA8]
          "
        >
          Samuel Blasco
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="
                  text-sm
                  font-medium

                  text-neutral-500

                  transition-colors

                  hover:text-[#111827]
                "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/atlas"
          className="
            rounded-full

            bg-[#111827]

            px-5
            py-2.5

            text-sm
            font-medium

            text-white

            transition-all

            hover:bg-[#0F172A]
            hover:-translate-y-0.5
          "
        >
          Explore Atlas
        </Link>
      </nav>
    </header>
  );
}