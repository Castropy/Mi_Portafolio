// src/app/models/portafolio.models.ts

export interface ImageGallery {
  url: string;
  alt: string;
}

export interface Academic {
  title: string;
  university: string;
  year: string;
  description: string;
  images: ImageGallery[];
}

export interface Project {
  name: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  images: ImageGallery[];
  type: 'Flutter' | 'Angular' | 'Django';
}

export interface Collaboration {
  repoName: string;
  description: string;
  repoUrl: string;
  role: string; // Ejemplo: "Contributor", "Issue Reporter", "Documentation"
}