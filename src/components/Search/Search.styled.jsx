import styled from "styled-components";

export const SearchStyled = styled.div`
    position: relative;

    input {
        width: 280px;
        height: 40px;
        margin-bottom: 28px;
        padding: 10px 42px 10px 12px;
        box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
        border-radius: 20px;
        border: none;
        
        font-weight: 500;
        font-size: 16px;
        line-height: 1,4;
        letter-spacing: 0.04em;
        color: #535353;
    }

    button {
        position: absolute;
        top: 6px;
        right: 12px;

        height: 28px;
        padding: 0;
        
        background-color: #ffffff;
        border: none;
    }

    @media (min-width: 768px) {
        text-align: center;

        input {
            width: 608px;
            height: 44px;
            
            margin-bottom: 40px;
            padding: 8px 48px 8px 20px;            
            border-radius: 40px;
            
            
            font-weight: 500;
            font-size: 20px;
        }
        
        button {           
            top: 8px;
            right: 60px;
        }
    }

    @media (min-width: 1280px) {        
        button {             
            right: 330px;
        }
    }
`;