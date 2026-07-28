import Link from "next/link";

import { getCollections } from "@/lib/content";

export default function CollectionsPage() {
  const collections = getCollections();

  return (
    <main className="mx-auto max-w-5xl px-8 py-32">
      <h1 className="text-5xl font-bold">Collections</h1>

      <div className="mt-12 space-y-8">
        {collections.map((collection) => (
          <article
            key={collection.id}
            className="rounded-xl border p-6"
          >
            <h2 className="text-2xl font-semibold">
              <Link href={`/collections/${collection.slug}`}>
                {collection.title}
              </Link>
            </h2>

            <p className="mt-3 text-gray-600">
              {collection.shortDescription}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}