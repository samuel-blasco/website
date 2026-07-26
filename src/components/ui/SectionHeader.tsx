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
    <div className="mb-20">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#0F7EA8]">
        {eyebrow}
      </p>

      <h2 className="text-5xl font-bold tracking-tight text-[#111827]">
        {title}
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}