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
  gap: 16px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;  
  }

`;

export const FieldStyled = styled(Field)`
    width: 100%;
    padding: 11px 14px;
    line-height: 1.35;
    letter-spacing: 0.04em;
    background: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
        :hover,
        :focus {
        cursor: pointer;
        }
    

        
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
    font-size: 18px;
    color: #9d3158;
    margin-top: -10px;
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
// font-family: 'Manrope';
font-weight: 500;
font-size: 20px;
line-height: 1.35;
  letter-spacing: 0.04em;
  color: #FFFFFF;
`;

export const ButtonBack = styled.button`
width: 100%;
padding: 10px 28px;
background: #FFFFFF;
border-radius: 40px;
border: 2px solid #F59256;
// font-family: 'Manrope';
font-weight: 500;
font-size: 20px;
line-height: 1.35;
  letter-spacing: 0.04em;
  color: #000000;
`;


export const TextStyled = styled.p`
text-align: center;
letter-spacing: 0.04em;
> a {
  text-decoration-line: underline;
  color: #3091eb;
}
`;