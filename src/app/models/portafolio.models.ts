
export interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  link?: string;
  type: 'mobile' | 'web';
}

export interface Academic {
  degree: string;
  institution: string;
  year: string;
  images: string[];
}