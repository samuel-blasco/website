import { notFound } from "next/navigation";

import KnowledgePage from "@/components/knowledge/KnowledgePage";

import { getKnowledgeObject } from "@/lib/content";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ResearchItemPage({
  params,
}: Props) {
  const { slug } = await params;

  const object = getKnowledgeObject(slug);

  if (!object || object.type !== "research") {
    notFound();
  }

  return <KnowledgePage object={object} />;
}