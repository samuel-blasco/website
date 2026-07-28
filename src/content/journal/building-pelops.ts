import { Article } from "@/types/article";

export const buildingPelops: Article = {
  id: "building-pelops",
  slug: "building-pelops",
  type: "article",

  title: "Building Pelops",

  shortDescription:
    "Why I decided to build my own AI assistant instead of relying on existing frameworks.",

  description: `
Pelops did not begin as a software project. It began as a question.

Over the past few years, Large Language Models have become remarkably capable. They can write code, summarize documents and answer complex questions, yet they still struggle with something humans do naturally: building knowledge over time. Every conversation starts almost from scratch, projects become fragmented across sessions and long-term reasoning remains surprisingly limited.

I wanted to explore a different direction.

Instead of building another chatbot, I started designing an architecture centered around persistent knowledge. The goal was not simply to connect an LLM to a database, but to understand how memory, reasoning and retrieval could work together inside a coherent system.

The current architecture separates these responsibilities into independent components. A temporary Working Memory acts as the assistant's workspace during a conversation, while a User Memory stores stable information about the user. Every long-term project maintains its own independent memory graph, preventing unrelated ideas from becoming entangled while preserving rich internal connections.

Above these memories sits the Memory Bank. Rather than storing everything indiscriminately, it decides what should be created, updated, merged or forgotten. Knowledge itself is indexed separately through a Knowledge Graph that organizes concepts independently of where they were originally stored.

When information is needed, a Retrieval Engine combines semantic search with graph navigation. Instead of retrieving isolated pieces of text, it constructs context by exploring related concepts and memories. The graph itself also evolves over time: concepts that are frequently retrieved together gradually strengthen their connections, making future retrieval more efficient without altering the underlying knowledge.

One of the reasons I chose this architecture is that every component remains replaceable. Language models, memory implementations and retrieval strategies can evolve independently while preserving the overall structure. This modularity allows Pelops to serve not only as an assistant, but also as a research platform for experimenting with cognitive architectures and personal knowledge management.

Pelops is still at an early stage. Most of its ideas remain hypotheses rather than finished solutions. That is precisely what makes the project interesting. Rather than optimizing an existing system, I am trying to understand how a genuinely useful personal AI assistant should be designed from first principles.
  `,

  date: "2026-07-27",

  readingTime: "6 min",

  published: false,

  tags: [
    "Artificial Intelligence",
    "Large Language Models",
    "Knowledge Graphs",
    "Memory Systems",
    "Personal Knowledge Management",
  ],

  related: [
    "pelops",
    "knowledge-graphs",
    "artificial-intelligence",
    "python",
  ],

  featured: true,
};