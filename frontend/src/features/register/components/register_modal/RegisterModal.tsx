import { Modal } from "../../../../components";
import { RegisterationStepCounter } from "..";
import { useState } from "react";
import './RegisterModal.css';
import { determineModalContent } from "../utils/RegisterModalUtils";

export const RegisterModal = (): JSX.Element => {
    const [step, setStep] = useState(1);

    const changeStep = () => {
        if (step == 2 || step == 3 || step == 5) {
            setStep(step - 1);
        }
    }

    return (
        <Modal>
            <RegisterationStepCounter step={step} changeStep={changeStep} />
            <div className="register-modal-content">
                {determineModalContent(step)}
            </div>
        </Modal>
    )
}
