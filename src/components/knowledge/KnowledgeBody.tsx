import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
  object: KnowledgeObject;
}

export default function KnowledgeBody({
  object,
}: Props) {
  const paragraphs = object.description
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean);

  return (
    <article className="max-w-none">

      <div
        className="
          prose
          prose-neutral

          max-w-none

          prose-p:text-lg
          prose-p:leading-9
          prose-p:text-neutral-700

          prose-headings:font-bold
          prose-headings:text-[#111827]

          prose-h2:mt-20
          prose-h2:mb-8

          prose-h3:mt-14
          prose-h3:mb-6

          prose-strong:text-[#111827]

          prose-a:text-[#0F7EA8]

          prose-ul:my-8
          prose-li:my-2
        "
      >
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}