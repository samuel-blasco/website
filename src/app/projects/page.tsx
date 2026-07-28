import Link from "next/link";

import { getProjects } from "@/lib/content";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="mx-auto max-w-5xl px-8 py-32">
      <h1 className="text-5xl font-bold">Projects</h1>

      <div className="mt-12 space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border p-6"
          >
            <h2 className="text-2xl font-semibold">
              <Link href={`/projects/${project.slug}`}>
                {project.title}
              </Link>
            </h2>

            <p className="mt-3 text-gray-600">
              {project.shortDescription}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}