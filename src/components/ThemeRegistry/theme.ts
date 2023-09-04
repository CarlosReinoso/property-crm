import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: "20px",
          maxHeight: "40px",
        },
        contained: {
          backgroundColor: "green",
          "&:hover": {
            backgroundColor: "lightgreen",
          },
        },
      },
    },
  },
});

export default theme;
