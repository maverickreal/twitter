import { StyledInputProps, validatedInputState } from "../index";

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

export const determineValidatedStyles = (state: validatedInputState, validator: (value: string) => boolean) => {
    let { valid, active, typedIn, value, labelColor, labelActive } = state;
    if (typedIn) {
        valid = validator(value);
        if (active && valid) {
            labelColor = 'blue';
            labelActive = true;
        } else if (active && !valid) {
            labelColor = 'error';
            labelActive = true;
        } else if (!active && valid) {
            labelColor = 'gray';
            labelActive = true;
        } else {
            labelColor = 'gray';
            labelActive = false;
        }
    } else {
        if (active) {
            labelActive = true;
            labelColor = 'blue';
        } else {
            labelActive = false;
            labelColor = 'gray';
        }
    }
    state = { ...state, valid, labelColor, labelActive };
    return state;
}