/*import { useState } from "react";
import { InputChangeEvent } from "../../utils";

interface TextInputProps {
    name: string, label: string, errorMessage: string,
    onChange: (e: InputChangeEvent) => void,
    maxLength?: number, validator?: (value: string) => boolean
}

export const TextInput = ({ name, label, onChange }: TextInputProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    const updateInputValue = (e: InputChangeEvent) => {
        onChange(e);
        setInputValue(e.target.value);
    }

    return (
        <div className='text-input'>
            <div>
                <span>{label}</span>
                <input name={name} onChange={updateInputValue} />
            </div>
        </div>
    );
}*/ // ??? need or not