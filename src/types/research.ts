import { KnowledgeObject } from "./knowledge-object";

export interface Research extends KnowledgeObject {
  type: "research";

  laboratory?: string;

  methods: string[];

  datasets?: string[];

  publications?: string[];

  startDate?: string;

  endDate?: string;
}