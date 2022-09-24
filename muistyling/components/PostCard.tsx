import React, { FC, useState, useEffect } from "react";
import { IPost } from "../types/types";
import {
    Grid,
    Typography,
    CardActionArea,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";
import { truncateText } from "../helpers/textLib";
import Link from "next/link";

interface Props {
    data: IPost;
}

const PostCard: FC<Props> = ({ data }) => {
    if (!data) return null;

    const { title, date, intro, author, content, slug } = data;
    const formattedDate = new Date(date).toDateString();

    return (
        <Grid item xs={12} md={6}>
            <Link as={`/post/${slug}`} href="/post/[slug]">
                <CardActionArea component="a">
                    <Card sx={{ display: "flex" }}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                                {title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                {formattedDate}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {truncateText(intro)}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{
                                width: 160,
                                display: { xs: "none", sm: "block" },
                            }}
                            image={data.image}
                            alt={data.title}
                        />
                    </Card>
                </CardActionArea>
            </Link>
        </Grid>
    );
};

export default PostCard;
