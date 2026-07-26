import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

export default function Timeline() {
  const events = [
    {
      year: "2023",
      title: "Henri IV",
      description:
        "Classe préparatoire ECG avant de rejoindre le CPES de l'Université Paris-Saclay.",
    },
    {
      year: "2024",
      title: "CPES Paris-Saclay",
      description:
        "Début du CPES Data Science, Société et Santé.",
    },
    {
      year: "2025",
      title: "CEVIPOF",
      description:
        "Recherche en NLP appliquée à la confiance politique.",
    },
    {
      year: "2026",
      title: "CREST",
      description:
        "Research assistant en computational social science.",
    },
    {
      year: "Aujourd'hui",
      title: "Building Pelops",
      description:
        "Développement d'un assistant IA et d'un laboratoire numérique personnel.",
    },
  ];

  return (
    <section className="bg-[#FCFCFA] py-40" id="timeline">
      <Container>
        <SectionHeader
          eyebrow="Timeline"
          title="A journey through ideas."
          description="Every project builds on the previous one. My work evolves through research, engineering and curiosity."
        />

        <div className="relative border-l border-[#D8E4EA]">
          {events.map((event) => (
            <div key={event.title} className="relative mb-16 ml-10">
              <div className="absolute -left-[46px] top-2 h-4 w-4 rounded-full border-2 border-[#0F7EA8] bg-[#FCFCFA]" />

              <p className="text-sm font-semibold uppercase tracking-widest text-[#0F7EA8]">
                {event.year}
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#111827]">
                {event.title}
              </h3>

              <p className="mt-3 max-w-2xl leading-8 text-gray-600">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}