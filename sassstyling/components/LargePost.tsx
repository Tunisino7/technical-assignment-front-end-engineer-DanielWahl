import React, { FC, useState, useEffect } from "react";
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
        <div
            className="card-large"
            style={{ backgroundImage: `url(${image})` }}
        >
            {<img style={{ display: "none" }} src={image} alt={title} />}
            <div className="grid grid__half-half">
                <div className="grid__item">
                    <div>
                        <h3>{title}</h3>
                        <p>{truncateText(intro)}</p>
                        <Link as={`/post/${slug}`} href="/post/[slug]">
                            <a>{"Read more"}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LargePost;
