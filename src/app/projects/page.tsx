import KnowledgeGrid from "@/components/knowledge/KnowledgeGrid";

import { getProjects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <KnowledgeGrid
      eyebrow="Projects"
      title="Engineering Projects"
      description="A collection of software, artificial intelligence and digital fabrication projects."
      objects={getProjects()}
    />
  );
}