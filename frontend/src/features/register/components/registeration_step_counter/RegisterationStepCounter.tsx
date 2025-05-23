import { displayIcon, iconStyleClass } from "../utils/RegisterStepUtils";
import './registerationStepCounter.css';

interface RegisterationProps {
    step: number;
    changeStep(): void;
};

export const RegisterationStepCounter: React.FC<RegisterationProps> = ({ step, changeStep }) => {
    return (
        <div className="reg-step-counter-container">
            <div className={iconStyleClass(step)} onClick={changeStep}>
                {displayIcon(step)}
            </div>

            <div className="reg-step-num">Step {step} of 6</div>
        </div >
    );
};
