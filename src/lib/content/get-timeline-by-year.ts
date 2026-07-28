import { getTimeline } from "./get-timeline";
import { TimelineEvent } from "@/types/timeline";

export interface TimelineYear {
  year: string;
  events: TimelineEvent[];
}

export function getTimelineByYear(): TimelineYear[] {
  const timeline = getTimeline();

  const groups = new Map<string, TimelineEvent[]>();

  timeline.forEach((event) => {
    const year = event.start.slice(0, 4);

    if (!groups.has(year)) {
      groups.set(year, []);
    }

    groups.get(year)!.push(event);
  });

  return Array.from(groups.entries())
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([year, events]) => ({
      year,
      events: events.sort((a, b) => a.start.localeCompare(b.start)),
    }));
}