"use client";

import {
  GraphEdge as GraphEdgeType,
  GraphNode as GraphNodeType,
} from "@/lib/graph";

interface GraphEdgeProps {
  edge: GraphEdgeType;
  nodes: GraphNodeType[];
}

export default function GraphEdge({
  edge,
  nodes,
}: GraphEdgeProps) {
  const source = nodes.find((node) => node.id === edge.source);
  const target = nodes.find((node) => node.id === edge.target);

  if (!source || !target) {
    return null;
  }

  // Longueur de l'arête
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Courbure
  const curvature = Math.min(distance * 0.18, 40);

  // Normale au segment
  const nx = -dy / distance;
  const ny = dx / distance;

  // Point de contrôle
  const cx = (source.x + target.x) / 2 + nx * curvature;
  const cy = (source.y + target.y) / 2 + ny * curvature;

  return (
    <path
      d={`M ${source.x} ${source.y} Q ${cx} ${cy} ${target.x} ${target.y}`}
      fill="none"
      stroke="#94A3B8"
      strokeOpacity={0.18}
      strokeWidth={1}
      strokeLinecap="round"
    />
  );
}