interface ThemeColors extends Record<string, string | boolean> {
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

export interface validatedInputState extends Record<string, boolean | string> {
    active: boolean,
    valid: boolean,
    typedIn: boolean,
    labelActive: boolean,
    labelColor: string,
    value: string
};

export interface Date extends Record<string, number> {
    day: number,
    month: number,
    year: number
};