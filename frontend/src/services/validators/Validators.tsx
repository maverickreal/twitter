export const validateName = (value: string): boolean => {
    return value.length > 0;
}

export const validateEmail = (value: string): boolean =>
    (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).test(value);
