import { Modal } from "../../../../components";
import { RegisterationStepCounter } from "..";
import './RegisterModal.css';
import { determineModalContent } from "../utils/RegisterModalUtils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { decrementStep } from "../../../../redux/slices/RegisterSlice";

export const RegisterModal = (): JSX.Element => {
    const state = useSelector((state: RootState) => state.register);
    const dispatch = useDispatch();

    const changeStep = () => {
        dispatch(decrementStep());
    };

    return (
        <Modal>
            <RegisterationStepCounter step={state.step} changeStep={changeStep} />
            <div className="register-modal-content">
                {determineModalContent(state.step)}
            </div>
        </Modal>
    );
};
