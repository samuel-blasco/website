import { KnowledgeObject } from "@/types/knowledge-object";

import Container from "../layout/Container";
import KnowledgeHeader from "./KnowledgeHeader";
import KnowledgeBody from "./KnowledgeBody";
import KnowledgeSidebar from "./KnowledgeSidebar";
import KnowledgeRelated from "./KnowledgeRelated";

interface Props {
  object: KnowledgeObject;
}

export default function KnowledgeLayout({
  object,
}: Props) {
  return (
    <main className="pt-36 pb-32">
      <Container>
        <KnowledgeHeader object={object} />

        <div className="mt-20 grid gap-20 lg:grid-cols-[1fr_320px]">
          <KnowledgeBody object={object} />

          <KnowledgeSidebar object={object} />
        </div>

        <KnowledgeRelated object={object} />
      </Container>
    </main>
  );
}