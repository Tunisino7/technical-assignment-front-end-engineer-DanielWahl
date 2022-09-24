import type { NextPage } from "next";
import Head from "next/head";
import PostsList from "../components/PostsList";
import { getPosts } from "../helpers/fetchers";
import { TPosts } from "../types/types";
import Layout from "../components/Layout";
import { useEffect } from "react";

interface HomeProps {
    posts: TPosts;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
    return (
        <Layout title={"Posts"}>
            <Head>
                <title>Posts</title>
            </Head>
            <PostsList posts={posts} />
        </Layout>
    );
};

export async function getServerSideProps() {
    const posts: TPosts = await getPosts();
    return {
        props: {
            posts,
        },
    };
}

export default Home;
