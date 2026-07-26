import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import BackgroundGraph from "@/components/graph/BackgroundGraph";

export default function Home() {
  return (
    <>
      <BackgroundGraph />

      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}