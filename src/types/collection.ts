import { KnowledgeObject } from "./knowledge-object";

export interface Collection extends KnowledgeObject {
  type: "collection";

  icon?: string;

  color?: string;
}