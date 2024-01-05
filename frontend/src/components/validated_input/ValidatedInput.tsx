import { StyledInputBox, StyledInputLabel } from './StyledInput';
import './validatedInput.css';

interface validatedInputUserProps {
    name: string,
    label: string,
    errorMessage: string,
    validator(value: string): boolean,
    changeValue(e: React.ChangeEvent<HTMLInputElement>): void,
    attr?: Record<string, string | number | boolean>
};

export const ValidatedInput: React.FC<validatedInputUserProps> = ({ label, errorMessage, attr }) => {
    return (
        <div className="validated-input">
            <StyledInputBox active={false} valid={true}>
                <StyledInputLabel color={'gray'} active={false} valid={true}>{label}</StyledInputLabel>
                <input className="validated-input-value" onFocus={() => { }} onBlur={() => { }} onChange={() => { }} {...attr} />
            </StyledInputBox>
            <span>{errorMessage}</span>
        </div>
    );
}