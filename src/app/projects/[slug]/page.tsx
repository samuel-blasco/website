import { notFound } from "next/navigation";

import { getKnowledgeObject } from "@/lib/content";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const object = getKnowledgeObject(slug);

  if (!object || object.type !== "project") {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-8 py-32">
      <h1 className="text-5xl font-bold">
        {object.title}
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        {object.shortDescription}
      </p>

      <div className="prose mt-12 max-w-none">
        <p>{object.description}</p>
      </div>
    </main>
  );
}