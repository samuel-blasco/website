import { Collection } from "@/types/collection";

export const knowledgeGraphs: Collection = {
  id: "knowledge-graphs",
  slug: "knowledge-graphs",
  type: "collection",

  title: "Knowledge Graphs",

  shortDescription:
    "Representing knowledge as interconnected entities rather than isolated documents.",

  description: `
Knowledge Graphs provide a way of organizing information through relationships rather than hierarchies. This idea has become one of the foundations of both my personal projects and this website itself.

Instead of viewing projects, articles and research as independent pieces of content, I am interested in modelling them as connected knowledge objects that reveal unexpected relationships and encourage exploration.

This collection brings together projects related to knowledge representation, graph-based navigation, personal knowledge management and intelligent information systems.
  `,

  tags: [
    "Knowledge Graphs",
    "Knowledge Representation",
    "Personal Knowledge Management",
  ],

  related: [
    "pelops",
    "author-extraction",
    "python",
  ],

  featured: true,
};