import { useState } from 'react';
import './RegisterFormOne.css';
import { ValidatedInput } from '../../../../components/validated_input/ValidatedInput';
import { validateName } from '../../../../services';
import { RegisterDateInput } from '../register_date_input/RegisterDateInput';

interface FormOneState {
    firstName: string, lastName: string,
    email: string, dateOfBirth: string
}

export const RegisterFormOne = () => {
    const [stepOneState, setStepOneState] = useState<FormOneState>({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: ''
    });

    const updateUser = (e: React.ChangeEvent<HTMLInputElement>) => setStepOneState({
        ...stepOneState,
        [e.target.name]: e.target.value
    });

    return (
        <div className="reg-step-one-container">
            <ValidatedInput name={'firstName'} label='First Name' errorMessage="What's your first name?" changeValue={updateUser} validator={validateName} />
            <ValidatedInput name={'lastName'} label={'Last Name'} errorMessage="What's your last name?" changeValue={updateUser} validator={validateName} />
            <ValidatedInput name={'email'} label={'Email'} errorMessage="What's your email?" changeValue={updateUser} validator={() => true} />
            <RegisterDateInput />
        </div>
    );
}