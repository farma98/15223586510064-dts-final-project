import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F9BC15",
      contrastText: "#1C2D5A",
    },
    secondary: {
      main: "#1C2D5A",
      contrastText: "#FFFFFF",
    },
    tersier: {
      main: "#FFFFFF",
      contrastText: "#000000",
    },
  },
  typography: {
    allVariants: {
      fontFamily: ["Inter", "Roboto"].join(","),
      color: "#FFFFFF",
    },
  },
});

export default theme;
