import { spacing } from "@/styles/design";

import Section from "../layout/Section";
import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

import { Collection } from "@/types/collection";

interface CuriosityProps {
  collections: Collection[];
}

export default function Curiosity({
  collections,
}: CuriosityProps) {
  return (
    <Section
      spacing="lg"
      style={{
        background: "#FCFCFA",
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="Curiosity"
          title="Curiosity drives everything."
          description="I'm fascinated by systems that learn, adapt and help us understand the world. Whether through artificial intelligence, computational social science or engineering, my goal is always the same: building intelligent systems that connect ideas rather than isolate them."
        />

        <div
          style={{
            marginTop: spacing.section,
            borderTop: "1px solid #e5e5e5",
            paddingTop: spacing.card,
          }}
        >
          <div
            className="grid md:grid-cols-2 xl:grid-cols-3"
            style={{
              gap: spacing.gap,
            }}
          >
            {collections.map((collection) => (
              <Card key={collection.id}>
                <h3
                  className="text-[#111827]"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  {collection.title}
                </h3>

                <p
                  className="text-neutral-600"
                  style={{
                    marginTop: spacing.md,
                    lineHeight: 1.8,
                  }}
                >
                  {collection.shortDescription}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}