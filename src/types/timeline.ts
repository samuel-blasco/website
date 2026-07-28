import { KnowledgeObject } from "./knowledge-object";

export interface TimelineEvent extends KnowledgeObject {
  type: "timeline";

  start: string;

  end?: string;

  category:
    | "education"
    | "research"
    | "experience"
    | "project"
    | "award"
    | "volunteering";

  location?: string;
}