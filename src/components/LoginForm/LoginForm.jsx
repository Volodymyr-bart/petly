import { useDispatch } from 'react-redux';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { Button, FormStyled, FieldStyled,  ErrorMessageStyled, TextStyled, InputContainer, ShowPassword} from './LoginForm.styled';
import * as yup from 'yup';
import { RxEyeClosed, RxEyeOpen} from 'react-icons/rx'
const passRegexp = /^\S+$/;

const initialValues = {
  email: '',
  password: ''
}

const schema = yup.object({
  email: yup.string().email("Invalid email addres").required("Email is required"),
  password: yup.string()
    .matches(passRegexp, "Password cannot contain spaces")
    .min(7, "Password must be at least 7 characters")
    .max(32, "Password must be at most 32 characters")
    .required("Password is required"),
});   


export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (values, {resetForm}) => {

    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      }));
    resetForm();   
  };
  console.log(showPassword)


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      {({handleChange, values, errors, touched, setFieldTouched}) => {
          return <FormStyled  autoComplete='off'>
            <InputContainer>
              <FieldStyled type="email" name="email" placeholder='Email'/>
              <ErrorMessageStyled name="email" component="span"/>
              <div style={{position: 'relative'}}>
              <FieldStyled type={showPassword ? "text" : "password"} name="password" placeholder='Password'/>
              <ShowPassword onClick={() => setShowPassword(!showPassword)}>{showPassword ? <RxEyeOpen size={18} /> : <RxEyeClosed size={18}/> }</ShowPassword>
              </div>
              < ErrorMessageStyled name="password" component="span"/>
              </InputContainer>
            <Button type="submit">Log in</Button>
            <TextStyled>Don't have an account? <NavLink to="/register">Register</NavLink></TextStyled>
          </FormStyled>
      }}
        </Formik>
  );
};
