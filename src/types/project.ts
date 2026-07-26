export interface Project {
  id: string;

  title: string;
  description: string;

  technologies: string[];

  tags: string[];

  related: string[];

  gallery: string[];

  links: {
    github?: string;
    demo?: string;
    website?: string;
  };
}