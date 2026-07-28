import { KnowledgeObject } from "@/types/knowledge-object";

import { getArticles } from "./get-articles";
import { getCollections } from "./get-collections";
import { getProjects } from "./get-projects";
import { getResearch } from "./get-research";
import { getSkills } from "./get-skills";
import { getTimeline } from "./get-timeline";

export function getKnowledgeObjects(): KnowledgeObject[] {
  return [
    ...getProjects(),
    ...getResearch(),
    ...getArticles(),
    ...getCollections(),
    ...getSkills(),
    ...getTimeline(),
  ];
}