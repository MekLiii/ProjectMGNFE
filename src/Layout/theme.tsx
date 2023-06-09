import { ThemeProvider } from "styled-components";

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

const theme:IColors = {
  dark: {
    colors: {
      background: "#121214",
      lightGray: "#202024",
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
export default Theme;
