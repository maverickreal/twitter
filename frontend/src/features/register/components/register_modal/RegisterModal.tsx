import { Modal } from "../../../../components";
import { RegisterationStepCounter } from "..";
import { useState } from "react";

export const RegisterModal: React.FC = () => {
    const [step, setStep] = useState<number>(1);
    const changeStep = () => {
        if (step != 4 && step != 6) setStep(step - 1);
    }
    return (
        <Modal>
            <div className="register-container">
                <RegisterationStepCounter step={step} changeStep={() => changeStep()} />
            </div>
        </Modal>
    )
}