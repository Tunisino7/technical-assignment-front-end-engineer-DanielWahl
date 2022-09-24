import React, { FC, useState, useEffect } from "react";
import { IPost } from "../types/types";

interface Props {
    data: IPost;
}

const PostSingle: FC<Props> = ({ data }) => {
    if (!data) return null;

    const { title, date, intro, author, content, slug, image } = data;
    const formattedDate = new Date(date).toDateString();

    return (
        <div className="post-single">
            <img
                src={image}
                alt={title}
                style={{ height: "350px", width: "100%", objectFit: "cover" }}
            />
            <h3>{title}</h3>
            <div className="flex flex--gap">
                <p className="paddingTop">
                    {formattedDate}-{author}
                </p>
            </div>
            <p className="paddingTop">{intro}</p>
            <p className="paddingTop">{content}</p>
        </div>
    );
};

export default PostSingle;
