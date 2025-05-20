import { useState } from "react";
import { ValidatedTextInput } from "../../../../components"
import { AppDispatch } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import { updateRegister } from "../../../../redux/slices/RegisterSlice";
import { validateName } from "../../../../services";
import { InputChangeEvent } from "../../../../utils";

export const RegisterNameInputs = (): JSX.Element => {
    const [firstNameValid, setFirstNameValid] = useState(true);
    const [lastNameValid, setLastNameValid] = useState(true);

    const dispatch: AppDispatch = useDispatch();

    const updateName = (e: InputChangeEvent) => {
        const { name, value } = e.target;
        if (name !== 'firstName' && name !== 'lastName') return;
        dispatch(updateRegister({ name, value }));
        const valid = validateName(value);
        if (name === 'firstName') {
            setFirstNameValid(valid);
        } else {
            setLastNameValid(valid);
        }
        dispatch(updateRegister({ name: `${name}Valid`, value: valid }));
    };

    return (
        <div className="register-name-input">
            <ValidatedTextInput valid={firstNameValid} name={'firstName'} label={'First Name'} changeValue={updateName} />
            <ValidatedTextInput valid={lastNameValid} name={'lastName'} label={'Last Name'} changeValue={updateName} />
        </div>
    )
}
