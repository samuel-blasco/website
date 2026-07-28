import Link from "next/link";

import { getArticles } from "@/lib/content";

export default function JournalPage() {
  const articles = getArticles();

  return (
    <main className="mx-auto max-w-5xl px-8 py-32">
      <h1 className="text-5xl font-bold">Journal</h1>

      <div className="mt-12 space-y-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="rounded-xl border p-6"
          >
            <h2 className="text-2xl font-semibold">
              <Link href={`/journal/${article.slug}`}>
                {article.title}
              </Link>
            </h2>

            <p className="mt-3 text-gray-600">
              {article.shortDescription}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}