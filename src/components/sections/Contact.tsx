import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  return (
    <section className="bg-[#FCFCFA] py-40" id="contact">
      <Container className="max-w-4xl text-center">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something together."
          description="Whether you would like to discuss research, artificial intelligence, computational social science or a potential collaboration, I'd be happy to hear from you."
        />

        <div className="mt-12">
          <a href="mailto:samuel.blasco@universite-paris-saclay.fr">
            <Button>
              samuel.blasco@universite-paris-saclay.fr
            </Button>
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-400">
          © {new Date().getFullYear()} Samuel Blasco
        </p>
      </Container>
    </section>
  );
}