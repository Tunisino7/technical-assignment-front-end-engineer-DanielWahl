import React, { FC, useState, useEffect } from "react";
import { TPosts } from "../types/types";
import PostCard from "./PostCard";
import LargePost from "./LargePost";

interface Props {
    posts: TPosts;
}

const PostsList: FC<Props> = ({ posts }) => {
    if (!posts) return null;

    return (
        <div>
            <LargePost data={posts[0]} />
            <div className="grid grid__half-half grid--gap-l grid-align--flex-start paddingTop">
                {posts?.map((post, index) => {
                    if (index === 0) return null;
                    return <PostCard key={"post__" + index} data={post} />;
                })}
            </div>
        </div>
    );
};

export default PostsList;
