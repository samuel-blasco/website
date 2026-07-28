import Link from "next/link";

import { layout, spacing, typography } from "@/styles/design";

const navigation = [
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

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div
        style={{
          maxWidth: layout.container,
          margin: "0 auto",
          padding: `${spacing.section} ${spacing.lg}`,
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: spacing.section,
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: spacing.gapLarge,
            alignItems: "start",
          }}
        >
          <div
            style={{
              maxWidth: typography.heroWidth,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0F7EA8]">
              Digital Laboratory
            </p>

            <h2
              className="font-bold tracking-tight text-neutral-900"
              style={{
                marginTop: spacing.md,
                fontSize: typography.sectionTitle,
                lineHeight: 1.1,
              }}
            >
              Exploring Computational Social Science,
              <br />
              AI and Digital Fabrication.
            </h2>

            <p
              className="text-neutral-600"
              style={{
                marginTop: spacing.md,
                fontSize: typography.body,
                lineHeight: 1.8,
              }}
            >
              A personal laboratory documenting research, software,
              engineering and curiosity through connected knowledge.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Navigation
            </h3>

            <ul
              style={{
                marginTop: spacing.md,
                display: "flex",
                flexDirection: "column",
                gap: spacing.sm,
              }}
            >
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-lg text-neutral-600 transition-colors hover:text-[#0F7EA8]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t border-neutral-200 text-sm text-neutral-500"
          style={{
            paddingTop: spacing.md,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: spacing.md,
            flexWrap: "wrap",
          }}
        >
          <p>© {new Date().getFullYear()} Samuel Blasco</p>

          <p>Built with Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}