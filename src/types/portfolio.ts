// src/types/portfolio.ts

export type Portfolio = {
  name: string;
  role: string;
  bio: string;

  skills: string[];

  socials: {
    github: string;
    linkedin: string;
    instagram: string;
  };

  contact: {
    email: string;
  };
};

