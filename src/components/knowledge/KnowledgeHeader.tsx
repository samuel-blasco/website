import { KnowledgeObject } from "@/types/knowledge-object";

import KnowledgeTags from "./KnowledgeTags";

interface Props {
  object: KnowledgeObject;
}

export default function KnowledgeHeader({
  object,
}: Props) {
  return (
    <header className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F7EA8]">
        {object.type}
      </p>

      <h1 className="mt-6 text-6xl font-bold tracking-tight text-[#111827]">
        {object.title}
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
        {object.shortDescription}
      </p>

      <KnowledgeTags tags={object.tags} />
    </header>
  );
}