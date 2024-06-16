import { createTheme } from "@mui/material/styles";

// Tema base
export const BaseTheme = createTheme({
  palette: {
    primary: {
      main: "#1d684f",
    },
    secondary: {
      main: "#c8ddc3d7",
    },
    error: {
      main: "#E57373",
    },
    background: {
      default: "#372d8f",
      paper: "#04774765",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
});
