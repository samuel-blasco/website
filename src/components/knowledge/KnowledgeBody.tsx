import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
  object: KnowledgeObject;
}

export default function KnowledgeBody({
  object,
}: Props) {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="whitespace-pre-line">
        {object.description}
      </p>
    </article>
  );
}