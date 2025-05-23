import styled from "styled-components";
import { StyledNextButtonProps } from "../../utils/global_types/interfaces/GlobalInterfaces";

export const StyledNextButton = styled.button<StyledNextButtonProps>`
    width: 100%;
    height: 52px;
    color: white;
    font-size: 17px;
    background-color: ${props => {
        let colorSelect = props.theme.colors.black;

        Object.entries(props.theme.colors)
            .forEach(entry => {
                if (entry[0] === props.color) {
                    colorSelect = entry[1];
                }
            });

        return colorSelect;
    }
    }};
    opacity: ${props => (props.$active ? 1 : 0.5)};
    border-radius: 50px;
    cursor: ${props => (props.$active ? "pointer" : "auto")};
`;
