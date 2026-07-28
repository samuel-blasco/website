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
    <section
      id="curiosity"
      className="bg-[#FCFCFA] py-40"
    >
      <Container>
        <SectionHeader
          eyebrow="Curiosity"
          title="Curiosity drives everything."
          description="I'm fascinated by systems that learn, adapt and help us understand the world. Whether through artificial intelligence, computational social science or engineering, my goal is always the same: building intelligent systems that connect ideas rather than isolate them."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {collections.map((collection) => (
            <Card key={collection.id}>
              <h3 className="text-2xl font-semibold text-[#111827]">
                {collection.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {collection.shortDescription}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}