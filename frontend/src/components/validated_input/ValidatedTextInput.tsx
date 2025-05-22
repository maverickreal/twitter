import { useEffect, useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { InputChangeEvent, determineValidatedTextLabel } from "../../utils";

interface ValidatedTextInputProps {
    label: string;
    valid: boolean;
    name: string;
    changeValue(e: InputChangeEvent): void;
};

export const ValidatedTextInput: React.FC<ValidatedTextInputProps> = ({ valid, name, label, changeValue }) => {
    const [value, setValue] = useState('');
    const [borderActive, setBorderActive] = useState(false);
    const [labelActive, setLabelActive] = useState(false);
    const [color, setColor] = useState('gray');

    useEffect(() => {
        if (value && !labelActive) {
            setLabelActive(true);
        }
        setColor(determineValidatedTextLabel(borderActive, valid));
    }, [value, borderActive, labelActive, color, valid]);

    const focus = () => {
        setBorderActive(_borderActive => !_borderActive);

        if (!value) {
            setLabelActive(_labelActive => !_labelActive);
        }
    }

    const update = (e: InputChangeEvent) => {
        setValue(e.target.value);
        console.log('Send the info back to the dispatcher.');
        changeValue(e);
    }

    return (
        <div className="validated-text-input" >
            <StyledInputBox $active={borderActive} $valid={valid}>
                <StyledInputLabel color={color} $active={labelActive} $valid={valid}>
                    {label}
                </StyledInputLabel>
                <input
                    className='validated-input-value'
                    name={name} onFocus={focus}
                    onChange={update} onBlur={focus}
                />
            </StyledInputBox>
        </div>
    );
}
