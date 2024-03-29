/*import { useEffect, useState } from 'react';
import { StyledInputBox, StyledInputLabel } from './StyledInput';
import './validatedInput.css';
import '../../../index.css';
import { InputChangeEvent, determineValidatedStyles, validatedInputStateInterface } from '../../utils';

interface validatedInputUserProps {
    name: string,
    label: string,
    errorMessage: string,
    validator(value: string): boolean,
    changeValue(e: InputChangeEvent): void,
    attr?: Record<string, string | number | boolean>
};

export const ValidatedInput: React.FC<validatedInputUserProps> = ({ label, errorMessage, attr, changeValue, validator }) => {
    const [validatedState, setValidatedState] = useState<validatedInputStateInterface>({
        active: false,
        valid: true,
        typedIn: false,
        labelActive: false,
        labelColor: 'gray',
        value: ''
    });
    useEffect(() => setValidatedState(determineValidatedStyles(validatedState, validator)), [validatedState.active, validatedState.typedIn, validatedState.labelActive, validatedState.labelColor, validatedState.value])
    const focus = () => {
        setValidatedState({ ...validatedState, active: !validatedState?.active });
    }
    const updateValue = (e: InputChangeEvent) => {
        setValidatedState({
            ...validatedState, typedIn: true, value: e.target.value
        });
        changeValue(e);
    }
    return (
        <div className="validated-input">
            <StyledInputBox active={validatedState.active} valid={validatedState.valid}>
                <StyledInputLabel color={validatedState.labelColor} active={validatedState.labelActive} valid={validatedState.valid}>{label}</StyledInputLabel>
                <input className="validated-input-value text-color" onFocus={focus} onBlur={focus} onChange={updateValue} {...attr} />
            </StyledInputBox>
            {validatedState.valid ? <></> : <span>{errorMessage}</span>}
        </div>
    );
}*/ // ??? need or not