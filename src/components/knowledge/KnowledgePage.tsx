import Container from "@/components/layout/Container";

import { spacing, typography } from "@/styles/design";

import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
  object: KnowledgeObject;
}

export default function KnowledgePage({
  object,
}: Props) {
  return (
    <main
      style={{
        paddingTop: spacing.section,
        paddingBottom: spacing.section,
      }}
    >
      <Container>
        {/* Hero */}
        <header
          style={{
            maxWidth: typography.articleWidth,
            marginBottom: spacing.section,
          }}
        >
          <p
            style={{
              color: "#0F7EA8",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: ".35em",
              textTransform: "uppercase",
              marginBottom: spacing.md,
            }}
          >
            {object.type}
          </p>

          <h1
            style={{
              fontSize: "4.75rem",
              lineHeight: 0.95,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              color: "#111827",
            }}
          >
            {object.title}
          </h1>

          <p
            style={{
              marginTop: spacing.xl,
              maxWidth: typography.heroWidth,
              fontSize: typography.largeBody,
              lineHeight: 1.8,
              color: "#525252",
            }}
          >
            {object.shortDescription}
          </p>
        </header>

        {/* Tags */}
        {object.tags.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: spacing.sm,
              marginBottom: spacing.section,
            }}
          >
            {object.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: `${spacing.xs} ${spacing.sm}`,
                  borderRadius: "999px",
                  border: "1px solid #E5E7EB",
                  fontSize: ".85rem",
                  color: "#525252",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Body */}
        <section
          style={{
            maxWidth: typography.articleWidth,
          }}
        >
          <p
            style={{
              fontSize: typography.body,
              lineHeight: 1.9,
              color: "#404040",
              whiteSpace: "pre-line",
            }}
          >
            {object.description}
          </p>
        </section>
      </Container>
    </main>
  );
}