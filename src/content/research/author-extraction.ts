import { Research } from "@/types/research";

export const authorExtraction: Research = {
  id: "author-extraction",
  slug: "author-extraction",
  type: "research",

  title: "Author Extraction",

  shortDescription:
    "Building robust information extraction pipelines to identify and normalize author names in large-scale news corpora.",

  description: `
Understanding who writes the news is a prerequisite for studying media ecosystems, journalistic practices and political communication. Yet, identifying authors at scale is surprisingly difficult. News articles often contain inconsistent metadata, agency names, editorial desks, duplicated names or formatting artefacts that make straightforward extraction unreliable.

During my research at CREST, I worked on designing a pipeline capable of transforming noisy author metadata into structured and reliable information. The objective was not simply to recognize names, but to distinguish journalists from news agencies, editorial services and various forms of noise while preserving as much useful information as possible.

The project combines rule-based methods, Named Entity Recognition, fuzzy matching and Large Language Models to progressively improve extraction quality. Particular attention is given to scalability, allowing the pipeline to process hundreds of thousands of newspaper articles efficiently while maintaining high precision.

Beyond author extraction itself, this work explores a broader question: how can hybrid information extraction systems combine deterministic rules with modern language models to produce reliable structured data for computational social science.
  `,

  laboratory: "CREST – ENSAE",

  methods: [
    "Regular Expressions",
    "Named Entity Recognition",
    "Fuzzy Matching",
    "Large Language Models",
    "Rule-based Information Extraction",
  ],

  datasets: [
    "Spanish Political News Corpus (1995–2025)",
  ],

  startDate: "2026-06",
  endDate: "2026-06",

  tags: [
    "Natural Language Processing",
    "Information Extraction",
    "Named Entity Recognition",
    "Computational Social Science",
    "Large Language Models",
    "Python",
  ],

  related: [
    "crest",
    "political-trust",
    "python",
    "nlp",
    "knowledge-graphs",
  ],

  featured: true,
};