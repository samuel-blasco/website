import { Research } from "@/types/research";
import { research } from "@/content/research";

export function getResearch(): Research[] {
  return research;
}

export function getFeaturedResearch(): Research[] {
  return research.filter((item) => item.featured);
}