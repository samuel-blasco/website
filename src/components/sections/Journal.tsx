import Container from "../layout/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function Journal() {
  const articles = [
    {
      date: "July 2026",
      readingTime: "5 min",
      title: "Building Pelops: Designing a Personal AI",
      excerpt:
        "Thoughts on memory systems, modular architectures and building an AI assistant from scratch.",
    },
    {
      date: "June 2026",
      readingTime: "8 min",
      title: "Cleaning Hundreds of Thousands of Newspaper Authors",
      excerpt:
        "Lessons learned while building an author extraction pipeline for computational social science.",
    },
    {
      date: "May 2026",
      readingTime: "4 min",
      title: "Why Knowledge Graphs Matter",
      excerpt:
        "Exploring how knowledge graphs can become the backbone of intelligent systems and research tools.",
    },
  ];

  return (
    <section className="bg-[#FCFCFA] py-40" id="journal">
      <Container>
        <SectionHeader
          eyebrow="Journal"
          title="Notes from the laboratory."
          description="A collection of ideas, experiments and lessons learned while building intelligent systems."
        />

        <div className="space-y-8">
          {articles.map((article) => (
            <Card key={article.title}>
              <div className="flex items-center gap-3 text-sm text-[#0F7EA8]">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>

              <h3 className="mt-5 text-3xl font-semibold text-[#111827]">
                {article.title}
              </h3>

              <p className="mt-5 max-w-3xl leading-8 text-gray-600">
                {article.excerpt}
              </p>

              <div className="mt-8">
                <Button>
                  Read article →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}