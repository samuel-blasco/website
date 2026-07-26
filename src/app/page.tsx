import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/hero/Hero";

import Curiosity from "@/components/sections/Curiosity";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ResearchHighlights from "@/components/sections/ResearchHighlights";
import Journal from "@/components/sections/Journal";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FCFCFA]">
        <Hero />

        <Curiosity />

        <FeaturedProjects />

        <ResearchHighlights />

        <Journal />

        <Timeline />

        <Contact />
      </main>
    </>
  );
}