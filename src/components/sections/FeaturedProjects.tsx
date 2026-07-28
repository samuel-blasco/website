import Container from "../layout/Container";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

import { Project } from "@/types/project";

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({
  projects,
}: FeaturedProjectsProps) {
  return (
    <section
      id="projects"
      className="bg-[#FCFCFA] py-40"
    >
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="Featured projects."
          description="Selected projects exploring artificial intelligence, computational social science and intelligent systems."
        />

        <div className="space-y-10">
          {projects.map((project) => (
            <Card key={project.id}>
              {project.subtitle && (
                <p className="text-sm font-semibold uppercase tracking-widest text-[#0F7EA8]">
                  {project.subtitle}
                </p>
              )}

              <h3 className="mt-4 text-4xl font-bold text-[#111827]">
                {project.title}
              </h3>

              <p className="mt-6 max-w-3xl leading-8 text-gray-600">
                {project.shortDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>
                    {technology}
                  </Badge>
                ))}
              </div>

              <div className="mt-10">
                <Button>
                  Explore project →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}