import { StyledInputProps } from "../index";

export const determineStyledInputBorder = (props: StyledInputProps) => {
    const { active, valid, theme } = props;
    let color = theme.colors.error;

    if (active && valid) color = theme.colors.blue;
    else if (!active && valid) color = theme.colors.gray;

    let size = active ? 2 : 1

    return `${size}px solid ${color}`;
};

export const determineLabelColor = (props: StyledInputProps) => {
    const { theme, color } = props;
    if (color === 'error') return theme.colors.error;
    if (color === 'blue') return theme.colors.blue;
    return theme.colors.gray;
}