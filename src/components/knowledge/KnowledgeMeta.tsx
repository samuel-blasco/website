import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
  object: KnowledgeObject;
}

export default function KnowledgeMeta({
  object,
}: Props) {
  return (
    <aside
      className="
        sticky
        top-32

        h-fit

        rounded-[28px]

        border
        border-neutral-200

        bg-white/70
        backdrop-blur-xl

        p-8

        shadow-lg
        shadow-black/5
      "
    >
      <h3 className="text-lg font-semibold text-[#111827]">
        Information
      </h3>

      <div className="mt-8 space-y-7">

        <Info
          label="Type"
          value={capitalize(object.type)}
        />

        <Info
          label="Featured"
          value={object.featured ? "Yes" : "No"}
        />

        <Info
          label="Tags"
          value={`${object.tags.length}`}
        />

        <Info
          label="Related"
          value={`${object.related.length}`}
        />

        {object.createdAt && (
          <Info
            label="Created"
            value={object.createdAt}
          />
        )}

        {object.updatedAt && (
          <Info
            label="Updated"
            value={object.updatedAt}
          />
        )}

      </div>

      <div className="mt-10 border-t border-neutral-100 pt-8">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Tags
        </p>

        <div className="flex flex-wrap gap-2">
          {object.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                bg-sky-50
                px-3
                py-1.5
                text-xs
                font-medium
                text-[#0F7EA8]
              "
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </aside>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-neutral-500">
        {label}
      </span>

      <span className="font-medium text-[#111827]">
        {value}
      </span>
    </div>
  );
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}