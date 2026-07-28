import { Article } from "@/types/article";
import { articles } from "@/content/journal";

export function getArticles(): Article[] {
  return articles;
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}