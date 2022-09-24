import React, { FC, useState, useEffect, useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "../context/ThemeContext";

interface Props {
    title: string;
}

const Header: FC<Props> = ({ title }) => {
    const theme = useTheme();
    const colorMode = useColorMode();

    return (
        <Box component="header" paddingTop={3} paddingBottom={3}>
            <Grid container spacing={2} direction="row" alignItems="center">
                <Grid item xs={4} paddingLeft={0} alignItems="flex-start">
                    <Link href={"/"}>
                        <Button>Posts</Button>
                    </Link>
                    <Link href={"/post/create"}>
                        <Button>Create Post</Button>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        sx={{ flex: 1 }}
                    >
                        {title}
                    </Typography>
                </Grid>

                <Grid item xs={4} display="flex" justifyContent="flex-end">
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={colorMode.toggleTheme}
                        color="inherit"
                    >
                        {theme.palette.mode === "dark" ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;
