import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PostsList from "../components/PostsList";
import { getPosts } from "../helpers/fetchers";
import { TPosts } from "../types/types";

interface HomeProps {
    posts: TPosts;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
    return (
        <div className="global">
            <header></header>
            <main className="content">
                <PostsList posts={posts} />
            </main>
            <footer></footer>
        </div>
    );
};

export async function getServerSideProps() {
    const posts: TPosts = null; //await getPosts();
    return {
        props: {
            posts,
        },
    };
}

export default Home;
