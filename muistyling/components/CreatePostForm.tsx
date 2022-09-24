import React, { FC, useState, useEffect } from "react";
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
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
            <Box
                component="form"
                noValidate
                autoComplete="off"
                display="flex"
                flexDirection="column"
                gap={2}
                paddingTop={3}
            >
                <Typography variant="h2" component="h2">
                    Create new post
                </Typography>
                {fillAllError && (
                    <Typography
                        variant="body1"
                        component="span"
                        sx={{ color: "red" }}
                    >
                        Please fill out all required inputs!
                    </Typography>
                )}
                {fetchError && (
                    <Typography
                        variant="body1"
                        component="span"
                        sx={{ color: "red" }}
                    >
                        Fetch error: please try again
                    </Typography>
                )}
                {success && (
                    <Typography
                        variant="body1"
                        component="span"
                        sx={{ color: "green" }}
                    >
                        Your post was created successfully.
                    </Typography>
                )}

                <TextField
                    label="Title"
                    variant="outlined"
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <Grid container spacing={2}>
                    <Grid item xs={6} display="flex" flexDirection="column">
                        <TextField
                            label="Author"
                            variant="outlined"
                            required
                            value={author}
                            onChange={(e) => {
                                setAuthor(e.target.value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} display="flex" flexDirection="column">
                        <DesktopDatePicker
                            label="Date desktop *"
                            inputFormat="DD/MM/YYYY"
                            value={date}
                            onChange={(e) => {
                                setDate(e);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                </Grid>
                <TextField
                    label="Image"
                    variant="outlined"
                    value={image}
                    onChange={(e) => {
                        setImage(e.target.value);
                    }}
                />
                <TextField
                    label="Introduction"
                    variant="outlined"
                    multiline
                    minRows={2}
                    value={intro}
                    onChange={(e) => {
                        setIntro(e.target.value);
                    }}
                />

                <TextField
                    label="Content"
                    variant="outlined"
                    required
                    multiline
                    minRows={6}
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />
                <Box display="flex" justifyContent="flex-end">
                    <Box sx={{ m: 1, position: "relative" }}>
                        <Button
                            variant="contained"
                            disabled={loading}
                            onClick={onSubmit}
                        >
                            Create Post
                        </Button>
                        {loading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: "white",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    marginTop: "-12px",
                                    marginLeft: "-12px",
                                }}
                            />
                        )}
                    </Box>
                </Box>
            </Box>
        </LocalizationProvider>
    );
};

export default CreatePostForm;
