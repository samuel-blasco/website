import { getKnowledgeObjects } from "./get-knowledge-objects";

export function getKnowledgeObject(slug: string) {
  return getKnowledgeObjects().find(
    (object) => object.slug === slug
  );
}