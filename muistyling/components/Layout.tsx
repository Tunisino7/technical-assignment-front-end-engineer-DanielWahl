import React, { FC, useState, useEffect } from "react";
import PostsList from "./PostsList";
import { Box, Container, Link as MUILink, Typography } from "@mui/material";
import Header from "./Header";

interface Props {
    children?: React.ReactChild | React.ReactChild[];
    title: string;
}

const Layout: FC<Props> = ({ children, title }) => {
    return (
        <Container maxWidth="lg">
            <Header title={title} />
            <main className="content">{children}</main>
            <Box
                component="footer"
                display="flex"
                justifyContent="center"
                paddingTop={3}
                paddingBottom={2}
            >
                <Typography variant="body1" component="p">
                    &copy; by{" "}
                    <MUILink href="https://danielwahl.lu" target="_blank">
                        Daniel Wahl
                    </MUILink>
                </Typography>
            </Box>
        </Container>
    );
};

export default Layout;
