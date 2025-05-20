import './RegisterFormOne.css';
import { RegisterDateInput } from '../register_date_input/RegisterDateInput';
import { RegisterEmailInput, RegisterNameInputs } from '..';

// interface FormOneState {
//     firstName: string, lastName: string,
//     email: string, dateOfBirth: string
// }

export const RegisterFormOne = (): JSX.Element => {
    // const [stepOneState, setStepOneState] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     dateOfBirth: ''
    // });

    // const updateUser = (e: InputChangeEvent) => setStepOneState({
    //     ...stepOneState,
    //     [e.target.name]: e.target.value
    // });

    return (
        <div className="reg-step-one-container">
            <RegisterNameInputs />
            <RegisterEmailInput />
            <RegisterDateInput />
        </div>
    );
}
