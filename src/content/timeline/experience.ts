import { TimelineEvent } from "@/types/timeline";

export const experienceTimeline: TimelineEvent[] = [
  {
    id: "timeline-gap-year",
    slug: "gap-year",
    type: "timeline",

    title: "Gap Year",
    shortDescription:
      "Travelling, professional experience and academic reflection.",
    description:
      "Spent a year travelling, working and refining my academic goals before joining the CPES programme.",

    start: "2024-01",
    end: "2024-08",

    category: "experience",

    tags: ["travel"],

    related: [
      "china-exchange",
      "bureau-vallee-2024",
      "cpes",
    ],

    featured: true,
  },

  {
    id: "timeline-china-exchange",
    slug: "china-exchange",
    type: "timeline",

    title: "Chinese Bridge Cultural Exchange",
    shortDescription:
      "Academic and cultural exchange in China.",
    description:
      "Participated in the Chinese Bridge programme at Shandong First Medical University, discovering Chinese academic life and strengthening intercultural communication skills.",

    start: "2024-04",
    end: "2024-04",

    category: "experience",

    location: "Tai'an, China",

    tags: [
      "china",
      "culture",
      "exchange",
    ],

    related: ["languages"],

    featured: true,
  },

  {
    id: "timeline-bureau-vallee-2024",
    slug: "bureau-vallee-2024",
    type: "timeline",

    title: "Customer Service Assistant",
    shortDescription:
      "Summer position at Bureau Vallée.",
    description:
      "Worked in customer service, cash register management and printing services.",

    start: "2024-07",
    end: "2024-08",

    category: "experience",

    location: "Orgeval, France",

    tags: ["retail"],

    related: [],

    featured: false,
  },

  {
    id: "timeline-izivia",
    slug: "izivia",
    type: "timeline",

    title: "Data Analyst Intern — IZIVIA",
    shortDescription:
      "SQL and dashboard development.",
    description:
      "Developed SQL queries and interactive dashboards while contributing to report migration within an agile Scrum environment.",

    start: "2025-07",
    end: "2025-07",

    category: "experience",

    location: "Courbevoie, France",

    tags: [
      "sql",
      "data-analysis",
    ],

    related: ["sql"],

    featured: true,
  },

  {
    id: "timeline-hacktion",
    slug: "hacktion",
    type: "timeline",

    title: "Hacktion",
    shortDescription:
      "Brain–Computer Interface hackathon.",
    description:
      "Developed the graphical interface of BrainRun, a game controlled through EEG signals during a Brain–Computer Interface hackathon.",

    start: "2026-02",
    end: "2026-02",

    category: "project",

    location: "Paris, France",

    tags: [
      "bci",
      "python",
    ],

    related: ["hacktion"],

    featured: true,
  },

  {
    id: "timeline-bureau-vallee-2026",
    slug: "bureau-vallee-2026",
    type: "timeline",

    title: "Customer Service Assistant",
    shortDescription:
      "Second summer position at Bureau Vallée.",
    description:
      "Returned for a second summer while simultaneously developing Pelops and OpenKnit.",

    start: "2026-07",
    end: "2026-08",

    category: "experience",

    location: "Orgeval, France",

    tags: ["retail"],

    related: [
      "pelops",
      "openknit",
    ],
  },
];