import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {}

const ErrorPage: NextPage<ErrorPageProps> = ({}) => {
    return (
        <Layout title={"Page not found"}>
            <Head>
                <title>Page not found</title>
            </Head>
            <div className="flex flex-column-center paddingTop paddingBottom">
                <h2>Page not found</h2>
                <br />
                <div>
                    <Link href={"/"}>
                        <button>Go Back to the landing page</button>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default ErrorPage;
