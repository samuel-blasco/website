import KnowledgeGrid from "@/components/knowledge/KnowledgeGrid";

import { getResearch } from "@/lib/content";

export default function ResearchPage() {
  return (
    <KnowledgeGrid
      eyebrow="Research"
      title="Research"
      description="Research projects in computational social science, natural language processing and intelligent systems."
      objects={getResearch()}
    />
  );
}