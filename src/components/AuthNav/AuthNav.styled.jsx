import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavItem = styled.li`
list-style: none;
&:first-child {
    margin-right: 20px;
}
`
export const NavBtnLink = styled(NavLink)`
display: inline-block;
cursor: pointer;
padding: 8px 28px;
border: 2px solid #F59256;
background-color: #ffffff;
border-radius: 40px;
color: #111111;
letter-spacing: 0.04em;
font-family: 'Manrope', sans-serif;
font-size: 14px;
line-height: 1.35;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
@media (min-width: 768px) {
padding: 8.5px 28px;
font-size: 20px;
}
@media (min-width: 1280px) {
padding: 10px 28px;
}
&.active {
    background-color: #F59256;
    color: #ffffff;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
`