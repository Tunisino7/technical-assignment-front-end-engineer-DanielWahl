import React, { FC, useState, useEffect, useContext } from "react";
import Link from "next/link";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme } from "../context/ThemeContext";

interface Props {
    title: string;
}

const Header: FC<Props> = ({ title }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header content">
            <div className="header__content grid grid__three-thirds">
                <div className="grid__item">
                    <Link href={"/"}>
                        <button>Posts</button>
                    </Link>
                    <Link href={"/post/create"}>
                        <button>Create Post</button>
                    </Link>
                </div>
                <div className="grid__item">
                    <h2>{title}</h2>
                </div>
                <div className="grid__item flex flex-justify--end">
                    <button onClick={toggleTheme}>
                        {theme === "dark" ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
