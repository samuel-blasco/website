"use client";

import { useMemo } from "react";

import { generateBackgroundGraph } from "@/lib/graph";

import GraphEdge from "./GraphEdge";
import GraphNode from "./GraphNode";

export default function GraphCanvas() {
  const graph = useMemo(() => generateBackgroundGraph(), []);

  return (
    <svg
        className="h-full w-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
    >
      {/* Edges */}
      {graph.edges.map((edge) => (
        <GraphEdge
          key={edge.id}
          edge={edge}
          nodes={graph.nodes}
        />
      ))}

      {/* Nodes */}
      {graph.nodes.map((node) => (
        <GraphNode
          key={node.id}
          node={node}
        />
      ))}
    </svg>
  );
}