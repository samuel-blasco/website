import Link from "next/link";

import { getResearch } from "@/lib/content";

export default function ResearchPage() {
  const research = getResearch();

  return (
    <main className="mx-auto max-w-5xl px-8 py-32">
      <h1 className="text-5xl font-bold">Research</h1>

      <div className="mt-12 space-y-8">
        {research.map((item) => (
          <article
            key={item.id}
            className="rounded-xl border p-6"
          >
            <h2 className="text-2xl font-semibold">
              <Link href={`/research/${item.slug}`}>
                {item.title}
              </Link>
            </h2>

            <p className="mt-3 text-gray-600">
              {item.shortDescription}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}