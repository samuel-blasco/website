import KnowledgeGrid from "@/components/knowledge/KnowledgeGrid";

import { getSkills } from "@/lib/content";

export default function SkillsPage() {
  return (
    <KnowledgeGrid
      eyebrow="Skills"
      title="Skills"
      description="Technologies, tools and methods used throughout research and engineering projects."
      objects={getSkills()}
    />
  );
}