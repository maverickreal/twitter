import { useEffect, useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determineValidatedSelectStyle } from "../../utils/determine_styles/DetermineStylesUtils";

interface ValidatedDateSelectorProps {
    style: string,
    valid: boolean,
    name: string,
    dropDown(): JSX.Element[],
    dispatcher(name: string, value: string | number | boolean): void
};

export const ValidatedDateSelector: React.FC<ValidatedDateSelectorProps> = (
    { style, name, valid, dropDown, dispatcher }
) => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(0);
    const [color, setColor] = useState('gray');

    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(+e.target.value);
        console.log('Dispatch this change to a user.');
        console.log('value: ', e.target.value);
        dispatcher(name.toLowerCase(), e.target.value);
    };

    const toggleValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setActive(!active);
    }
    useEffect(() => setColor(determineValidatedSelectStyle(active, valid)), [active, valid, value]);

    return (
        <div className={style}>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputLabel color={color} active={true} valid={valid}>
                    {name}
                </StyledInputLabel>
                <select className="validated-input-value text-color" onChange={changeValue} onFocus={toggleValue} onBlur={toggleValue}>
                    {dropDown()}
                </select>
            </StyledInputBox>
        </div>
    )
};