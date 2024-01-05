import { useEffect, useState } from 'react';
import './RegisterFormOne.css';
import { ValidatedInput } from '../../../../components/validated_input/ValidatedInput';

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
            <div className="reg-step-one-content">
                <ValidatedInput name={'firstName'} label='First Name' errorMessage="What's your first name?" changeValue={updateUser} validator={() => true} />
                <ValidatedInput name={'lastName'} label={'Last Name'} errorMessage="What's your last name?" changeValue={updateUser} validator={() => true} />
                <ValidatedInput name={'email'} label={'Email'} errorMessage="What's your email?" changeValue={updateUser} validator={() => true} />
            </div>
        </div>
    );
}