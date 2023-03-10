import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const FormStyled = styled(Form)`
    width: 100%;

    @media screen and (min-width: 768px) {
        
        }

        @media screen and (min-width: 1280px) {
      
        }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;  
  }

`;

export const InputBox = styled.div`
position: relative
`;

export const FieldStyled = styled(Field)`
    width: 100%;
    padding: 11px 45px 11px 14px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    background: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
        :hover,
        :focus {
        cursor: pointer;
        outline: 2px solid #F59256;
        }     
`;

export const ListStyled = styled.ul`
  z-index: 3;
  position: absolute;
  left: 23px;
  background: #FDF7F2;
  list-style: none;
  width: 234px;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  

  @media screen and (min-width: 768px) {
    width: 402px;  
  }

  @media screen and (min-width: 1280px) {
    width: 412px; 
  }

`;

export const ItemStyled = styled.li`
  padding: 11px 14px;
  background: #FDF7F2;
  :last-child {
  border-radius: 40px;
  };
 
  :hover {
    background: #F59256;
      cursor: pointer;
      color: #FDF7F2;
    }    

`;

export const CityStyled = styled.p`

`;

export const RegionStyled = styled.span`

`;

export const ShowPassword = styled.div`
    position: absolute;
    bottom: 10px;
    right: 5%;

`;


export const ErrorMessageStyled = styled(ErrorMessage)`
position: absolute;
left: 16px;
bottom: -20px;
font-size: 16px;
    color: #9d3158;

`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
width: 100%;
padding: 10px 28px;
background: #F59256;
border-radius: 40px;
border: none;
font-weight: 500;
font-size: 20px;
line-height: 1.35;
letter-spacing: 0.04em;
color: #FFFFFF;
:hover {
  background: #f7a878;
    cursor: pointer;
  }    
`;

export const ButtonBack = styled.button`
width: 100%;
padding: 10px 28px;
background: #FFFFFF;
border-radius: 40px;
border: 2px solid #F59256;
font-weight: 500;
font-size: 20px;
line-height: 1.35;
letter-spacing: 0.04em;
color: #000000;
:hover {
  background: #fde9dd;
    cursor: pointer;
  }    
`;


export const TextStyled = styled.p`
text-align: center;
letter-spacing: 0.04em;
> a {
  text-decoration-line: underline;
  color: #3091eb;
}
`;