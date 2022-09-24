export interface IPost {
    title: string;
    author: string;
    intro: string;
    content: string;
    date: string | Date;
}

export type TPosts = IPost[] | null;
