import React, { FC, useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { IPost, TPosts } from "../../types/types";
import testPosts from "../../data/posts.json";
import { getSinglePost } from "../../helpers/fetchers";
import { Box, Button, Typography } from "@mui/material";
import PostSingle from "../../components/PostSingle";
import Link from "next/link";
interface Props {
    post: IPost;
}

const PostSinglePage: FC<Props> = ({ post }) => {
    if (!post)
        return (
            <Layout title={"No Post found"}>
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    paddingY={10}
                >
                    <Typography variant="h2" component="h2">
                        No post found
                    </Typography>
                    <br />
                    <Box>
                        <Link href={"/"}>
                            <Button variant="contained">Go Back</Button>
                        </Link>
                    </Box>
                </Box>
            </Layout>
        );

    return (
        <Layout title={"Post Single"}>
            <PostSingle data={post} />
        </Layout>
    );
};

export async function getServerSideProps({ query }: any) {
    const post: IPost = await getSinglePost(query.slug);
    return {
        props: {
            post,
        },
    };
}

export default PostSinglePage;
