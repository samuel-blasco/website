import { Skill } from "@/types/skill";

export const python: Skill = {
  id: "python",
  slug: "python",
  type: "skill",

  title: "Python",

  shortDescription:
    "My primary programming language for data analysis, Natural Language Processing and software development.",

  description: `
Python is the language I use for the vast majority of my projects, from data analysis and research to software development. Most of my work relies on pandas for manipulating structured datasets and regular expressions for parsing, cleaning and extracting information from large collections of text.

Through my research projects, I have built data processing pipelines, developed information extraction tools and automated analysis workflows involving hundreds of thousands of documents. These experiences have made Python the foundation of my technical work.

Beyond the core language, I have introductory experience with several libraries and frameworks. I have used spaCy for Named Entity Recognition and text processing, scikit-learn for basic machine learning workflows, and Ollama's Python API to integrate and experiment with local Large Language Models in modular applications.
  `,

  tags: [
    "Programming",
    "Python",
    "Data Analysis",
    "Natural Language Processing",
    "Machine Learning",
  ],

  related: [
    "author-extraction",
    "political-trust",
    "pelops",
    "crest",
    "hacktion",
  ],

  level: "advanced",

  category: "language",

  featured: true,
};