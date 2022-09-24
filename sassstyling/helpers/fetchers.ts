/**
 * All Fetch methods
 */
import { IPost, TPosts } from "../types/types";

export const getPosts = async () => {
    try {
        return await fetch(process.env.API_URL + "/api/posts/getposts", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => JSON.parse(res.data))
            .then((res) => res.reverse());
    } catch (err) {
        console.error("Fetch getPosts Error: ", err);
        return null;
    }
};

export const getSinglePost = async (slug: string) => {
    try {
        return await fetch(
            process.env.API_URL + "/api/posts/getsinglepost?slug=" + slug,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "GET",
            },
        )
            .then((res) => res.json())
            .then((res) => res.data);
    } catch (err) {
        console.error("Fetch getPosts Error: ", err);
        return null;
    }
};

export const createPost = async (data: IPost) => {
    try {
        return await fetch("/api/posts/createpost", {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data ?? {}),
            method: "POST",
        }).then((res) => res.json());
    } catch (err) {
        console.error("Fetch createPost Error: ", err);
    }
};
