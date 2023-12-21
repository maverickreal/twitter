import { Modal } from "../../../../components";
import { RegisterationStepCounter } from "..";

export const RegisterModal: React.FC = () => {
    return (
        <Modal>
            <div className="register-container">
                <RegisterationStepCounter step={1} />
            </div>
        </Modal>
    )
}