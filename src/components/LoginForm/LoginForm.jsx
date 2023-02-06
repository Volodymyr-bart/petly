import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { Button, FormStyled, FieldStyled,  ErrorMessageStyled, TextStyled, InputContainer} from './LoginForm.styled';
const Joi = require("joi");

const emailRegexp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passRegexp = /^\S+$/;

const initialValues = {
  email: '',
  password: ''
}

export const LoginForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, {resetForm}) => {
    console.log(values)
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();   
  };

  const loginSchema = Joi.object({
    email: Joi.string().regex(emailRegexp).required(),
    password: Joi.string().regex(passRegexp).min(7).max(32).required(),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
          <FormStyled>
            <InputContainer>
              <FieldStyled type="email" name="email" placeholder='Email'/>
              <ErrorMessageStyled name="email" component="span"/>
              <FieldStyled type="password" name="password" placeholder='Password'/>
              < ErrorMessageStyled name="password" component="span"/>
              </InputContainer>
            <Button type="submit">Log in</Button>
            <TextStyled>Don't have an account? <NavLink to="/register">Register</NavLink></TextStyled>
          </FormStyled>
        </Formik>
  );
};
