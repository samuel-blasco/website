import { useMemo } from "react";
import { generateGraph } from "@/lib/graph/generator";

export default function GraphCanvas() {
  const graph = useMemo(() => generateGraph(), []);

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Edges */}
      {graph.edges.map((edge) => {
        const from = graph.nodes.find((n) => n.id === edge.from)!;
        const to = graph.nodes.find((n) => n.id === edge.to)!;

        return (
          <line
            key={`${edge.from}-${edge.to}`}
            x1={from.x * 1000}
            y1={from.y * 1000}
            x2={to.x * 1000}
            y2={to.y * 1000}
            stroke="#0F7EA8"
            strokeWidth={1}
            opacity={0.15}
          />
        );
      })}

      {/* Nodes */}
      {graph.nodes.map((node) => (
        <circle
          key={node.id}
          cx={node.x * 1000}
          cy={node.y * 1000}
          r={node.radius}
          fill="#0F7EA8"
          opacity={0.6}
        />
      ))}
    </svg>
  );
}