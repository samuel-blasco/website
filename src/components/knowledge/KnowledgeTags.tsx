import Badge from "../ui/Badge";

interface Props {
  tags: string[];
}

export default function KnowledgeTags({
  tags,
}: Props) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-3">
      {tags.map((tag) => (
        <Badge key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
}