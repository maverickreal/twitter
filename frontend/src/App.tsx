import { Landing } from './pages';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeInterface } from './utils/index';

const theme: ThemeInterface = {
    colors: {
        blue: '#1DA1F2',
        black: '#14171a',
        // darkGray: '#657786',
        darkGray: 'darkGray',
        // lightGray: '#E1E8ED',
        lightGray: 'lightgray',
        // gray: '#AAB8C2',
        gray: 'gray',
        white: '#F5F8FA',
        error: 'red'
    }
};

const GlobalStyle = createGlobalStyle`
*{
    font-family:'IBM Plex Sans', sans-serif;
    font-weight:500;
}
`;

export const App = () => (
    <ThemeProvider theme={theme}><GlobalStyle /><Landing /></ThemeProvider>);