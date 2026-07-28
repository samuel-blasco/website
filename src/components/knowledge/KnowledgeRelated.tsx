import Link from "next/link";

import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
  object: KnowledgeObject;
}

export default function KnowledgeRelated({
  object,
}: Props) {
  return (
    <section className="mt-32">
      <h2 className="text-3xl font-bold text-[#111827]">
        Related Knowledge
      </h2>

      <div className="mt-8 flex flex-wrap gap-3">
        {object.related.map((related) => (
          <Link
            key={related}
            href={`/atlas/${related}`}
            className="
              rounded-full
              border
              border-neutral-200
              bg-white
              px-4
              py-2
              text-sm
              transition
              hover:border-[#0F7EA8]
              hover:text-[#0F7EA8]
            "
          >
            {related}
          </Link>
        ))}
      </div>
    </section>
  );
}