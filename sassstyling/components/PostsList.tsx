import React, { FC, useState, useEffect } from "react";
import { TPosts } from "../types/types";
import Post from "./Post";

interface Props {
    posts: TPosts;
}

const PostsList: FC<Props> = ({ posts }) => {
    if (!posts) return null;

    return (
        <div className="postsList">
            {posts?.map((post, index) => (
                <Post key={"post__" + index} data={post} />
            ))}
        </div>
    );
};

export default PostsList;
