export interface Profile {
  name: string;
  role: string;
  about: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    youtube: string;
  };
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string;
}

export interface SkillCategories {
  title: string;
  icon: string;
  skills: string[];
}