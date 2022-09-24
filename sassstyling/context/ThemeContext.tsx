import React, { createContext, useState } from "react";

export type TTheme = "light" | "dark";

interface ThemeContextProps {
    readonly theme: TTheme;
    readonly setTheme: (theme: TTheme) => void;
    readonly toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    setTheme: () => null,
    toggleTheme: () => null,
});

export const ThemeProvider: React.FC<{
    pTheme: TTheme;
    children: React.ReactChild | React.ReactChild[];
}> = ({ pTheme, children }) => {
    const [theme, setTheme] = useState(pTheme ?? "light");

    const toggleTheme = () => {
        setTheme((prev) => {
            if (theme === "light") return "dark";
            else return "light";
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
