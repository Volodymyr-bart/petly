import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import { RegisterFirstStep } from './RegisterFirstStep';
import React, { useState } from 'react';
import { RegisterSecondStep } from './RegisterSecondStep';
import * as yup from 'yup';
import "yup-phone";
import { NavLink } from 'react-router-dom';
import { Button, FormStyled, TextStyled, ButtonBox, ButtonBack} from './RegisterForm.styled';
import { checkEmail } from 'utils/checkEmail';

const nameRegexp = /^[a-z ,.'-]+$/i;

const passRegexp = /^\S+$/;


const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  address: '',
  phone: ''
}
const schema = yup.object({
  email: yup.string().email("Invalid email addres").required("The email is required"),
  password: yup.string()
    .matches(passRegexp, "The password cannot contain spaces")
    .min(7)
    .max(32)
    .required("The password is required"),
  confirmPassword: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
  name: yup.string()
    .matches(nameRegexp, "The name must contain only English letters")
    .required("The name is required"),
  address: yup.string().required(),
  phone: yup.string().phone("UA", true, "Phone number must be in format '+380XXXXXXXXX'").required(),
});   


export const RegisterForm = () => {
  const [isLastStep, setisLastStep] = useState(false);
  console.log(isLastStep)

  const dispatch = useDispatch();
  
  const handleSubmit = (values, {resetForm}) => {
    dispatch(
      register({
        email: values.email,
        password: values.password,
        name: values.name,
        address: values.address,
        phone: values.phone
      })
    );
    resetForm();   
  };

  

 
  return (
    <Formik 
      validationSchema={schema}
      initialValues={initialValues} 
      onSubmit={handleSubmit}

   >
    {({handleChange, values, errors, touched, setFieldTouched, formikHelpers, setFieldError}) => {
      const handleClickButton = () => {
        
        if ((values.email === '' && values.password === '' && values.confirmPassword === '') && !(touched.email && touched.password && touched.confirm)) {
          setFieldTouched("email");
          setFieldTouched("password");
          setFieldTouched("confirm");
          return;
        }
        
        if (errors.email || errors.password || errors.confirmPassword) return

        checkEmail(values.email).then((res) => setisLastStep(true)).catch(error => {
          setFieldError('email', "The email is already in use")
        })
        


      }




     return (<FormStyled autoComplete='off' >
        {!isLastStep ?  <RegisterFirstStep /> : <RegisterSecondStep setFieldTouched={setFieldTouched}/>}
       
        <ButtonBox>

            {isLastStep ? (<><Button type="submit">Register</Button>
            <ButtonBack type="button" onClick={() => setisLastStep(false)}>Back</ButtonBack></>) : <Button type="button" onClick={handleClickButton}>Next</Button>}

        </ButtonBox>
        <TextStyled>Already have an account? <NavLink to="/login">login</NavLink></TextStyled>
      </FormStyled>
      )}}
   </Formik>)
};

