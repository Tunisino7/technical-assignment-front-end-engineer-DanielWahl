import React, { FC, useState, useEffect } from "react";
import { IPost } from "../types/types";

interface Props {
    data: IPost;
}

const Post: FC<Props> = ({ data }) => {
    const { title, date, intro, author, content } = data;
    const formattedDate = new Date(date).toString();

    if (!data) return null;

    return (
        <div className="post">
            <h3 className="post__title">{data?.title}</h3>
            <span className="post__date">{formattedDate}</span>
            <p className="post__intro">{intro}</p>
            <div
                className="post__content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};

export default Post;
