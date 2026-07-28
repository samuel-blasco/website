import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import KnowledgeCard from "./KnowledgeCard";

import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  objects: KnowledgeObject[];
}

export default function KnowledgeGrid({
  eyebrow,
  title,
  description,
  objects,
}: Props) {
  return (
    <section className="py-40">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="mt-28">
          {/* Résultat */}
          <div className="mb-12 flex items-center justify-between">
            <p className="text-sm font-medium text-neutral-500">
              {objects.length} {objects.length > 1 ? "items" : "item"}
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
            {objects.map((object) => (
              <KnowledgeCard
                key={object.id}
                object={object}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}