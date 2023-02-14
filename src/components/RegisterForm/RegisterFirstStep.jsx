import {useState} from 'react';
import { FieldStyled,  ErrorMessageStyled, InputContainer,  ShowPassword, InputBox } from './RegisterForm.styled';
import { RxEyeClosed, RxEyeOpen} from 'react-icons/rx'



export const RegisterFirstStep = ({validateEmail}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  return (
        
            <InputContainer>
            <InputBox>
               <FieldStyled type="email" name="email" placeholder='Email' validate={validateEmail}/>
               < ErrorMessageStyled name="email" component="p"/>
            </InputBox>
            <InputBox>
              <FieldStyled type={showPassword ? "text" : "password"}  name="password" placeholder='Password'  autoComplete='off'/>
              <ShowPassword onClick={() => setShowPassword(!showPassword)}>{showPassword ? <RxEyeOpen size={18} /> : <RxEyeClosed size={18}/> }</ShowPassword>
              < ErrorMessageStyled name="password" component="p"/>
              </InputBox>

              <InputBox>
              <FieldStyled type={showConfirmPassword ? "text" : "password"}  name="confirmPassword" placeholder='Confirm password' autoComplete='off'/>
              <ShowPassword onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <RxEyeOpen size={18} /> : <RxEyeClosed size={18}/> }</ShowPassword>
              < ErrorMessageStyled name="confirmPassword" component="p"/>
              </InputBox>
              </InputContainer>

  );
};