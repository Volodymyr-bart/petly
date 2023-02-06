import { FieldStyled,  ErrorMessageStyled, InputContainer } from './RegisterForm.styled';

export const RegisterFirstStep = ({validateEmail}) => {

  return (
        
            <InputContainer>
               <FieldStyled type="email" name="email" placeholder='Email' validate={validateEmail}/>
               < ErrorMessageStyled name="email" component="span"/>
              <FieldStyled type="password" name="password" placeholder='Password'  autoComplete='off'/>
              < ErrorMessageStyled name="password" component="span"/>
              <FieldStyled type="password" name="confirmPassword" placeholder='Confirm password' autoComplete='off'/>
              < ErrorMessageStyled name="confirmPassword" component="span"/>
              </InputContainer>

  );
};