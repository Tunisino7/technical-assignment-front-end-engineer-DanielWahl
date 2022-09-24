import type { NextPage } from "next";
import Head from "next/head";
import PostsList from "../components/PostsList";
import { getPosts } from "../helpers/fetchers";
import { TPosts } from "../types/types";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface ErrorPageProps {}

const ErrorPage: NextPage<ErrorPageProps> = ({}) => {
    return (
        <Layout title={"Page not found"}>
            <Head>
                <title>Page not found</title>
            </Head>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                paddingY={10}
            >
                <Typography variant="h2" component="h2">
                    Page not found
                </Typography>
                <br />
                <Box>
                    <Link href={"/"}>
                        <Button variant="contained">
                            Go Back to the landing page
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Layout>
    );
};

export default ErrorPage;
