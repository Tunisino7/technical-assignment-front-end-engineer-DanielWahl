export interface IPost {
    title: string;
    author: string;
    intro: string;
    content: string;
    date: string | Date;
    image: string;
    slug: string;
}

export type TPosts = IPost[] | null;
