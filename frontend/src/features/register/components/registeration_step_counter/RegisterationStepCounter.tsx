import React from "react";
import { displayIcon, iconStyleClass } from "../utils/RegisterStepUtils";
import './registerationStepCounter.css';

interface RegisterationProps {
    step: number, changeStep(): void
};

export const RegisterationStepCounter: React.FC<RegisterationProps> = (attr) => (
    <div className="reg-step-counter-container">
        <span className={iconStyleClass(attr.step)} onClick={attr.changeStep}>
            {displayIcon(attr.step)}
        </span>
        <span className="reg-step-num">Step {attr.step} of 6</span>
    </div >
);