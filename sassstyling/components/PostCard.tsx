import React, { FC, useState, useEffect } from "react";
import { IPost } from "../types/types";

import { truncateText } from "../helpers/textLib";
import Link from "next/link";

interface Props {
    data: IPost;
}

const PostCard: FC<Props> = ({ data }) => {
    if (!data) return null;

    const { title, date, intro, author, content, image, slug } = data;
    const formattedDate = new Date(date).toDateString();

    return (
        <div className="grid__item">
            <Link as={`/post/${slug}`} href="/post/[slug]">
                <a className="card">
                    <div className="card__content">
                        <div className="flex flex-direction--column">
                            <h2 className="card__title">{title}</h2>
                            <p className="card__date">{formattedDate}</p>
                            <p className="card__intro">{truncateText(intro)}</p>
                        </div>
                    </div>
                    <div className={"card__image"}>
                        <img src={image} alt={title} />
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default PostCard;
