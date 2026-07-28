import Container from "../layout/Container";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

import { Research } from "@/types/research";

interface ResearchHighlightsProps {
  research: Research[];
}

export default function ResearchHighlights({
  research,
}: ResearchHighlightsProps) {
  return (
    <section
      id="research"
      className="bg-[#FCFCFA] py-40"
    >
      <Container>
        <SectionHeader
          eyebrow="Research"
          title="Research highlights."
          description="My work focuses on computational social science, natural language processing and intelligent systems."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {research.map((item) => (
            <Card key={item.id}>
              {item.laboratory && (
                <p className="text-sm font-semibold uppercase tracking-widest text-[#0F7EA8]">
                  {item.laboratory}
                </p>
              )}

              <h3 className="mt-4 text-3xl font-semibold text-[#111827]">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {item.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.methods.map((method) => (
                  <Badge key={method}>
                    {method}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}