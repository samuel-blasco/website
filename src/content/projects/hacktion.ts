import { Project } from "@/types/project";

export const hacktion: Project = {
  id: "hacktion",
  slug: "hacktion",
  type: "project",

  title: "Hacktion – BrainRun",

  shortDescription:
    "Developing a brain-controlled video game during a Brain–Computer Interface hackathon.",

  description: `
Hacktion was my first opportunity to work on a Brain–Computer Interface (BCI) project within a multidisciplinary team bringing together students and researchers from different backgrounds. Over the course of the hackathon, we designed BrainRun, a game controlled through EEG signals that explores how brain activity can be translated into interactive experiences.

My contribution focused on the software side of the project. I developed the game's graphical interface in Python using Pygame and worked on integrating it with the rest of the system through real-time communication protocols. The interface had to interact seamlessly with the EEG processing pipeline while remaining simple enough to support rapid experimentation throughout the event.

Beyond the technical implementation, the project introduced me to the complete workflow of a Brain–Computer Interface system: EEG acquisition, signal calibration, feature extraction, machine learning models and real-time interaction. Working alongside specialists in artificial intelligence and BCI research also provided valuable insight into how interdisciplinary teams tackle complex engineering problems.
  `,

  technologies: [
    "Python",
    "Pygame",
    "Lab Streaming Layer (LSL)",
    "UDP",
    "EEG",
  ],

  startDate: "2026-02",
  endDate: "2026-02",

  status: "completed",

  tags: [
    "Brain–Computer Interfaces",
    "Artificial Intelligence",
    "Human–Computer Interaction",
    "Machine Learning",
    "Neuroscience",
    "Hackathon",
  ],

  related: [
    "python",
    "pelops",
  ],

  featured: true,
};