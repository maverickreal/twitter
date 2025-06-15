import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --twitter-theme-text-color: ${props => props.theme.twitterThemeColors.text};
  --twitter-theme-fg-primary-color: ${props => props.theme.twitterThemeColors.fg.primary};
  --twitter-theme-fg-error-color: ${props => props.theme.twitterThemeColors.fg.error};
  --twitter-theme-fg-warning-color: ${props => props.theme.twitterThemeColors.fg.warning};
  --twitter-theme-fg-success-color: ${props => props.theme.twitterThemeColors.fg.success};
  --twitter-theme-fg-info-color: ${props => props.theme.twitterThemeColors.fg.info};
  --twitter-theme-fg-inactive-color: ${props => props.theme.twitterThemeColors.fg.inactive};
  --twitter-theme-fg-off-color: ${props => props.theme.twitterThemeColors.fg.off};
  --twitter-theme-bg-primary-color: ${props => props.theme.twitterThemeColors.bg.primary};
  --twitter-theme-bg-backdrop-color: ${props => props.theme.twitterThemeColors.bg.backdrop};
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family:"IBM Plex Sans", sans-serif;
  font-weight: 500;
  color: var(--twitter-theme-text-color);
  background-color: var(--twitter-theme-bg-primary-color);
}
`;

export default GlobalStyle;
  