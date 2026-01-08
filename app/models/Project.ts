export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  role?: string;
  contributions: string[];
  stack: string[];
  outcomes?: string[];
  notes?: string;
  link?: string;
  github?: string;
}
