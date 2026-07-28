import { layout, radius, spacing, typography } from "@/styles/design";

import Button from "../ui/Button";

const domains = [
  "Computational Social Science",
  "Artificial Intelligence",
  "Digital Fabrication",
  "Knowledge Engineering",
];

export default function Hero() {
  return (
      <section
        style={{
          position: "relative",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          minHeight: `calc(100vh - ${layout.navbarHeight})`,
          marginTop: layout.navbarHeight,

          overflow: "hidden",
          boxSizing: "border-box",
        }}
      >
      <div
        style={{
          position: "relative",
          zIndex: 10,

          width: "100%",
          maxWidth: layout.container,

          margin: "0 auto",

          paddingLeft: spacing.lg,
          paddingRight: spacing.lg,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          textAlign: "center",

          boxSizing: "border-box",
        }}
      >
        {/* Eyebrow */}
        <p
          className="text-xs font-semibold uppercase tracking-[0.45em] text-[#0F7EA8]"
          style={{
            marginBottom: spacing.lg,
          }}
        >
          Digital Laboratory
        </p>

        {/* Main heading */}
        <h1
          className="font-bold tracking-[-0.06em] text-[#111827]"
          style={{
            maxWidth: "90rem",
            fontSize: "clamp(4rem, 8vw, 8rem)",
            lineHeight: 0.95,
          }}
        >
          Exploring{" "}
          <span className="text-[#0F7EA8]">
            Computational Social Science
          </span>
          , AI and Digital Fabrication.
        </h1>

        {/* Introduction */}
        <p
          className="text-neutral-600"
          style={{
            marginTop: spacing.xl,
            maxWidth: typography.heroWidth,
            fontSize: typography.largeBody,
            lineHeight: 1.8,
          }}
        >
          I'm Samuel Blasco, a student and builder exploring how artificial
          intelligence, computational methods and digital fabrication can help
          understand, create and share knowledge.
        </p>

        {/* Actions */}
        <div
          style={{
            marginTop: spacing.section,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: spacing.md,
          }}
        >
          <Button href="/projects">
            Explore Projects
          </Button>

          <Button
            href="/research"
            variant="secondary"
          >
            Read Research
          </Button>
        </div>

        {/* Domains */}
        <div
          style={{
            marginTop: spacing.section,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: spacing.sm,
          }}
        >
          {domains.map((domain) => (
            <span
              key={domain}
              className="
                border
                border-neutral-200
                bg-white/70
                shadow-sm
                backdrop-blur-sm
                transition-colors
                duration-200
                hover:border-[#0F7EA8]/40
                hover:text-[#0F7EA8]
              "
              style={{
                borderRadius: radius.xl,
                padding: `${spacing.sm} ${spacing.md}`,
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#404040",
              }}
            >
              {domain}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: spacing.xl,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            className="font-medium uppercase tracking-[0.35em] text-neutral-400"
            style={{
              marginBottom: spacing.sm,
              fontSize: "11px",
            }}
          >
            Scroll
          </span>

          <div
            style={{
              width: "1px",
              height: "4rem",
              background:
                "linear-gradient(to bottom, #a3a3a3, transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}