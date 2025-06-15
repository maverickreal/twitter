interface TwitterThemeColorsFgInterface {
    primary: string;
    error: string;
    warning: string;
    success: string;
    info: string;
    inactive: string;
    off: string;
};

interface TwitterThemeColorsBgInterface {
    primary: string;
    backdrop: string;
};

interface TwitterThemeColorsInterface {
    fg: TwitterThemeColorsFgInterface;
    text: string;
    bg: TwitterThemeColorsBgInterface;
};

export interface TwitterThemeInterface {
    twitterThemeColors: TwitterThemeColorsInterface;
};

export interface StyledInputPropsInterface {
    $active: boolean;
    $valid: boolean;
    theme: TwitterThemeInterface;
    color?: string;
};

export interface validatedInputStateInterface {
    $active: boolean;
    $valid: boolean;
    typedIn: boolean;
    labelActive: boolean;
    labelColor: string;
    value: string;
};

export interface DateInterface {
    day: number;
    month: number;
    year: number;
};

export interface StyledNextButtonProps {
    $active: boolean;
    color: string;
    theme: TwitterThemeInterface;
};
