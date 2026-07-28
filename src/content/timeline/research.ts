import { TimelineEvent } from "@/types/timeline";

export const researchTimeline: TimelineEvent[] = [
  {
    id: "timeline-cevipof",
    slug: "cevipof",
    type: "timeline",

    title: "Research Intern — CEVIPOF",
    shortDescription:
      "Natural Language Processing for political trust research.",
    description:
      "Applied NLP techniques to qualitative interviews for the French Political Trust Barometer and explored applications of AI in computational social science.",

    start: "2025-06",
    end: "2025-06",

    category: "research",

    location: "Paris, France",

    tags: [
      "research",
      "nlp",
      "computational-social-science",
    ],

    related: [
      "political-trust",
      "nlp",
    ],

    featured: true,
  },

  {
    id: "timeline-crest",
    slug: "crest",
    type: "timeline",

    title: "Research Assistant — CREST",
    shortDescription:
      "Information extraction for computational social science.",
    description:
      "Worked on multilingual quotation extraction and author extraction pipelines for large-scale political news corpora.",

    start: "2026-06",
    end: "2026-06",

    category: "research",

    location: "Palaiseau, France",

    tags: [
      "research",
      "information-extraction",
      "nlp",
    ],

    related: [
      "author-extraction",
      "knowledge-graphs",
    ],

    featured: true,
  },
];