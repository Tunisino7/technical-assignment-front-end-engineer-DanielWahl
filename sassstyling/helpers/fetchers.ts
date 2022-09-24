/**
 * All Fetch methods
 */
import { TPosts } from "../types/types";

export const getPosts = async () => {
    try {
        return await fetch("/api", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        }).then((res) => res.json());
    } catch (err) {
        console.error("Fetch getPosts Error: ", err);
        return null;
    }
};

export const createPost = async () => {
    try {
        return await fetch("api", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        }).then((res) => res.json());
    } catch (err) {
        console.error("Fetch createPost Error: ", err);
    }
};
