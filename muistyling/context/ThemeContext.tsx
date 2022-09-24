import React, { createContext, useContext, useState } from "react";
import {
    useTheme as useMuiTheme,
    ThemeProvider as MUIThemeProvider,
    createTheme,
} from "@mui/material/styles";
export type TTheme = "light" | "dark";

interface ThemeContextProps {
    readonly toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    toggleTheme: () => null,
});

export const ThemeProvider: React.FC<{
    children: React.ReactChild | React.ReactChild[];
}> = ({ children }) => {
    const [mode, setMode] = React.useState<TTheme>("dark");
    const colorMode = React.useMemo(
        () => ({
            toggleTheme: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light",
                );
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ThemeContext.Provider value={colorMode}>
            <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useColorMode = () => useContext(ThemeContext);
