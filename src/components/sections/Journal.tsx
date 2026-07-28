import { Article } from "@/types/article";

import { radius, spacing, typography } from "@/styles/design";

import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeader from "./SectionHeader";

interface Props {
  articles: Article[];
}

export default function Journal({
  articles,
}: Props) {
  return (
    <section
      style={{
        paddingTop: spacing.section,
        paddingBottom: spacing.section,
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="Journal"
          title="From the Laboratory"
          description="Notes, ideas, experiments and technical reflections documenting my journey."
          actionLabel="Browse journal"
          actionHref="/journal"
        />

        <div
          className="divide-y divide-neutral-200 border border-neutral-200 bg-white"
          style={{
            borderRadius: radius.lg,
          }}
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="transition-colors duration-200 hover:bg-neutral-50 lg:grid-cols-[220px_1fr_auto]"
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr auto",
                gap: spacing.gap,
                padding: spacing.card,
              }}
            >
              {/* Date */}
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
                {article.date}
              </div>

              {/* Content */}
              <div
                style={{
                  maxWidth: typography.articleWidth,
                }}
              >
                <h3
                  className="font-semibold tracking-tight text-neutral-900"
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  {article.title}
                </h3>

                <p
                  className="line-clamp-3 text-neutral-600"
                  style={{
                    marginTop: spacing.md,
                    fontSize: typography.body,
                    lineHeight: 1.8,
                  }}
                >
                  {article.description}
                </p>
              </div>

              {/* CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  href={`/journal/${article.slug}`}
                  variant="secondary"
                >
                  Read
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}