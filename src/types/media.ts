export interface Media {
  id: string;

  type: "image" | "video" | "gif" | "pdf";

  src: string;

  alt?: string;

  caption?: string;

  width?: number;

  height?: number;
}