
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, FormStyled, FieldStyled,  ErrorMessageStyled, TextStyled, InputContainer, ButtonBox, ButtonBack} from './RegisterForm.styled';

export const RegisterSecondStep = () => {
  
  
  console.log()
  return (<div>
            <InputContainer>
              <FieldStyled type="text" name="name" placeholder='Name' />
              <ErrorMessageStyled name="name" component="span"/> 
              <FieldStyled type="text" name="address" placeholder='City' />
              < ErrorMessageStyled name="address" component="span"/>
              <FieldStyled type="phone" name="phone" placeholder='Mobile phone' />
              < ErrorMessageStyled name="phone" component="span"/>
              </InputContainer>
              </div>
  );
};