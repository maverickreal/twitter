import React from "react";
import { displayIcon } from "../utils/RegisterStepUtils";
import './registerationStepCounter.css';

interface RegisterationProps {
    step: number
};

export const RegisterationStepCounter: React.FC<RegisterationProps> = (attr) => (
    <div className="reg-step-counter-container">
        <span className="reg-step-counter-btn">
            {displayIcon(attr.step)}
        </span>
        <span className="reg-step-num">Step {attr.step} of 6</span>
    </div >
);