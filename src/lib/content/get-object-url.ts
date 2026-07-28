import { KnowledgeObject } from "@/types/knowledge-object";

export function getObjectUrl(object: KnowledgeObject) {
  switch (object.type) {
    case "project":
      return `/projects/${object.slug}`;

    case "research":
      return `/research/${object.slug}`;

    case "article":
      return `/journal/${object.slug}`;

    case "collection":
      return `/collections/${object.slug}`;

    case "skill":
      return `/skills/${object.slug}`;

    case "timeline":
      return `/timeline/${object.slug}`;

    default:
      return "/";
  }
}