import React, { FC, useState, useEffect } from "react";
import { Box, Grid, Link as MUILink, Paper, Typography } from "@mui/material";
import { IPost } from "../types/types";
import { slugify, truncateText } from "../helpers/textLib";
import Link from "next/link";

interface Props {
    data: IPost;
}

const LargePost: FC<Props> = ({ data }) => {
    if (!data) return null;

    const { title, date, intro, author, content, slug, image } = data;
    const formattedDate = new Date(date).toDateString();

    return (
        <Paper
            sx={{
                position: "relative",
                backgroundColor: "grey.800",
                color: "#fff",
                mb: 4,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${image})`,
            }}
        >
            {<img style={{ display: "none" }} src={image} alt={title} />}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: "rgba(0,0,0,.3)",
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: "relative",
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography
                            component="h1"
                            variant="h3"
                            color="inherit"
                            gutterBottom
                        >
                            {title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {truncateText(intro)}
                        </Typography>
                        <Link as={`/post/${slug}`} href="/post/[slug]">
                            <MUILink
                                variant="subtitle1"
                                sx={{ cursor: "pointer" }}
                            >
                                {"Read more"}
                            </MUILink>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default LargePost;
