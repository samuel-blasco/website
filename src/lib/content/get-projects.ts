import { Project } from "@/types/project";
import { projects } from "@/content/projects";

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}