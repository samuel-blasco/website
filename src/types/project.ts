import { KnowledgeObject } from "./knowledge-object";

export interface Project extends KnowledgeObject {
  type: "project";

  subtitle?: string;

  technologies: string[];

  gallery?: string[];

  github?: string;

  website?: string;

  demo?: string;

  startDate?: string;

  endDate?: string;

  status?: "planned" | "ongoing" | "completed";
}