import styled from "styled-components";

export const NoticesCategoryItemStyled = styled.li`

    position: relative;

    margin-bottom: 32px;

    background: #FFFFFF;
    text-align: center;

    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
    border-radius: 0px 0px 20px 20px;    

    img {
        margin-bottom: 20px;
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
        margin: 0;
        padding: 0 20px 0 20px;
        list-style: none;

        margin-bottom: 20px;
    }

    li {
       
        font-weight: 500;
        font-size: 16px;
        line-height: 1.4;

        display: flex;
        justify-content: space-between;
        align-items: center;
        /* text-align: center; */

      

        color: #111111;
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


export const ButtonStyled = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;   
    width: calc(100% - 40px);
    margin-bottom: 12px;
    padding-top: 8px;
    padding-bottom: 8px;    
    border: 2px solid #F59256;
    border-radius: 40px;
    background: #FFFFFF;
    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
                

    :hover,
    :focus {
        background-color: #dcd1d1;
    }

    @media (min-width: 768px) {
        width: 248px;
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
    background: rgba(255, 255, 255, 0.6);
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
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
    cursor: pointer;

`;