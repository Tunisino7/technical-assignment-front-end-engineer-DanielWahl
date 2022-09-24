import React, { FC, useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { IPost, TPosts } from "../../types/types";
import { getSinglePost } from "../../helpers/fetchers";
import PostSingle from "../../components/PostSingle";
import Link from "next/link";

interface Props {
    post: IPost;
}

const PostSinglePage: FC<Props> = ({ post }) => {
    if (!post)
        return (
            <Layout title={"No Post found"}>
                <div className="flex flex-column-center paddingTop paddingBottom">
                    <h2>No post found</h2>
                    <br />
                    <div>
                        <Link href={"/"}>
                            <button>Go Back</button>
                        </Link>
                    </div>
                </div>
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
