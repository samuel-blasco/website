import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";
import Container from "../layout/Container";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Pelops",
      category: "Artificial Intelligence",
      description:
        "A modular AI assistant built around memory, reasoning and intelligent orchestration.",
      technologies: ["Python", "Ollama", "LLMs", "Knowledge Graphs"],
    },
    {
      title: "Political Trust NLP",
      category: "Computational Social Science",
      description:
        "Natural language processing methods for analysing political trust through large-scale textual datasets.",
      technologies: ["Python", "spaCy", "NLP", "Machine Learning"],
    },
    {
      title: "OpenKnit",
      category: "Digital Fabrication",
      description:
        "An open-source knitting machine project combining embedded electronics, 3D printing and software.",
      technologies: ["3D Printing", "Embedded Systems", "CAD"],
    },
  ];

  return (
    <section className="bg-[#FCFCFA] py-40" id="projects">
      <Container>
        <SectionHeader
          eyebrow="Projects"
          title="Featured projects."
          description="Selected projects exploring artificial intelligence, computational social science and intelligent systems."
        />

        <div className="space-y-10">
          {projects.map((project) => (
            <Card key={project.title}>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#0F7EA8]">
                {project.category}
              </p>

              <h3 className="mt-4 text-4xl font-bold text-[#111827]">
                {project.title}
              </h3>

              <p className="mt-6 max-w-3xl leading-8 text-gray-600">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-10">
                <Button>
                  Explore project →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}