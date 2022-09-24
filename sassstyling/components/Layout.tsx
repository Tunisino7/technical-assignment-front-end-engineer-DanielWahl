import React, { FC, useState, useEffect } from "react";
import Header from "./Header";
import { useTheme } from "../context/ThemeContext";

interface Props {
    children?: React.ReactChild | React.ReactChild[];
    title: string;
}

const Layout: FC<Props> = ({ children, title }) => {
    const { theme } = useTheme();

    return (
        <div className="global" data-theme={theme}>
            <Header title={title} />
            <main className="content">{children}</main>
            <footer className="flex flex-center--horizontal paddingTop paddingBottom">
                <p>
                    &copy; by{" "}
                    <a href="https://danielwahl.lu" target="_blank">
                        Daniel Wahl
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default Layout;
