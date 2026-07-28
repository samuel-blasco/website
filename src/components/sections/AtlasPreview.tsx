import Container from "../layout/Container";
import Button from "../ui/Button";

export default function AtlasPreview() {
  return (
    <section className="relative py-48 overflow-hidden">
      <Container>
        <div className="relative rounded-[40px] border border-neutral-200 bg-white/70 backdrop-blur-xl px-12 py-20">
          {/* Future graph */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,#0F7EA810_0%,transparent_65%)]" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F7EA8]">
              Another way to explore
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight text-[#111827]">
              Atlas
            </h2>

            <p className="mt-8 text-xl leading-9 text-neutral-600">
              Every project, article, skill and research topic belongs to the
              same interconnected knowledge graph.
            </p>

            <p className="mt-6 text-neutral-500 leading-8">
              Browse this website traditionally...
              <br />
              or explore it spatially.
            </p>

            <div className="mt-12">
              <Button href="/atlas">
                Open Atlas
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}