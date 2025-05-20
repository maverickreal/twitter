import { displayIcon, iconStyleClass } from "../utils/RegisterStepUtils";
import './registerationStepCounter.css';

interface RegisterationProps {
    step: number, changeStep(): void
};

export const RegisterationStepCounter = (attr: RegisterationProps): JSX.Element => {
    return (
        <div className="reg-step-counter-container">
            <div className={iconStyleClass(attr.step)} onClick={attr.changeStep}>
                {displayIcon(attr.step)}
            </div>
            <div className="reg-step-num">Step {attr.step} of 6</div>
        </div >
    );
}
