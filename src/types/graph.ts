import { KnowledgeObject } from "./knowledge-object";

export interface GraphNode {
  id: string;

  type: KnowledgeObject["type"];

  label: string;

  featured?: boolean;
}

export interface GraphEdge {
  source: string;

  target: string;
}