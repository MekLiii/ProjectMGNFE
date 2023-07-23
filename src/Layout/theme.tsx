import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material/styles";
import {
  ThemeProvider as MuiTheme,
} from "@mui/material";

interface IColors {
  dark: {
    colors: {};
    font: {
      family: string;
      color: string;
    };
  };
  light: {
    colors: {};
    font: {
      family: string;
      color: string;
    };
  };
}

const theme: IColors = {
  dark: {
    colors: {
      background: "#28243D",
      lightGray: "#202024",
      midPurple: "#9155FD",
    },
    font: {
      family: "Roboto, sans-serif",
      color: "#fff",
    },
  },
  light: {
    colors: {
      background: "#f5f5f5",
      lightGray: "#202024",
    },
    font: {
      family: "Roboto, sans-serif",
      color: "#000",
    },
  },
};

interface ITheme {
  children: React.ReactNode;
}
const Theme = ({ children }: ITheme) => (
  <ThemeProvider theme={theme["dark"]}>{children}</ThemeProvider>
);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9155FD",
    },
  },
});

const MuiThemeProvider = ({ children }: ITheme) => {
  return <MuiTheme theme={darkTheme}>{children}</MuiTheme>;
};
export { MuiThemeProvider };
export default Theme;
