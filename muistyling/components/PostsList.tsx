import React, { FC, useState, useEffect } from "react";
import { TPosts } from "../types/types";
import PostCard from "./PostCard";
import { Box, Grid, Paper, Typography, Link as MUILink } from "@mui/material";
import LargePost from "./LargePost";

interface Props {
    posts: TPosts;
}

const PostsList: FC<Props> = ({ posts }) => {
    if (!posts) return null;

    return (
        <Box>
            <LargePost data={posts[0]} />
            <Grid container spacing={4}>
                {posts?.map((post, index) => {
                    if (index === 0) return null;
                    return <PostCard key={"post__" + index} data={post} />;
                })}
            </Grid>
        </Box>
    );
};

export default PostsList;
