import { layout, spacing, typography } from "@/styles/design";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <header
      style={{
        maxWidth: layout.container,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          maxWidth: typography.articleWidth,
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F7EA8]">
          {eyebrow}
        </p>

        <h2
          className="font-semibold tracking-[-0.04em] text-[#111827]"
          style={{
            marginTop: spacing.md,
            fontSize: typography.sectionTitle,
            lineHeight: 1.05,
          }}
        >
          {title}
        </h2>

        <p
          className="text-neutral-600"
          style={{
            marginTop: spacing.lg,
            maxWidth: typography.heroWidth,
            fontSize: typography.largeBody,
            lineHeight: 1.8,
          }}
        >
          {description}
        </p>
      </div>
    </header>
  );
}