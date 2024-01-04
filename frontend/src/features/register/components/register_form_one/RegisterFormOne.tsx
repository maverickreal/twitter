import { useEffect, useState } from 'react';
import './RegisterFormOne.css';
import { TextInput } from '../../../../components';

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

    useEffect(() => console.log('stepOneStat altered: ', stepOneState), [stepOneState]);

    return <div className="reg-step-one-container">
        <div className="reg-step-one-content">
            <TextInput name={'firstName'} label={'firstName'} errorMessage={'Please enter your first name'} onChange={updateUser}></TextInput>
            <TextInput name={'lastName'} label={'lastName'} errorMessage={'Please enter your last name'} onChange={updateUser}></TextInput>
            <TextInput name={'email'} label={'email'} errorMessage={'Please enter your email'} onChange={updateUser}></TextInput>
        </div>
    </div>
}