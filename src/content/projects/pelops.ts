import { Project } from "@/types/project";

export const pelops: Project = {
  id: "pelops",
  slug: "pelops",
  type: "project",

  title: "Pelops",

  shortDescription:
    "Designing a modular personal AI assistant built around reasoning, memory and extensible tools.",

  description: `
Pelops is my long-term exploration of what a truly personal AI assistant could become. Rather than focusing solely on conversational abilities, the project aims to build an architecture capable of reasoning, remembering and interacting with external tools in a structured and transparent way.

The system is designed around independent modules responsible for language models, memory, reasoning and tool execution. This modular approach makes it possible to experiment with different models and capabilities without changing the overall architecture.

Beyond the assistant itself, Pelops serves as a research platform for topics such as memory systems, agent architectures, knowledge representation and local language models. It provides an environment where new ideas can be tested incrementally while remaining understandable and maintainable.

Ultimately, the objective is not simply to create another chatbot, but to develop an extensible cognitive system capable of assisting long-term projects, organizing knowledge and supporting everyday intellectual work.
  `,

  technologies: [
    "Python",
    "Ollama",
    "SQLite",
    "Git",
    "Markdown",
  ],

  startDate: "2026-07",

  status: "ongoing",

  tags: [
    "Artificial Intelligence",
    "Large Language Models",
    "Agent Systems",
    "Knowledge Graphs",
    "Memory Systems",
    "Personal Knowledge Management",
  ],

  related: [
    "python",
    "author-extraction",
    "hacktion",
  ],

  featured: true,
};