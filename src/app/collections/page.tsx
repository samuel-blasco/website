import KnowledgeGrid from "@/components/knowledge/KnowledgeGrid";

import { getCollections } from "@/lib/content";

export default function CollectionsPage() {
  return (
    <KnowledgeGrid
      eyebrow="Collections"
      title="Knowledge Collections"
      description="Groups of interconnected knowledge objects organized around major themes."
      objects={getCollections()}
    />
  );
}