import { Collection } from "@/types/collection";
import { collections } from "@/content/collections";

export function getCollections(): Collection[] {
  return collections;
}

export function getFeaturedCollections(): Collection[] {
  return collections.filter(
    (collection) => collection.featured
  );
}