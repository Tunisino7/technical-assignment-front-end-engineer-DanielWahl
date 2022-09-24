import React, { FC, useState, useEffect } from "react";
import { IPost } from "../types/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
    data: IPost;
}

const PostSingle: FC<Props> = ({ data }) => {
    if (!data) return null;

    const { title, date, intro, author, content, slug, image } = data;
    const formattedDate = new Date(date).toDateString();

    return (
        <Box>
            <img
                src={image}
                alt={title}
                style={{ height: "350px", width: "100%", objectFit: "cover" }}
            />
            <Typography variant="h3" component="h3">
                {title}
            </Typography>
            <Box display="flex" gap={1}>
                <Typography variant="body1" component="p" paddingTop={2}>
                    {formattedDate}
                </Typography>
                <Typography variant="body1" component="p" paddingTop={2}>
                    {" - "}
                </Typography>
                <Typography variant="body1" component="p" paddingTop={2}>
                    {author}
                </Typography>
            </Box>
            <Typography variant="body1" component="p" paddingTop={2}>
                {intro}
            </Typography>
            <Typography variant="body1" component="p" paddingTop={2}>
                {content}
            </Typography>
        </Box>
    );
};

export default PostSingle;
