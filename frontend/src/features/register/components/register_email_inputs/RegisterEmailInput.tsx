import { useState } from "react";
import { ValidatedTextInput } from "../../../../components";
import { AppDispatch } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import { updateRegister } from "../../../../redux/slices/RegisterSlice";
import { validateEmail } from "../../../../services/validators/Validators";
import { InputChangeEvent } from "../../../../utils";

interface RegisterEmailInputProps {
    email: string;
};

export const RegisterEmailInput:React.FC<RegisterEmailInputProps> = ({email}) => {
    const [validEmail, setValidEmail] = useState(true);
    const dispatch: AppDispatch = useDispatch();

    const updateEmail = (e: InputChangeEvent) => {
        dispatch(updateRegister({
            name: 'email', value: e.target.value
        }));
        const valid = validateEmail(e.target.value);
        setValidEmail(valid);
        dispatch(updateRegister({
            name: 'emailValid', value: valid
        }));
    }

    return (
        <div className="register-email-input">
            <ValidatedTextInput
                label={"Email"}
                valid={validEmail}
                name={"email"}
                changeValue={updateEmail}
                data={email} />
        </div>
    );
};
