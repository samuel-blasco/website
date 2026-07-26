import Container from "../layout/Container";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

export default function ResearchHighlights() {
  const research = [
    {
      title: "Political Trust & NLP",
      laboratory: "CEVIPOF",
      description:
        "Developing NLP methods to analyse political trust through large-scale textual data.",
      tags: ["NLP", "Political Science", "Python"],
    },
    {
      title: "Author Extraction Pipeline",
      laboratory: "CREST",
      description:
        "Designing a scalable pipeline to identify and normalize newspaper authors from hundreds of thousands of articles.",
      tags: ["Machine Learning", "NER", "Data Cleaning"],
    },
  ];

  return (
    <section className="bg-[#FCFCFA] py-40" id="research">
      <Container>
        <SectionHeader
          eyebrow="Research"
          title="Research highlights."
          description="My work focuses on computational social science, natural language processing and intelligent systems."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {research.map((item) => (
            <Card key={item.title}>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#0F7EA8]">
                {item.laboratory}
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-[#111827]">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {item.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}