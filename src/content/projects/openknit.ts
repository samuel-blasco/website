import { Project } from "@/types/project";

export const openknit: Project = {
  id: "openknit",
  slug: "openknit",
  type: "project",

  title: "OpenKnit",

  shortDescription:
    "Developing an open-source digital knitting machine and software ecosystem for accessible textile fabrication.",

  description: `
OpenKnit is an open-source hardware project exploring how digital fabrication can make textile production more accessible. The objective is to design a programmable knitting machine that combines affordable hardware with intuitive software while remaining fully open for modification and improvement.

The project goes beyond reproducing an existing machine. It aims to rethink the complete ecosystem, from mechanical design and embedded electronics to pattern generation, machine control and user experience. Accessibility, repairability and extensibility are central design principles throughout the development process.

OpenKnit also represents an opportunity to explore fields that extend well beyond software engineering, including mechanical design, electronics, embedded systems and computer-aided manufacturing. Bringing these disciplines together makes the project both a technical challenge and a learning experience.

In the long term, the ambition is to contribute to an open ecosystem where makers, researchers and designers can collaboratively improve digital knitting technologies and lower the barriers to textile innovation.
  `,

  technologies: [
    "Fusion 360",
    "OpenSCAD",
    "3D Printing",
    "Embedded Systems",
    "Microcontrollers",
  ],

  startDate: "2026-07",

  status: "ongoing",

  tags: [
    "Digital Fabrication",
    "Open Source",
    "Embedded Systems",
    "Mechanical Design",
    "Electronics",
    "Textile Engineering",
  ],

  related: [
    "pelops",
    "python",
  ],

  featured: true,
};