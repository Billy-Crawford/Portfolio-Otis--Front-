// src/types/project.ts

export type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;

    technologies: string[];

    github?: string;
    demo?: string;

    featured?: boolean;
};