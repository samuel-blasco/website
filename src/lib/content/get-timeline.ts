import { TimelineEvent } from "@/types/timeline";
import { timeline } from "@/content/timeline";

export function getTimeline(): TimelineEvent[] {
  return timeline;
}