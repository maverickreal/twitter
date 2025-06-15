// import styled from 'styled-components';
// import {
//     StyledInputPropsInterface,
//     determineLabelColor,
//     determineStyledInputBorder
// } from '../../utils';

// export const StyledInputBox = styled.div<StyledInputPropsInterface>`
//     position: relative;
//     border-radius: 5px;
//     height: 56px;
//     border: ${determineStyledInputBorder};

//     .mobile {
//         display: inline-block;
//     }

//     label.mobile {
//         transform: translate(${({ $active }) => ($active ? 8 : 15)}px,
//                              ${({ $active }) => ($active ? 0 : 13)}px);
//         ${({ $active }) => ($active ? "width: 64px" : "")}
//     }

//     input.mobile {
//         transform: translate(${({ $active }) => ($active ? -55 : 15)}px,
//                              ${({ $active }) => ($active ? 25 : 13)}px);
//     }
// `;

// export const StyledInputLabel = styled.label<StyledInputPropsInterface>`
//     font-weight: 400;
//     font-size: ${({ $active }) => ($active ? 13 : 18)}px;
//     color: ${determineLabelColor};
// `;


import styled from 'styled-components';
import {
    StyledInputPropsInterface,
    determineLabelColor,
    determineStyledInputBorder
} from '../../utils';

export const StyledInputBox = styled.div<StyledInputPropsInterface>`
    position: relative;
    border-radius: 5px;
    height: 56px;
    border: ${determineStyledInputBorder};

    .mobile {
       position: absolute;
    }

    label.mobile {
        margin: 2% 0 0 2%;
        width: -webkit-fill-available;

        &.toggles {
            ${({$active}) => (
                $active ?
                "width: 100%;" :
                "margin: 6% 0 0 4%; width: fit-content;"
            )}
        }
    }

    input.mobile.toggles {
        ${({$active}) => (
            $active ?
            "bottom: 0; width: 100%;" :
            "right: 4%; top: 25%;"
        )}
    }

    select.mobile {
        width: 75%;
        transform: translateX(3%);
        height: 250%;
        top: 10%;
    }
`;

export const StyledInputLabel = styled.label<StyledInputPropsInterface>`
    font-weight: 400;
    font-size: ${({ $active }) => ($active ? 13 : 18)}px;
    color: ${determineLabelColor};
`;
