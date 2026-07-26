export interface GraphNode {
  id: string;

  // Position normalisée (0 → 1)
  x: number;
  y: number;

  // Taille du nœud
  radius: number;

  // Animation
  phase: number;
  speed: number;

  // Déplacement maximal
  offsetX: number;
  offsetY: number;
}

export interface GraphEdge {
  from: string;
  to: string;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export interface GraphOptions {
  width: number;
  height: number;

  nodeCount: number;

  centerHoleWidth: number;
  centerHoleHeight: number;

  minDistance: number;
}