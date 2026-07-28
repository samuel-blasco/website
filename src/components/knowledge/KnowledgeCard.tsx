import Link from "next/link";

import { layout, radius, spacing, typography } from "@/styles/design";

import Badge from "../ui/Badge";

import { getObjectUrl } from "@/lib/content";
import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
  object: KnowledgeObject;
}

export default function KnowledgeCard({
  object,
}: Props) {
  return (
    <Link
      href={getObjectUrl(object)}
      className="
        group
        flex
        flex-col

        border
        border-neutral-200

        bg-white

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-[#0F7EA8]/30
        hover:shadow-2xl
      "
      style={{
        minHeight: "420px",
        borderRadius: radius.lg,
        padding: spacing.card,
      }}
    >
      {/* Header */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F7EA8]">
          {object.type}
        </p>

        <div
          className="
            h-px
            bg-neutral-200

            transition-all

            group-hover:bg-[#0F7EA8]
            group-hover:w-20
          "
          style={{
            marginTop: spacing.md,
            width: "3rem",
          }}
        />
      </div>

      {/* Title */}
      <h3
        className="
          font-bold
          tracking-tight
          text-neutral-900

          transition-colors
          duration-300

          group-hover:text-[#0F7EA8]
        "
        style={{
          marginTop: spacing.lg,
          fontSize: "1.875rem",
          lineHeight: 1.2,
        }}
      >
        {object.title}
      </h3>

      {/* Description */}
      <p
        className="
          flex-1
          line-clamp-4
          text-neutral-600
        "
        style={{
          marginTop: spacing.md,
          fontSize: typography.body,
          lineHeight: 1.8,
          maxWidth: typography.articleWidth,
        }}
      >
        {object.shortDescription}
      </p>

      {/* Tags */}
      <div
        style={{
          marginTop: spacing.lg,
          display: "flex",
          flexWrap: "wrap",
          gap: spacing.xs,
        }}
      >
        {object.tags.slice(0, 3).map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {/* Footer */}
      <div
        className="
          border-t
          border-neutral-100
        "
        style={{
          marginTop: spacing.lg,
          paddingTop: spacing.card,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="text-sm font-medium text-neutral-500">
          Explore
        </span>

        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}