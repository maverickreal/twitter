import { ValidatedDateSelector } from "../../../../components/validated_input/ValidatedDateSelector";

export const RegisterDateInput = () => {
    return (
        <div className="register-date">
            <ValidatedDateSelector style={'validated-month'} valid={true} name={'Month'} dropDown={() => []} />
            <ValidatedDateSelector style={'validated-day'} valid={true} name={'Day'} dropDown={() => []} />
            <ValidatedDateSelector style={'validated-year'} valid={true} name={'Year'} dropDown={() => []} />
        </div>
    );
};