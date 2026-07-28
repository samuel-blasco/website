import { spacing } from "@/styles/design";

import Container from "../layout/Container";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#FCFCFA",
        paddingTop: spacing.sectionLarge,
        paddingBottom: spacing.sectionLarge,
      }}
    >
      <Container>
        <SectionHeader
          centered
          eyebrow="Contact"
          title="Let's build something together."
          description="Whether you'd like to discuss research, artificial intelligence, computational social science, open-source projects or a potential collaboration, I'd be happy to hear from you."
        />

        <div
          style={{
            marginTop: spacing.xl,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a href="mailto:samuel.blasco@universite-paris-saclay.fr">
            <Button>
              Get in touch
            </Button>
          </a>
        </div>

        <p
          className="text-base text-neutral-500"
          style={{
            marginTop: spacing.lg,
            textAlign: "center",
          }}
        >
          samuel.blasco@universite-paris-saclay.fr
        </p>

        <p
          className="text-sm text-neutral-400"
          style={{
            marginTop: spacing.section,
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Samuel Blasco
        </p>
      </Container>
    </section>
  );
}