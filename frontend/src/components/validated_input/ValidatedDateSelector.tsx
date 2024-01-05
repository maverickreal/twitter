import { useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";

interface ValidatedDateSelectorProps {
    style: string,
    valid: boolean,
    name: string,
    dropDown(): JSX.Element[]
};

export const ValidatedDateSelector: React.FC<ValidatedDateSelectorProps> = ({ style, name, valid, dropDown }) => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(0);

    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('Dispatch this change to a user.');
        console.log('value: ', e.target.value);
        setValue(+e.target.value);
    };

    const toggleValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setActive(!active);
    }
    return (
        <div className={style}>
            <StyledInputBox active={active} valid={valid}>
                <StyledInputLabel color={'gray'} active={true} valid={valid}>
                    {name}
                </StyledInputLabel>
                <select className="validated-input-value text-color" onChange={changeValue} onFocus={toggleValue} onBlur={toggleValue}>
                    {dropDown()}
                </select>
            </StyledInputBox>
        </div>
    )
};