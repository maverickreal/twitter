import './RegisterFormOne.css';
import { RegisterDateInput } from '../register_date_input/RegisterDateInput';
import { RegisterEmailInput, RegisterNameInputs } from '..';
import { StyledNextButton } from '../../../../components/register_next_button/RegisterNextButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { incrementStep } from '../../../../redux/slices/RegisterSlice';
import { Theme } from "../../../../config";

export const RegisterFormOne = (): JSX.Element => {
    const [buttonActive, setButtonActive] = useState(false);
    const registerState = useSelector((state: RootState) => state.register);
    const dispatch = useDispatch();

    const nextPage = () => {
        dispatch(incrementStep());
    };

    useEffect(() => {
        const isActive = registerState.dateOfBirthValid
            && registerState.emailValid
            && registerState.firstName
            && registerState.lastNameValid;

        setButtonActive(!!isActive);
    }, [registerState]);

    return (
        <div className="reg-step-one-container">
            <div className="reg-step-one-content">
                <RegisterNameInputs
                    firstName={registerState.firstName}
                    lastName={registerState.lastName} />
                <RegisterEmailInput email={registerState.email} />
                <RegisterDateInput date={registerState.dateOfBirth} />
            </div>
            <StyledNextButton
                disabled={!buttonActive}
                color={Theme.twitterThemeColors.fg.off}
                $active={buttonActive}
                onClick={nextPage}>
                Next
            </StyledNextButton>
        </div>
    );
};
