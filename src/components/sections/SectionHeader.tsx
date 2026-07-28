import Link from "next/link";

import { layout, spacing, typography } from "@/styles/design";

interface Props {
  eyebrow: string;
  title: string;
  description: string;

  actionLabel?: string;
  actionHref?: string;

  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  centered = false,
}: Props) {
  if (centered) {
    return (
      <header
        style={{
          maxWidth: "64rem",
          margin: `0 auto ${spacing.section} auto`,
          textAlign: "center",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0F7EA8]">
          {eyebrow}
        </p>

        <h2
          className="font-bold tracking-[-0.05em] text-neutral-900"
          style={{
            marginTop: spacing.md,
            fontSize: "4rem",
            lineHeight: 0.95,
          }}
        >
          {title}
        </h2>

        <p
          className="mx-auto text-neutral-600"
          style={{
            marginTop: spacing.lg,
            maxWidth: typography.heroWidth,
            fontSize: typography.body,
            lineHeight: 1.8,
          }}
        >
          {description}
        </p>

        {actionLabel && actionHref && (
          <Link
            href={actionHref}
            className="inline-flex text-sm font-semibold text-[#0F7EA8] transition-colors hover:text-[#0B6588]"
            style={{
              marginTop: spacing.lg,
            }}
          >
            {actionLabel} →
          </Link>
        )}
      </header>
    );
  }

  return (
    <header
      style={{
        marginBottom: spacing.section,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          alignItems: "end",
          gap: spacing.gapLarge,
        }}
      >
        {/* Left */}
        <div
          style={{
            gridColumn: "span 6",
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0F7EA8]">
            {eyebrow}
          </p>

          <h2
            className="font-bold tracking-[-0.05em] text-neutral-900"
            style={{
              marginTop: spacing.md,
              maxWidth: typography.articleWidth,
              fontSize: "4rem",
              lineHeight: 0.95,
            }}
          >
            {title}
          </h2>
        </div>

        {/* Right */}
        <div
          style={{
            gridColumn: "8 / span 5",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: spacing.md,
          }}
        >
          <p
            className="text-neutral-600"
            style={{
              maxWidth: typography.heroWidth,
              fontSize: typography.body,
              lineHeight: 1.8,
            }}
          >
            {description}
          </p>

          {actionLabel && actionHref && (
            <Link
              href={actionHref}
              className="text-sm font-semibold text-[#0F7EA8] transition-colors hover:text-[#0B6588]"
            >
              {actionLabel} →
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}