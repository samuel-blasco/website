// lib/graph/knowledge.ts

import { getKnowledgeObjects } from "../content";

import { KnowledgeGraph, GraphNode, GraphEdge } from "./types";

export function buildKnowledgeGraph(): KnowledgeGraph {
  const objects = getKnowledgeObjects();

  const nodes: GraphNode[] = objects.map((object) => ({
    id: object.id,

    objectId: object.id,

    label: object.title,

    type: object.type,

    x: Math.random() * 1000,
    y: Math.random() * 1000,

    vx: 0,
    vy: 0,

    radius: 8,

    visible: true,

    highlighted: false,
  }));

  const nodeIds = new Set(nodes.map((node) => node.id));

  const edges: GraphEdge[] = [];

  const edgeIds = new Set<string>();

  objects.forEach((object) => {
    object.related.forEach((relatedId) => {
      if (!nodeIds.has(relatedId)) return;

      const [source, target] =
        object.id < relatedId
          ? [object.id, relatedId]
          : [relatedId, object.id];

      const edgeId = `${source}-${target}`;

      if (edgeIds.has(edgeId)) return;

      edgeIds.add(edgeId);

      edges.push({
        id: edgeId,

        source,

        target,

        weight: 1,
      });
    });
  });

  return {
    nodes,
    edges,
  };
}