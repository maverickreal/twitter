interface ThemeColors {
    blue: string,
    black: string,
    darkGray: string,
    lightGray: string,
    white: string,
    gray: string,
    error: string
};

export interface Theme {
    colors: ThemeColors
};

export interface StyledInputProps {
    active: boolean,
    valid: boolean,
    theme: Theme,
    color?: string
};