export interface Media {
  id: string;

  type: "image" | "video" | "gif" | "pdf";

  src: string;

  alt?: string;
}