import { GRAPH } from "./constants";
import { GraphData, GraphEdge, GraphNode } from "./types";

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.hypot(x2 - x1, y2 - y1);
}

function isInsideCenterHole(
  x: number,
  y: number,
  holeWidth: number,
  holeHeight: number
): boolean {
  const left = 0.5 - holeWidth / 2;
  const right = 0.5 + holeWidth / 2;

  const top = 0.5 - holeHeight / 2;
  const bottom = 0.5 + holeHeight / 2;

  return (
    x > left &&
    x < right &&
    y > top &&
    y < bottom
  );
}

function isTooClose(
  x: number,
  y: number,
  nodes: GraphNode[],
  minDistance: number
): boolean {
  return nodes.some(node =>
    distance(x, y, node.x, node.y) < minDistance
  );
}

function generateNodes(): GraphNode[] {
  const nodes: GraphNode[] = [];
  let attempts = 0;
  const MAX_ATTEMPTS = 10000;
  let id = 0;

  while (
    nodes.length < GRAPH.NODE_COUNT &&
    attempts < MAX_ATTEMPTS
  ) {
    attempts++;

    const x = Math.random();
    const y = Math.random();

    if (
      isInsideCenterHole(
        x,
        y,
        GRAPH.CENTER_HOLE_WIDTH,
        GRAPH.CENTER_HOLE_HEIGHT
      )
    ) {
      continue;
    }

    if (
      isTooClose(
        x,
        y,
        nodes,
        GRAPH.MIN_DISTANCE
      )
    ) {
      continue;
    }

    nodes.push({
      id: String(id++),

      x,
      y,

      radius: GRAPH.NODE_RADIUS,

      phase: random(0, Math.PI * 2),

      speed: random(
        GRAPH.ANIMATION_SPEED_MIN,
        GRAPH.ANIMATION_SPEED_MAX
      ),

      offsetX: random(-1, 1),
      offsetY: random(-1, 1),
    });
  }

  if (nodes.length < GRAPH.NODE_COUNT) {
    console.warn(
      `Only generated ${nodes.length}/${GRAPH.NODE_COUNT} nodes.`
    );
  }

  return nodes;
}

function generateEdges(nodes: GraphNode[]): GraphEdge[] {
  const edges: GraphEdge[] = [];
  const existingEdges = new Set<string>();

  for (const node of nodes) {
    const nearest = [...nodes]
      .filter((other) => other.id !== node.id)
      .sort((a, b) => {
        const da = distance(node.x, node.y, a.x, a.y);
        const db = distance(node.x, node.y, b.x, b.y);
        return da - db;
      })
      .slice(0, GRAPH.MAX_CONNECTIONS);

    for (const other of nearest) {
      const edgeId =
        node.id < other.id
          ? `${node.id}-${other.id}`
          : `${other.id}-${node.id}`;

      if (existingEdges.has(edgeId)) continue;

      existingEdges.add(edgeId);

      edges.push({
        from: node.id,
        to: other.id,
      });
    }
  }

  return edges;
}

export function generateGraph(): GraphData {
  const nodes = generateNodes();
  const edges = generateEdges(nodes);

  return {
    nodes,
    edges,
  };
}