export interface KnowledgeObject {
  id: string;

  slug: string;

  type:
    | "project"
    | "research"
    | "article"
    | "collection"
    | "timeline"
    | "skill";

  title: string;

  shortDescription: string;

  description: string;

  tags: string[];

  related: string[];

  featured?: boolean;

  cover?: string;

  createdAt?: string;
  updatedAt?: string;
}