import { useState } from "react";

interface TextInputProps {
    name: string, label: string, errorMessage: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    maxLength?: number, validator?: (value: string) => boolean
}

export const TextInput = ({ name, label, onChange }: TextInputProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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
}