import { createTheme } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: ColorPartial;
  }

  interface Theme {
    palette: Palette;
  }

  interface PaletteOptions {
    neutral: ColorPartial;
  }
}

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#463abe",
      dark: "#342A8B",
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#0b0b0c",
      secondary: "#61616a",
    },
    neutral: {
      50: "#dbdbde",
      100: "#C3C3C3",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: ["DM Sans", "sans-serif"].join(","),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
        },
      },
      variants: [
        {
          props: {
            color: "primary",
          },
          style: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            borderRadius: "16px",
            height: "52px",
            boxSizing: "border-box",
            "&:disabled": {
              backgroundColor: theme.palette.neutral[50],
              color: theme.palette.text.disabled,
            },
          },
        },
      ],
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: ["DM Sans", "sans-serif"].join(","),
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
});

export default theme;
