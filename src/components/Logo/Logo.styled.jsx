import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const LogoBlack = styled.span`
display: inline-block;
font-weight: 700;
color: #111111;
letter-spacing: 0.07em;
line-height: 1.5;
font-size: 28px;
@media (min-width: 768px) {
    font-size: 32px;
}
`
export const LogoAccent = styled(LogoBlack)`
color: #F59256;
@media (min-width: 768px) {
    font-size: 32px;
}
`
export const LogoLink = styled(Link)`
`