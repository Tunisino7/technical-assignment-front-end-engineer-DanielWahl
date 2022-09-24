import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "../styles/theme";
import { createContext, useContext, useMemo, useState } from "react";
import { PaletteMode } from "@mui/material";
import { ThemeProvider } from "../context/ThemeContext";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const RootApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default RootApp;
