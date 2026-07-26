export interface GraphNode {
  id: string;

  x: number;
  y: number;

  radius: number;

  phase: number;
  speed: number;

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