import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

export default function Curiosity() {
  const pillars = [
    {
      title: "Artificial Intelligence",
      description:
        "Designing intelligent assistants, reasoning systems and long-term memory architectures.",
    },
    {
      title: "Computational Social Science",
      description:
        "Understanding society through large-scale data, networks and natural language processing.",
    },
    {
      title: "Building Things",
      description:
        "From software to digital fabrication, I enjoy turning ideas into tangible systems.",
    },
  ];

  return (
    <section className="bg-[#FCFCFA] py-40" id="curiosity">
      <Container>
        <SectionHeader
          eyebrow="Curiosity"
          title="Curiosity drives everything."
          description="I'm fascinated by systems that learn, adapt and help us understand the world. Whether through artificial intelligence, computational social science or engineering, my goal is always the same: building intelligent systems that connect ideas rather than isolate them."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <h3 className="text-2xl font-semibold text-[#111827]">
                {pillar.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}