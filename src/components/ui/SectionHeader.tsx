interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mx-auto mb-24 max-w-4xl">
      <p
        className="
          mb-6

          text-sm
          font-semibold
          uppercase
          tracking-[0.3em]

          text-[#0F7EA8]
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
          max-w-3xl

          text-5xl
          font-bold
          tracking-tight

          text-[#111827]

          md:text-6xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-8

          max-w-2xl

          text-xl
          leading-9

          text-gray-600
        "
      >
        {description}
      </p>
    </header>
  );
}