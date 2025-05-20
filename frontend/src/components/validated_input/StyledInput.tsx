import styled from 'styled-components';
import { StyledInputPropsInterface, determineLabelColor, determineStyledInputBorder } from '../../utils';

export const StyledInputBox = styled.div<StyledInputPropsInterface>`
position:relative;
border-radius:5px;
width:100%;
height:56px;
border:${determineStyledInputBorder}
`;

export const StyledInputLabel = styled.span<StyledInputPropsInterface>`
position:absolute;
left:10px;
font-weight:400;
width:100%;
font-size:${({ active }) => active ? 13 : 18}px;
top:${({ active }) => active ? 5 : 16}px;
color:${determineLabelColor};
`;
