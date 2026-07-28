import Link from "next/link";

import { getSkills } from "@/lib/content";

export default function SkillsPage() {
  const skills = getSkills();

  return (
    <main className="mx-auto max-w-5xl px-8 py-32">
      <h1 className="text-5xl font-bold">Skills</h1>

      <div className="mt-12 space-y-8">
        {skills.map((skill) => (
          <article
            key={skill.id}
            className="rounded-xl border p-6"
          >
            <h2 className="text-2xl font-semibold">
              <Link href={`/skills/${skill.slug}`}>
                {skill.title}
              </Link>
            </h2>

            <p className="mt-3 text-gray-600">
              {skill.shortDescription}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}