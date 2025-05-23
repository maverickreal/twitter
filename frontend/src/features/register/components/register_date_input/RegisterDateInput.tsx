import { useDispatch, useSelector } from "react-redux";
import { ValidatedDateSelector } from "../../../../components/validated_input/ValidatedDateSelector";
import { AppDispatch, RootState } from "../../../../redux/store";
import { AgeUtils } from "../../../../utils";
import { updateRegister } from "../../../../redux/slices/RegisterSlice";
import { useEffect, useState } from "react";
import { DateInterface } from "../../utils/../../../utils/global_types/interfaces/GlobalInterfaces";

interface RegisterDateInputProps {
    date: DateInterface;
};

export const RegisterDateInput: React.FC<RegisterDateInputProps> = ({ date }) => {
    const state = useSelector((state: RootState) => state.register);
    const dispatch: AppDispatch = useDispatch();
    const [valid, setValid] = useState(true);
    const ageUtils = new AgeUtils();

    const updateState = (name: string, value: number) => {
        dispatch(updateRegister({ name, value }));
    }
    useEffect(() => {
        setValid(ageUtils.isAgeElgible(state.dateOfBirth));
        dispatch(updateRegister({ name: 'dateOfBirthValid', value: valid }));
    }, [state.dateOfBirth.day, state.dateOfBirth.month, state.dateOfBirth.year, state.dateOfBirthValid, valid]);

    return (
        <div className="register-date">
            <ValidatedDateSelector
                dispatcher={updateState}
                style={'validated-day'}
                valid={valid}
                name={'Day'}
                dropDown={() => ageUtils.getDays()}
                data={date.day} />

            <ValidatedDateSelector
                dispatcher={updateState}
                style={'validated-month'}
                valid={valid}
                name={'Month'}
                dropDown={() => ageUtils.getMonths()}
                data={date.month} />

            <ValidatedDateSelector
                dispatcher={updateState}
                style={'validated-year'}
                valid={valid}
                name={'Year'}
                dropDown={() => ageUtils.getYears()}
                data={date.year} />
        </div>
    );
};
