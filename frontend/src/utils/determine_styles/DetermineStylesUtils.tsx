import { Theme } from "../../config";
import { StyledInputPropsInterface } from "../index";

export const determineStyledInputBorder = (props: StyledInputPropsInterface): string => {
    const { $active, $valid, theme } = props;
    let color = theme.twitterThemeColors.fg.error;

    if ($active && $valid) {
        color = theme.twitterThemeColors.fg.primary;
    } else if (!$active && $valid) {
        color = theme.twitterThemeColors.fg.inactive;
    }
    let size = $active ? 2 : 1;

    return `${size}px solid ${color}`;
};

export const determineLabelColor = (props: StyledInputPropsInterface): string => {
    const { theme, color } = props;

    if (color === Theme.twitterThemeColors.fg.error) {
        return theme.twitterThemeColors.fg.error;
    }

    if (color === Theme.twitterThemeColors.fg.primary) {
        return theme.twitterThemeColors.fg.primary;
    }

    return theme.twitterThemeColors.fg.inactive;
}

export const determineValidatedSelectStyle = (active: boolean, valid: boolean): string => {
    if (!valid) {
        return Theme.twitterThemeColors.fg.error;
    }

    if (active) {
        return Theme.twitterThemeColors.fg.primary;
    }

    return Theme.twitterThemeColors.fg.inactive;
}

export const determineValidatedTextLabel = (active: boolean, valid: boolean): string => {
    if (active) {
        return (valid ? Theme.twitterThemeColors.fg.primary : Theme.twitterThemeColors.fg.error);
    }

    return Theme.twitterThemeColors.fg.inactive;
}
