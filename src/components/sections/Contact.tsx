import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FCFCFA] py-40"
    >
      <Container className="max-w-4xl text-center">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together."
          description="Whether you'd like to discuss research, artificial intelligence, computational social science, open-source projects or a potential collaboration, I'd be happy to hear from you."
        />

        <div className="mt-12 flex justify-center">
          <a href="mailto:samuel.blasco@universite-paris-saclay.fr">
            <Button>
              Get in touch
            </Button>
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          samuel.blasco@universite-paris-saclay.fr
        </p>

        <p className="mt-12 text-sm text-gray-400">
          © {new Date().getFullYear()} Samuel Blasco
        </p>
      </Container>
    </section>
  );
}