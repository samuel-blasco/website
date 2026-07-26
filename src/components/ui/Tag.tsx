interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-[#D8E4EA] px-3 py-1 text-sm text-gray-600">
      {children}
    </span>
  );
}