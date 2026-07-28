import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-8 text-center">
        {/* Eyebrow */}
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.45em] text-[#0F7EA8]">
          DIGITAL LABORATORY
        </p>

        {/* Name */}
        <h1 className="text-6xl font-bold leading-[0.9] tracking-[-0.07em] text-[#111827] sm:text-7xl lg:text-8xl xl:text-9xl">
          Samuel Blasco
        </h1>

        {/* Subtitle */}
        <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-600 md:text-2xl">
          Building a connected laboratory where research, software,
          artificial intelligence and digital fabrication become part of a
          single evolving knowledge graph.
        </p>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap justify-center gap-5">
          <Button href="/atlas">
            Explore Atlas
          </Button>

          <Button
            href="/projects"
            variant="secondary"
          >
            Browse Projects
          </Button>
        </div>

        {/* Domains */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-5 text-sm font-medium uppercase tracking-[0.22em] text-neutral-500">
          <span>Artificial Intelligence</span>

          <span className="opacity-30">•</span>

          <span>Computational Social Science</span>

          <span className="opacity-30">•</span>

          <span>Knowledge Graphs</span>

          <span className="opacity-30">•</span>

          <span>Digital Fabrication</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="mb-3 text-[11px] uppercase tracking-[0.35em] text-neutral-400">
            Scroll
          </span>

          <div className="h-14 w-px bg-gradient-to-b from-neutral-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}