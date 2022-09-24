import React, { FC, useState, useEffect } from "react";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { createPost } from "../helpers/fetchers";
import { slugify } from "../helpers/textLib";

interface Props {}

const CreatePostForm: FC<Props> = ({}) => {
    const [title, setTitle] = useState("Test blabla");
    const [author, setAuthor] = useState("Daniel Wahl");
    const [date, setDate] = useState<Dayjs | null>(
        dayjs(new Date().toDateString()),
    );
    const [image, setImage] = useState("https://source.unsplash.com/random");
    const [intro, setIntro] = useState("Lorem upsum");
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-direction--column flex--gap paddingTop">
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

                <input
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <div className="grid grid__half-half">
                    <div className="grid__item flex flex-direction--column">
                        <input
                            required
                            value={author}
                            onChange={(e) => {
                                setAuthor(e.target.value);
                            }}
                        />
                    </div>
                    <div className="grid__item flex flex-direction--column">
                        <DesktopDatePicker
                            label="Date desktop *"
                            inputFormat="DD/MM/YYYY"
                            value={date}
                            onChange={(e) => {
                                setDate(e);
                            }}
                            renderInput={(params) => <input {...params} />}
                        />
                    </div>
                </div>
                <input
                    value={image}
                    onChange={(e) => {
                        setImage(e.target.value);
                    }}
                />
                <textarea
                    value={intro}
                    onChange={(e) => {
                        setIntro(e.target.value);
                    }}
                />

                <textarea
                    required
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />
                <div className="flex flex-justify--end">
                    <div className="relative">
                        <button disabled={loading} onClick={onSubmit}>
                            Create Post
                        </button>
                        {loading && <p>loading...</p>}
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    );
};

export default CreatePostForm;
