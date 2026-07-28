import { Research } from "@/types/research";

import { layout, radius, spacing, typography } from "@/styles/design";

import Section from "../layout/Section";
import Container from "../layout/Container";
import KnowledgeCard from "../knowledge/KnowledgeCard";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

interface Props {
  research: Research[];
}

export default function ResearchHighlights({
  research,
}: Props) {
  const featured = research[0];
  const others = research.slice(1);

  if (!featured) return null;

  return (
    <Section
      spacing="lg"
      style={{
        background: "#FFFFFF",
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="Research"
          title="Current Research"
          description="Research exploring artificial intelligence, computational social science and digital humanities."
        />

        {/* Featured Research */}
        <div
          className="overflow-hidden border border-neutral-200 bg-white shadow-sm"
          style={{
            borderRadius: radius.lg,
            marginTop: spacing.section,
            marginBottom: spacing.section,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 0.7fr",
              alignItems: "center",
              gap: spacing.gapLarge,
              padding: spacing.cardLarge,
            }}
          >
            <div
              style={{
                maxWidth: typography.articleWidth,
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F7EA8]"
                style={{
                  marginBottom: spacing.md,
                }}
              >
                Featured Research
              </p>

              <h3
                className="font-bold tracking-[-0.04em] text-neutral-900"
                style={{
                  fontSize: typography.sectionTitle,
                  lineHeight: 1.05,
                }}
              >
                {featured.title}
              </h3>

              <p
                className="line-clamp-5 text-neutral-600"
                style={{
                  marginTop: spacing.lg,
                  maxWidth: typography.articleWidth,
                  fontSize: typography.largeBody,
                  lineHeight: 1.8,
                }}
              >
                {featured.description}
              </p>

              <div
                style={{
                  marginTop: spacing.xl,
                }}
              >
                <Button href={`/research/${featured.slug}`}>
                  Read Research
                </Button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="border border-neutral-200 bg-neutral-50"
                style={{
                  width: "14rem",
                  height: "14rem",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
                  Research
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Research */}
        {others.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: spacing.gap,
            }}
          >
            {others.map((item) => (
              <KnowledgeCard
                key={item.id}
                object={item}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}