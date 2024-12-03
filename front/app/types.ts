export interface Diploma {
    id: string;
    title: string;
    start: string;
    end: string;
    location: string;
}

export interface Job {
    id: string;
    title: string;
    subtitle: string;
    start: string;
    end: string;
    location: string;
    description: string;
    stack: string[];
}

export interface User {
    id: string;
    lastname: string;
    firstname: string;
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    location: string;
    linkedin: string;
    github: string;
    description: string;
}
