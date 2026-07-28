// lib/graph/generator.ts

import { buildKnowledgeGraph } from "./knowledge";
import { KnowledgeGraph } from "./types";

/**
 * Atlas utilise le vrai graphe construit
 * à partir des KnowledgeObjects.
 */
export function generateAtlasGraph(): KnowledgeGraph {
  return buildKnowledgeGraph();
}

/**
 * Hero
 *
 * Pour le moment, le Hero affiche le même graphe
 * qu'Atlas. Plus tard cette fonction pourra générer
 * une version simplifiée ou aléatoire du graphe.
 */
export function generateBackgroundGraph(): KnowledgeGraph {
  return buildKnowledgeGraph();
}