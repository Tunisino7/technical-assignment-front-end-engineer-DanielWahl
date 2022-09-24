import React, { FC, useState, useEffect } from "react";
import Layout from "../../components/Layout";
import CreatePostForm from "../../components/CreatePostForm";

interface Props {}

const CreatePostPage: FC<Props> = ({}) => {
    return (
        <Layout title={"Create Post"}>
            <CreatePostForm />
        </Layout>
    );
};

export default CreatePostPage;
