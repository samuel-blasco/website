"use client";

import { GraphNode as GraphNodeType } from "@/lib/graph";

interface GraphNodeProps {
  node: GraphNodeType;
}

export default function GraphNode({
  node,
}: GraphNodeProps) {
  return (
    <g
      className="cursor-pointer transition-all duration-300 hover:opacity-100"
      style={{ opacity: 0.9 }}
    >
      <circle
        cx={node.x}
        cy={node.y}
        r={node.radius + 5}
        fill="#0F7EA8"
        opacity={0.08}
      />

      <circle
        cx={node.x}
        cy={node.y}
        r={node.radius + 2}
        fill="#0F7EA8"
        opacity={0.18}
      />

      <circle
        cx={node.x}
        cy={node.y}
        r={node.radius}
        fill="#0F7EA8"
      />
    </g>
  );
}