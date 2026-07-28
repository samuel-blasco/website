import { KnowledgeObject } from "@/types/knowledge-object";

export default function KnowledgeSidebar({
  object,
}: {
  object: KnowledgeObject;
}) {
  return (
    <aside className="sticky top-32 h-fit rounded-3xl border border-neutral-200 bg-white/70 p-8 backdrop-blur-md">
      <h3 className="text-lg font-semibold">
        Information
      </h3>

      <dl className="mt-8 space-y-6 text-sm">
        <div>
          <dt className="uppercase tracking-widest text-neutral-400">
            Type
          </dt>

          <dd className="mt-1 font-medium capitalize">
            {object.type}
          </dd>
        </div>

        <div>
          <dt className="uppercase tracking-widest text-neutral-400">
            Featured
          </dt>

          <dd className="mt-1">
            {object.featured ? "Yes" : "No"}
          </dd>
        </div>

        <div>
          <dt className="uppercase tracking-widest text-neutral-400">
            Related
          </dt>

          <dd className="mt-1">
            {object.related.length}
          </dd>
        </div>
      </dl>
    </aside>
  );
}