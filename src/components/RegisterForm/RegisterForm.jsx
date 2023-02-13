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
const emailRegexp =
  // eslint-disable-next-line no-useless-escape
  /^([A-Za-z0-9_\-\.]{2,})+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const passRegexp = /^\S+$/;
const phoneRegexp = /^\+(?:[0-9] ?){6,14}[0-9]$/;


const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  address: '',
  phone: ''
}
const schema = yup.object({
  email: yup.string().email("Invalid email addres").matches(emailRegexp, "Email must not contain special characters, must start with 2 characters before the @").required("Email is required").min(10, "Email must be at least 10 characters")

  .max(63, "Email must be at most 63 characters"),
  password: yup.string()
    .matches(passRegexp, "Password cannot contain spaces")
    .min(7, "Password must be at least 7 characters")
    .max(32, "Password must be at most 32 characters")
    .required("Password is required"),
  confirmPassword: yup.string().label('Confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
  name: yup.string()
    .matches(nameRegexp, "Name must contain only English letters")
    .required("Name is required"),
  address: yup.string().required("Address is required"),
  phone: yup.string().phone("UA", true, "Phone number must be in format '+380XXXXXXXXX'").matches(phoneRegexp, "Phone number must start with '+380'").required(),
});   


export const RegisterForm = () => {
  const [isLastStep, setisLastStep] = useState(false);

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
      const saveAddress = (value) => {
        values.address = value;
      }

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
        {!isLastStep ?  <RegisterFirstStep /> : <RegisterSecondStep saveAddress={saveAddress}/>}
       
        <ButtonBox>

            {isLastStep ? (<><Button type="submit">Register</Button>
            <ButtonBack type="button" onClick={() => setisLastStep(false)}>Back</ButtonBack></>) : <Button type="button" onClick={handleClickButton}>Next</Button>}

        </ButtonBox>
        <TextStyled>Already have an account? <NavLink to="/login">login</NavLink></TextStyled>
      </FormStyled>
      )}}
   </Formik>)
};

