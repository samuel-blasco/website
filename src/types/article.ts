import { KnowledgeObject } from "./knowledge-object";

export interface Article extends KnowledgeObject {
  type: "article";

  date: string;

  readingTime: string;

  author?: string;

  published?: boolean;
}