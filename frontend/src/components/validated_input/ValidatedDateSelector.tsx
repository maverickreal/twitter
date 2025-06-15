import { useEffect, useState } from "react";
import { StyledInputBox, StyledInputLabel } from "./StyledInput";
import { determineValidatedSelectStyle } from "../../utils/determine_styles/DetermineStylesUtils";
import "./validatedInput.css";
import { Theme } from "../../config";
import { ExpandMoreRounded } from "@mui/icons-material";

interface ValidatedDateSelectorProps {
    style: string;
    valid: boolean;
    name: string;
    dropDown(): JSX.Element[];
    dispatcher(name: string, value: string | number | boolean): void;
    data?: number;
};

export const ValidatedDateSelector: React.FC<ValidatedDateSelectorProps> = (
    { data, name, valid, dropDown, dispatcher }
): JSX.Element => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(0);
    const [color, setColor] = useState(Theme.twitterThemeColors.fg.inactive);

    const changeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(+e.target.value);
        console.log('Dispatch this change to a user.');
        console.log('value: ', e.target.value);
        dispatcher(name.toLowerCase(), +e.target.value);
    };

    const toggleValue = () => {
        setActive(_active => !_active);
    }

    useEffect(() => {
        setColor(determineValidatedSelectStyle(active, valid));
    }, [active, valid, value]);

    return (
        <div className="validated-input">
            <StyledInputBox $active={active} $valid={valid}>
                <StyledInputLabel color={color}
                    $active={true}
                    $valid={valid}
                    className="mobile">
                    {name}
                    <select className="mobile validated-input-value validated-date-selector"
                        onChange={changeValue}
                        onFocus={toggleValue}
                        onBlur={toggleValue}
                        value={data}>
                        {dropDown()}
                    </select>
                    <ExpandMoreRounded sx={{
                        fontSize: 34,
                        color: (active ? Theme.twitterThemeColors.fg.primary : Theme.twitterThemeColors.fg.inactive),
                        position: "absolute",
                        top: "25%",
                        right: "0"
                    }}>
                    </ExpandMoreRounded>
                </StyledInputLabel>
            </StyledInputBox>
        </div>
    )
};
