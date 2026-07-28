import { TimelineEvent } from "@/types/timeline";

export const educationTimeline: TimelineEvent[] = [
  {
    id: "timeline-oib",
    slug: "oib",
    type: "timeline",

    title: "Baccalauréat International (OIB)",
    shortDescription:
      "Graduated with highest honours and jury congratulations.",
    description:
      "Completed the International Baccalaureate Option (Spanish), developing a strong interest in mathematics, languages and the social sciences.",

    start: "2020-09",
    end: "2023-07",

    category: "education",

    location: "Saint-Germain-en-Laye, France",

    tags: ["education", "high-school"],

    related: ["cpes"],

    featured: true,
  },

  {
    id: "timeline-henri-iv",
    slug: "henri-iv",
    type: "timeline",

    title: "Classe préparatoire ECG",
    shortDescription:
      "Three months in the highly selective preparatory programme.",
    description:
      "Joined the ECG preparatory programme at Lycée Henri-IV before choosing a different academic path that eventually led me to the CPES programme.",

    start: "2023-09",
    end: "2023-12",

    category: "education",

    location: "Paris, France",

    tags: ["education"],

    related: ["cpes"],

    featured: true,
  },

  {
    id: "timeline-cpes",
    slug: "cpes",
    type: "timeline",

    title: "CPES Data Science, Society and Health",
    shortDescription:
      "Interdisciplinary honours programme at Université Paris-Saclay.",
    description:
      "Joined the CPES programme combining mathematics, computer science, social sciences and health sciences. This programme marked the beginning of my research projects in NLP and computational social science.",

    start: "2024-09",

    category: "education",

    location: "Palaiseau, France",

    tags: [
      "education",
      "data-science",
      "computer-science",
    ],

    related: [
       "author-extraction",
        
       "political-trust",
       
       "pelops",
       
       "openknit",
       
       "hacktion",
        "python",
    ],

    featured: true,
  },
];