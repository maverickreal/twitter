import { useEffect, useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { InputChangeEvent, determineValidatedTextLabel } from "../../utils";
import "./validatedInput.css";
import { Theme } from "../../config";

interface ValidatedTextInputProps {
    label: string;
    valid: boolean;
    name: string;
    data?: string;
    changeValue(e: InputChangeEvent): void;
};

export const ValidatedTextInput: React.FC<ValidatedTextInputProps> = ({ data, valid, name, label, changeValue }) => {
    const [value, setValue] = useState(data || "");
    const [borderActive, setBorderActive] = useState(false);
    const [labelActive, setLabelActive] = useState(false);
    const [color, setColor] = useState(Theme.twitterThemeColors.fg.inactive);

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
        <div className="validated-input" >
            <StyledInputBox $active={borderActive} $valid={valid}>
                <StyledInputLabel color={color}
                                  $active={labelActive}
                                  $valid={valid}
                                  htmlFor={name}
                                  className="mobile toggles">
                    {label}
                </StyledInputLabel>
                <input className="toggles mobile validated-input-value"
                       name={name}
                       onFocus={focus}
                       onChange={update}
                       onBlur={focus}
                       value={data}
                       id={name}
                />
            </StyledInputBox>
        </div>
    );
}
