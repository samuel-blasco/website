import { Project } from "@/types/project";

import { layout, radius, spacing, typography } from "@/styles/design";

import Container from "../layout/Container";
import Section from "../layout/Section";
import KnowledgeCard from "../knowledge/KnowledgeCard";
import Button from "../ui/Button";

interface Props {
  projects: Project[];
}

export default function FeaturedProjects({
  projects,
}: Props) {
  const featured = projects[0];
  const others = projects.slice(1);

  if (!featured) return null;

  return (
    <Section spacing="xl">
      <Container>
        {/* Featured Project */}
        <div
          className="overflow-hidden border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 shadow-sm"
          style={{
            borderRadius: radius.xl,
          }}
        >
          <div
            className="grid items-center lg:grid-cols-[1fr_1fr]"
            style={{
              gap: spacing.gapLarge,
              padding: spacing.cardLarge,
            }}
          >
            {/* Left */}
            <div
              className="flex flex-col justify-center"
              style={{
                maxWidth: typography.heroWidth,
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F7EA8]"
                style={{
                  marginBottom: spacing.md,
                }}
              >
                Featured Project
              </p>

              <h2
                className="font-bold tracking-[-0.04em] text-neutral-900"
                style={{
                  fontSize: typography.sectionTitle,
                  lineHeight: 1.05,
                }}
              >
                {featured.title}
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
                {featured.description}
              </p>

              <div
                style={{
                  marginTop: spacing.xl,
                }}
              >
                <Button href={`/projects/${featured.slug}`}>
                  Explore Project
                </Button>
              </div>
            </div>

            {/* Right */}
            <div
              className="flex items-center justify-center border border-neutral-200 bg-white"
              style={{
                minHeight: layout.previewHeight,
                borderRadius: radius.lg,
                padding: spacing.card,
              }}
            >
              <span className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                Project Preview
              </span>
            </div>
          </div>
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div
            style={{
              marginTop: spacing.section,
            }}
          >
            <div
              className="md:flex-row md:items-end md:justify-between"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: spacing.md,
                marginBottom: spacing.lg,
              }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F7EA8]">
                  More Projects
                </p>

                <h3
                  className="font-bold tracking-tight text-neutral-900"
                  style={{
                    marginTop: spacing.sm,
                    fontSize: "1.875rem",
                  }}
                >
                  Recent explorations
                </h3>
              </div>

              <Button
                href="/projects"
                variant="secondary"
              >
                View all
              </Button>
            </div>

            <div
              className="grid lg:grid-cols-2"
              style={{
                gap: spacing.gap,
              }}
            >
              {others.map((project) => (
                <KnowledgeCard
                  key={project.id}
                  object={project}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}