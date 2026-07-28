import { Skill } from "@/types/skill";
import { skills } from "@/content/skills";

export function getSkills(): Skill[] {
  return skills;
}

export function getFeaturedSkills(): Skill[] {
  return skills.filter((skill) => skill.featured);
}