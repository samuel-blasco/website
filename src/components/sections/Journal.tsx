import Container from "../layout/Container";
import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

import { Article } from "@/types/article";

interface JournalProps {
  articles: Article[];
}

export default function Journal({
  articles,
}: JournalProps) {
  return (
    <section
      id="journal"
      className="bg-[#FCFCFA] py-40"
    >
      <Container>
        <SectionHeader
          eyebrow="Journal"
          title="Notes from the laboratory."
          description="A collection of ideas, experiments and lessons learned while building intelligent systems."
        />

        <div className="space-y-8">
          {articles.map((article) => (
            <Card key={article.id}>
              <div className="flex items-center gap-3 text-sm text-[#0F7EA8]">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readingTime}</span>
              </div>

              <h3 className="mt-5 text-3xl font-semibold text-[#111827]">
                {article.title}
              </h3>

              <p className="mt-5 max-w-3xl leading-8 text-gray-600">
                {article.shortDescription}
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