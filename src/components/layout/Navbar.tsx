"use client";

import Link from "next/link";

import { layout, radius, spacing } from "@/styles/design";

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
    label: "Collections",
    href: "/collections",
  },
  {
    label: "Skills",
    href: "/skills",
  },
];

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        paddingTop: spacing.md,
        paddingLeft: spacing.md,
        paddingRight: spacing.md,
      }}
    >
      <nav
        className="
          border
          border-neutral-200/70
          bg-white/75
          shadow-lg
          shadow-black/5
          backdrop-blur-2xl
        "
        style={{
          width: "100%",
          maxWidth: layout.container,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `${spacing.sm} ${spacing.card}`,
          borderRadius: radius.xl,
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="
            text-lg
            font-semibold
            tracking-tight
            text-neutral-900
            transition-colors
            hover:text-[#0F7EA8]
          "
        >
          Samuel Blasco
        </Link>

        {/* Navigation */}
        <ul
          className="md:flex"
          style={{
            display: "flex",
            alignItems: "center",
            gap: spacing.gap,
            listStyle: "none",
          }}
        >
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="
                  relative
                  text-sm
                  font-medium
                  text-neutral-500
                  transition-colors
                  duration-200
                  hover:text-neutral-900
                "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <Link
          href="/contact"
          className="
            border
            border-neutral-200
            text-sm
            font-medium
            text-neutral-700
            transition-all
            hover:border-[#0F7EA8]/40
            hover:text-[#0F7EA8]
          "
          style={{
            padding: `${spacing.sm} ${spacing.md}`,
            borderRadius: radius.xl,
          }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}