import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { Button, FormStyled, FieldStyled,  ErrorMessageStyled, TextStyled, InputContainer} from './LoginForm.styled';
import * as yup from 'yup';
const emailRegexp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passRegexp = /^\S+$/;

const initialValues = {
  email: '',
  password: ''
}

const schema = yup.object({
  email: yup.string().email("Invalid email addres").required("The email is required"),
  password: yup.string()
    .matches(passRegexp, "The password cannot contain spaces")
    .min(7)
    .max(32)
    .required("The password is required"),
});   


export const LoginForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, {resetForm}) => {

    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      }));
    resetForm();   
  };



  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      {({handleChange, values, errors, touched, setFieldTouched}) => {
          return <FormStyled  autoComplete='off'>
            <InputContainer>
              <FieldStyled type="email" name="email" placeholder='Email'/>
              <ErrorMessageStyled name="email" component="span"/>
              <FieldStyled type="password" name="password" placeholder='Password'/>
              < ErrorMessageStyled name="password" component="span"/>
              </InputContainer>
            <Button type="submit">Log in</Button>
            <TextStyled>Don't have an account? <NavLink to="/register">Register</NavLink></TextStyled>
          </FormStyled>
      }}
        </Formik>
  );
};
