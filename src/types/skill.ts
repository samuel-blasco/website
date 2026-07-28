import { KnowledgeObject } from "./knowledge-object";

export interface Skill extends KnowledgeObject {
  type: "skill";

  level?:
    | "beginner"
    | "intermediate"
    | "advanced"
    | "expert";

  category?:
    | "language"
    | "framework"
    | "library"
    | "tool"
    | "database"
    | "machine-learning";
}