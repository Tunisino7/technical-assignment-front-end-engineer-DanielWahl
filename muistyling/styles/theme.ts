import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#9933FF",
            light: "#CFCFEA",
        },
        secondary: {
            main: "#565554",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#9933FF",
            light: "#CFCFEA",
        },
        secondary: {
            main: "#565554",
        },
    },
});
