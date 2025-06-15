import { ThemeProvider } from "styled-components";
import { Landing } from "./pages";
import { Theme, GlobalStyle } from "./config";

export const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Landing />
  </ThemeProvider>
);
