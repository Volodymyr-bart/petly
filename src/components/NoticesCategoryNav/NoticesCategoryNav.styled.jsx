import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const NoticesCategoryNavStyled = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    list-style: none;

    @media (min-width: 768px) {
        margin-bottom: 60px;
        gap: 12px;
    }
`;

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    padding: 8px 28px;
    /* margin-right: 10px; */
    border: 2px solid #F59256;
    border-radius: 40px;
    text-decoration: none;

    font-weight: 500;
    font-size: 14px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    color: #111111;
    background: #FFFFFF;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
                

    :hover,
    :focus {
        background-color: rgb(245, 146, 86, 0.5);
    }

    &.active {
        background-color: #F59256;
        color: #ffffff;
        pointer-events: none;
    }

    @media (min-width: 768px) {
        padding: 10px 28px;
        font-size: 20px;
        line-height: 1.35;
        letter-spacing: 0.04em;
    }
`;


export const AddPetStyled = styled.button`
    position: fixed;
    bottom: 40px;
    right: 20px;
    z-index: 10;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 80px;
    padding: 16px;
    border-radius: 50%;
    border: none;
    color: #ffffff;
    background: #F59256;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    font-size: 12px;
    line-height: 1.33;

    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
                

    :hover,
    :focus {
        background-color: rgb(245, 146, 86, 0.5);
    }

    @media (min-width: 768px) {
        position: static;
        z-index: 0;

        flex-direction: row-reverse;
        flex-wrap: nowrap;

        margin-left: auto;
        width: 129px;
        height: 44px;
        padding: 0;
        border-radius: 40px;
        background-color: #FDF7F2;
        box-shadow: none;
        
        

        span {
            display: block;
            width: 73px;
            font-weight: 500;
            font-size: 20px;
            line-height: 1.35;
            color: #111111;
        }

        div {
            margin-left: 12px;
            height: 32px;
            background-color: #f06b19;
            border-radius: 50%;
            
        }
        
    }
`;


export const NavLinkContainerStyled = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;


