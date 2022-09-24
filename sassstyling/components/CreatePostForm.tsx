import React, { FC, useState, useEffect } from "react";
import { createPost } from "../helpers/fetchers";
import { slugify } from "../helpers/textLib";
import Input from "./Input";
import TextArea from "./TextArea";

interface Props {}

const CreatePostForm: FC<Props> = ({}) => {
    const [title, setTitle] = useState("Test blabla");
    const [author, setAuthor] = useState("Daniel Wahl");
    const [date, setDate] = useState(
        new Date().getFullYear() +
            "-" +
            (new Date().getMonth() < 10
                ? "0" + (new Date().getMonth() + 1)
                : new Date().getMonth() + 1) +
            "-" +
            new Date().getDate(),
    );
    const [image, setImage] = useState("https://source.unsplash.com/random");
    const [intro, setIntro] = useState("Lorem ipsum");
    const [content, setContent] = useState("Lorem ipsum dolor sit amet");

    const [fillAllError, setFillAllError] = useState(false);
    const [fetchError, setFetchError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        setLoading(true);
        setFillAllError(false);
        setFetchError(false);
        setSuccess(false);
        if (!title || !author || !date || !content) {
            setFillAllError(true);
            setLoading(false);
            return;
        }

        const success = await createPost({
            title: title,
            author: author,
            date: date.toString(),
            image: image,
            intro: intro,
            content: content,
            slug: slugify(title),
        }).then((res) => {
            setLoading(false);
            if (!res?.data?.success || res?.data?.success === "false") {
                setFetchError(true);
            } else {
                setSuccess(true);
                setTitle("");
                setAuthor("");
                setIntro("");
                setContent("");
            }
            return res;
        });
    };

    return (
        <div className="flex flex-direction--column flex--gap--sm paddingTop">
            <h2>Create new post</h2>
            {fillAllError && (
                <span className="error">
                    Please fill out all required inputs!
                </span>
            )}
            {fetchError && (
                <span className="error">Fetch error: please try again</span>
            )}
            {success && (
                <span className="success">
                    Your post was created successfully.
                </span>
            )}

            <Input
                name={"title"}
                label={"Title"}
                required
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />
            <div className="grid grid__half-half">
                <div className="grid__item flex flex-direction--column">
                    <Input
                        name={"author"}
                        label={"Author"}
                        required
                        value={author}
                        onChange={(e) => {
                            setAuthor(e.target.value);
                        }}
                    />
                </div>
                <div className="grid__item flex flex-direction--column">
                    <Input
                        name={"date"}
                        label={"Date *"}
                        required
                        value={date}
                        onChange={(e) => {
                            console.log(e);
                            setDate(e.target.value);
                        }}
                        type="date"
                    />
                </div>
            </div>
            <Input
                name={"image"}
                label={"Image"}
                value={image}
                onChange={(e) => {
                    setImage(e.target.value);
                }}
            />
            <TextArea
                name={"intro"}
                label={"Introduction"}
                value={intro}
                onChange={(e) => {
                    setIntro(e.target.value);
                }}
                rows={2}
            />

            <TextArea
                name={"content"}
                label={"Content"}
                required
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
                rows={6}
            />
            <div className="flex flex-justify--end">
                <div className="relative">
                    <button
                        className="button"
                        disabled={loading}
                        onClick={onSubmit}
                    >
                        Create Post
                    </button>
                    {loading && <p>loading...</p>}
                </div>
            </div>
        </div>
    );
};

export default CreatePostForm;
