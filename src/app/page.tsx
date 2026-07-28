import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";

import Curiosity from "@/components/sections/Curiosity";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ResearchHighlights from "@/components/sections/ResearchHighlights";
import Journal from "@/components/sections/Journal";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

import {
  getFeaturedCollections,
  getFeaturedProjects,
  getFeaturedResearch,
  getFeaturedArticles,
  getTimelineByYear,
} from "@/lib/content";

export default function Home() {
  const collections = getFeaturedCollections();
  const projects = getFeaturedProjects();
  const research = getFeaturedResearch();
  const articles = getFeaturedArticles();
  const timeline = getTimelineByYear();

  return (
    <>
      <Navbar />

      <main
        style={{
          background: "#FCFCFA",
        }}
      >
        <Hero />

        <Curiosity collections={collections} />

        <FeaturedProjects projects={projects} />

        <ResearchHighlights research={research} />

        <Journal articles={articles} />

        <Timeline timeline={timeline} />

        <Contact />
      </main>
    </>
  );
}