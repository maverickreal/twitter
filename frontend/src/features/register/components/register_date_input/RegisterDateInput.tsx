import { useDispatch } from "react-redux";
import { ValidatedDateSelector } from "../../../../components/validated_input/ValidatedDateSelector";
import { AppDispatch } from "../../../../redux/store";
import { AgeUtils } from "../../../../utils";
import { updateRegister } from "../../../../redux/slices/RegisterSlice";

export const RegisterDateInput = () => {
    const dispatch: AppDispatch = useDispatch();
    const updateState = (name: string, value: number) => {
        dispatch(updateRegister({ name, value }));
    }
    const ageUtils = new AgeUtils();
    return (
        <div className="register-date">
            <ValidatedDateSelector dispatcher={updateState} style={'validated-month'} valid={true} name={'Month'} dropDown={() => ageUtils.getMonths()} />
            <ValidatedDateSelector dispatcher={updateState} style={'validated-day'} valid={true} name={'Day'} dropDown={() => ageUtils.getDays()} />
            <ValidatedDateSelector dispatcher={updateState} style={'validated-year'} valid={true} name={'Year'} dropDown={() => ageUtils.getYears()} />
        </div>
    );
};