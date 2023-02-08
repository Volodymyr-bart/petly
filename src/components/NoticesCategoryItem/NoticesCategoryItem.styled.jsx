import styled from "styled-components";

import FullHeart from "../../noticesImage/fullheart.png"
import EmptyHeart from "../../noticesImage/emptyheart.png"
import FullBucket from "../../noticesImage/fullbucket.png"
import EmptyBucket from "../../noticesImage/emptybucket.png"
import ImgPlaceholder from "../../noticesImage/ph.png"

export const NoticesCategoryItemStyled = styled.li`

    position: relative;

    height: 606px;
    margin-bottom: 32px;
    padding-bottom: 12px;

    background-color: #FFFFFF;
    text-align: center;

    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 0px 20px 20px;

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        transform: scale(1.01);        
    }


    h2 {
        text-align: left;
        margin-bottom: 20px;
        padding-left: 20px;
        padding-right: 30px;
        font-size: 28px;
        line-height: 1.36;
        letter-spacing: -0.01em;
        color: #111111;
    }

    span {
        min-width: 50px;
    }

    ul {
        height: 88px;
        margin: 0;
        padding: 0 20px 0 20px;
        list-style: none;

        margin-bottom: 20px;
    }

    li {
        height: 22px;
       
        font-weight: 500;
        font-size: 16px;
        line-height: 1.4;

        display: flex;        
        overflow: hidden;

        color: #111111;        
    }    

    p {
        text-align: left;        
    }

    span {
        margin-right: 13px;
    }

    @media (min-width: 768px) {
        width: 336px;
        border-radius: 0px 0px 40px 40px;

        img {
            width: 336px;
        }        
    }

    @media (min-width: 1280px) {
        width: 288px;
        border-radius: 0px 0px 40px 40px;

        img {
            width: 288px;
        }        
    }
`;

export const ImageThumbStyled = styled.div`
    height: 288px;
    width: 100%;
    margin-bottom: 20px;

    background-color: #FFFFFF;
    background-image: url(${ImgPlaceholder});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
        width: 336px;       
    }

    @media (min-width: 1280px) {
        width: 288px;        
    }
`;

export const ButtonThumbStyled = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 12px;

        height: 88px;

    /* @media (min-width: 768px) {
               
    }

    @media (min-width: 1280px) {
                
    } */
`;


export const ButtonStyled = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: start;   
    width: 248px;    
    padding: 8px 80px;   
    border: 2px solid #F59256;
    border-radius: 40px;

    background-color: #FFFFFF;
    background-image: url(${EmptyBucket});
    background-size: 16px;
    background-position: 147px;
    background-repeat: no-repeat;
    color: #F59256;

    cursor: pointer;

    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
                

    :hover,
    :focus {
        border-color: #FF6101;
        color: #FF6101;
        background-image: url(${FullBucket});
    } 
`;


export const CategoryStyled = styled.div`
    position: absolute;
    top: 20px;
    left: 0;

    width: 158px;
    height: 28px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 0 20px 20px 0;
    text-align: center;
    
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;    
    letter-spacing: 0.04em;
    color: #111111;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);

`;

export const AddToFavoriteStyled = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;

    width: 44px;
    height: 44px;
    padding: 8px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);    
    background-image: url(${p => p.isFavorite ? FullHeart : EmptyHeart});
    background-size: 28px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;

    /* transition: background-image 250ms cubic-bezier(0.4, 0, 0.2, 1);                

    :hover {        
        background-image: url(${FullHeart});
    } */

`;