import { TimelineEvent } from "@/types/timeline";

import { educationTimeline } from "./education";
import { experienceTimeline } from "./experience";
import { researchTimeline } from "./research";

export {
  educationTimeline,
  experienceTimeline,
  researchTimeline,
};

export const timeline: TimelineEvent[] = [
  ...educationTimeline,
  ...researchTimeline,
  ...experienceTimeline,
].sort((a, b) => a.start.localeCompare(b.start));