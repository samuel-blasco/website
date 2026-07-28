import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

import { TimelineYear } from "@/lib/content";

interface TimelineProps {
  timeline: TimelineYear[];
}

export default function Timeline({
  timeline,
}: TimelineProps) {
  return (
    <section
      id="timeline"
      className="bg-[#FCFCFA] py-40"
    >
      <Container>
        <SectionHeader
          eyebrow="Timeline"
          title="A journey through ideas."
          description="Every project builds on the previous one. My work evolves through research, engineering and curiosity."
        />

        <div className="space-y-20">
          {timeline.map((year) => (
            <div key={year.year}>
              <h2 className="mb-10 text-4xl font-bold text-[#111827]">
                {year.year}
              </h2>

              <div className="relative border-l border-[#D8E4EA]">
                {year.events.map((event) => (
                  <div
                    key={event.id}
                    className="relative mb-12 ml-10"
                  >
                    <div className="absolute -left-[46px] top-2 h-4 w-4 rounded-full border-2 border-[#0F7EA8] bg-[#FCFCFA]" />

                    <h3 className="text-2xl font-semibold text-[#111827]">
                      {event.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-8 text-gray-600">
                      {event.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}