import { RegisterFormOne } from "../register_form_one/RegisterFormOne";

export const determineModalContent = (step: number): JSX.Element | string => {
    switch (step) {
        case 1:
            return <RegisterFormOne />;
        case 2:
            return 'Registeration Step 2';
        case 3:
            return 'Registeration Step 3';
        case 4:
            return 'Registeration Step 4';
        case 5:
            return 'Registeration Step 5';
        case 6:
            return 'Registeration Step 6';
        default:
            return <></>;
    }
};
