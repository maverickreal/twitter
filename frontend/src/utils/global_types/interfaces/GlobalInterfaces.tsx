interface ThemeColorsInterface {
    blue: string,
    black: string,
    darkGray: string,
    lightGray: string,
    white: string,
    gray: string,
    error: string
};

export interface ThemeInterface {
    colors: ThemeColorsInterface
};

export interface StyledInputPropsInterface {
    active: boolean,
    valid: boolean,
    theme: ThemeInterface,
    color?: string
};

export interface validatedInputStateInterface {
    active: boolean,
    valid: boolean,
    typedIn: boolean,
    labelActive: boolean,
    labelColor: string,
    value: string
};

export interface DateInterface {
    day: number,
    month: number,
    year: number
};
