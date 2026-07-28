import KnowledgeGrid from "@/components/knowledge/KnowledgeGrid";

import { getArticles } from "@/lib/content";

export default function JournalPage() {
  return (
    <KnowledgeGrid
      eyebrow="Journal"
      title="Journal"
      description="Ideas, technical notes and research articles documenting the evolution of the laboratory."
      objects={getArticles()}
    />
  );
}