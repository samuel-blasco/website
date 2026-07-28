import Link from "next/link";

import { KnowledgeObject } from "@/types/knowledge-object";

interface Props {
  object: KnowledgeObject;
}

const labels = {
  project: "Projects",
  research: "Research",
  article: "Journal",
  collection: "Collections",
  skill: "Skills",
  timeline: "Timeline",
};

export default function KnowledgeBreadcrumb({
  object,
}: Props) {
  const section = labels[object.type];

  return (
    <nav className="mb-12 flex items-center gap-3 text-sm text-neutral-500">
      <Link
        href="/"
        className="transition-colors hover:text-[#111827]"
      >
        Home
      </Link>

      <span>/</span>

      <Link
        href={`/${object.type === "article" ? "journal" : `${object.type}s`}`}
        className="transition-colors hover:text-[#111827]"
      >
        {section}
      </Link>

      <span>/</span>

      <span className="font-medium text-[#111827]">
        {object.title}
      </span>
    </nav>
  );
}