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
position: relative;  
display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
 
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

export const ShowPassword = styled.div`
    position: absolute;
    bottom: 10px;
    right: 5%;

`;

export const InputBox = styled.div`
position: relative
`;



export const ErrorMessageStyled = styled(ErrorMessage)`
position: absolute;
left: 16px;
font-size: 16px;
    color: #9d3158;
`;

export const Button = styled.button`
margin-bottom: 40px;
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

export const TextStyled = styled.p`
text-align: center;
letter-spacing: 0.04em;
> a {
  text-decoration-line: underline;
  color: #3091eb;
}
`;

export const ErrorStyled = styled.p`
position: absolute;
bottom: -40px;
left: 16px;
font-size: 16px;
color: #9d3158;
text-align: center;
`;

