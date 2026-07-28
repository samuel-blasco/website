import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
  object: KnowledgeObject;
}

const styles = {
  project: {
    background:
      "bg-gradient-to-br from-sky-100 via-sky-50 to-white",
    accent: "bg-sky-500",
  },

  research: {
    background:
      "bg-gradient-to-br from-violet-100 via-violet-50 to-white",
    accent: "bg-violet-500",
  },

  article: {
    background:
      "bg-gradient-to-br from-amber-100 via-orange-50 to-white",
    accent: "bg-amber-500",
  },

  collection: {
    background:
      "bg-gradient-to-br from-emerald-100 via-emerald-50 to-white",
    accent: "bg-emerald-500",
  },

  skill: {
    background:
      "bg-gradient-to-br from-cyan-100 via-cyan-50 to-white",
    accent: "bg-cyan-500",
  },

  timeline: {
    background:
      "bg-gradient-to-br from-slate-100 via-slate-50 to-white",
    accent: "bg-slate-500",
  },
};

export default function KnowledgeBanner({
  object,
}: Props) {
  const style = styles[object.type];

  return (
    <section
      className={`
        relative
        mt-16
        h-72
        overflow-hidden
        rounded-[36px]
        border
        border-neutral-200
        ${style.background}
      `}
    >
      {/* Decorative circles */}

      <div
        className={`
          absolute
          -right-16
          -top-16

          h-72
          w-72

          rounded-full

          opacity-10

          blur-3xl

          ${style.accent}
        `}
      />

      <div
        className={`
          absolute
          bottom-8
          left-8

          h-24
          w-24

          rounded-full

          opacity-20

          ${style.accent}
        `}
      />

      <div
        className={`
          absolute
          right-40
          bottom-16

          h-12
          w-12

          rounded-full

          opacity-30

          ${style.accent}
        `}
      />

      {/* Type */}

      <div className="absolute left-10 top-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
          {object.type}
        </p>
      </div>

      {/* Large title */}

      <div className="absolute bottom-10 left-10">
        <h2 className="text-4xl font-bold tracking-tight text-[#111827]">
          {object.title}
        </h2>
      </div>
    </section>
  );
}