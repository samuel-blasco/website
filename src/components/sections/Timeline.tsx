import { spacing, typography } from "@/styles/design";

import Container from "../layout/Container";
import Section from "../layout/Section";
import SectionHeader from "../ui/SectionHeader";

import { TimelineYear } from "@/lib/content";

interface TimelineProps {
  timeline: TimelineYear[];
}

export default function Timeline({
  timeline,
}: TimelineProps) {
  return (
    <Section
      id="timeline"
      spacing="xl"
      style={{
        background: "#FCFCFA",
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="Timeline"
          title="A journey through ideas."
          description="Every project builds on the previous one. My work evolves through research, engineering and curiosity."
        />

        <div
          style={{
            position: "relative",
            marginTop: spacing.section,
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "180px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "#e5e5e5",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: spacing.section,
            }}
          >
            {timeline.map((year) => (
              <div key={year.year}>
                {year.events.map((event, index) => (
                  <div
                    key={event.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "180px 1fr",
                      gap: spacing.gapLarge,
                    }}
                  >
                    {/* Year */}
                    <div
                      style={{
                        textAlign: "right",
                      }}
                    >
                      {index === 0 && (
                        <span
                          className="font-bold tracking-tight text-neutral-900"
                          style={{
                            fontSize: "2rem",
                          }}
                        >
                          {year.year}
                        </span>
                      )}
                    </div>

                    {/* Event */}
                    <div
                      style={{
                        position: "relative",
                        paddingBottom: spacing.xl,
                      }}
                    >
                      {/* Dot */}
                      <div
                        style={{
                          position: "absolute",
                          left: "-28px",
                          top: "8px",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          border: "4px solid #FCFCFA",
                          background: "#0F7EA8",
                          boxShadow: "0 2px 8px rgba(0,0,0,.08)",
                        }}
                      />

                      <div
                        style={{
                          maxWidth: typography.articleWidth,
                        }}
                      >
                        <h3
                          className="font-semibold text-neutral-900"
                          style={{
                            fontSize: "1.5rem",
                          }}
                        >
                          {event.title}
                        </h3>

                        <p
                          className="text-neutral-600"
                          style={{
                            marginTop: spacing.md,
                            fontSize: typography.body,
                            lineHeight: 1.8,
                          }}
                        >
                          {event.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}