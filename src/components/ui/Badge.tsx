interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full bg-[#F3F8FA] px-4 py-2 text-sm font-medium text-[#0F7EA8]">
      {children}
    </span>
  );
}