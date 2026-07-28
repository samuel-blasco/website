export interface GraphNode {
  id: string;

  objectId: string;

  label: string;

  type: string;

  x: number;
  y: number;

  vx: number;
  vy: number;

  radius: number;

  visible: boolean;

  highlighted: boolean;
}

export interface GraphEdge {
  id: string;

  source: string;

  target: string;

  weight: number;
}

export interface KnowledgeGraph {
  nodes: GraphNode[];

  edges: GraphEdge[];
}

export interface GraphPulse {
  id: string;

  edgeId: string;

  progress: number;

  intensity: number;
}