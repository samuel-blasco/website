import { ResearchItem } from "@/types/research";

import { layout, radius, spacing, typography } from "@/styles/design";

import Container from "../layout/Container";
import KnowledgeCard from "../knowledge/KnowledgeCard";
import SectionHeader from "./SectionHeader";
import Button from "../ui/Button";

interface Props {
  research: ResearchItem[];
}

export default function ResearchHighlights({
  research,
}: Props) {
  const featured = research[0];
  const others = research.slice(1);

  if (!featured) return null;

  return (
    <section
      style={{
        background: "#FFFFFF",
        paddingTop: spacing.section,
        paddingBottom: spacing.section,
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="Research"
          title="Current Research"
          description="Research exploring artificial intelligence, computational social science and digital humanities."
          actionLabel="View all research"
          actionHref="/research"
        />

        {/* Featured Research */}
        <div
          className="overflow-hidden border border-neutral-200 bg-white shadow-sm"
          style={{
            borderRadius: radius.lg,
            marginBottom: spacing.section,
          }}
        >
          <div
            className="lg:grid-cols-[1.3fr_0.7fr]"
            style={{
              display: "grid",
              alignItems: "center",
              gridTemplateColumns: "1.3fr 0.7fr",
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
                  width: layout.previewHeight,
                  height: layout.previewHeight,
                  maxWidth: "14rem",
                  maxHeight: "14rem",
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
            className="lg:grid-cols-2"
            style={{
              display: "grid",
              gap: spacing.gap,
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
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
    </section>
  );
}