import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  CancelBack,
  ContainerButton
} from './ModalAddNotice.styled';
import { addNotice } from 'redux/notices/operations';
import { FormContainer } from './ModalAddNotice.styled';
import { ModalAddNoticeFistStep } from './ModalAddNoticeFirstStep';
import { ModalAddNoticeSecondStep } from './ModalAddNoticeSecondStep';
import { validationSchemaNotices } from './ModalAddNoticeValidation';
// import { useDispatch } from "react-redux";
const initialValues ={
  title: '',
  name: '',
  birthday: '',
  breed: '',
  category: '',
  theSex: '',
  location: '',
  price: '1',
  petAvatar: null,
  comments: '',
}


export const ModalAddNotice = ({ onClose }) => {
  const [isLastStep, setisLastStep] = useState(false);
  const [formData, setFormData] = useState({});

  const dispatch = useDispatch();
  
  const handleSubmit = (values, {resetForm}) => {
   console.log(values);
   
    // dispatch(
    //   register({
    //     email: values.email,
    //     password: values.password,
    //     name: values.name,
    //     address: values.address,
    //     phone: values.phone
    //   })
    // );
    // resetForm();   
  };

  // const submitAddNoticeForm = async (data) => {
  //   dispatch(
  //      addNotice(
  //          data
  //          // {
  //          // title: values.title,
  //          // name: values.name,
  //          // birthday: values.birthday,
  //          // breed: values.breed,
  //          // sex: values.sex,
  //          // location: values.location,
  //          // price: values.price,
  //          // image: values.image,
  //          // comments:values.comments,
  //          // }
  //      )
  //  );}

  
  return (
 
      <Formik 
      validationSchema={validationSchemaNotices}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          setFieldValue,
          isValid,
          dirty, touched}) => { 
            return (<FormContainer onSubmit={handleSubmit}>
            {isLastStep ? <ModalAddNoticeSecondStep
        setisLastStep={setisLastStep}
          formData={formData}
          onClose={onClose}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
        /> : <ModalAddNoticeFistStep
          onClose={onClose}
          setisLastStep={setisLastStep}
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={errors}
          setFieldValue={setFieldValue}
          dirty={dirty}
          isValid={isValid}
          close={onClose}
          toudhed={touched}
        />}
         <ContainerButton>
          {isLastStep ? ( <><CancelBack
                type="button"
                onClick={() => {
                  setisLastStep(false);
                }}>
                Back
              </CancelBack>
  
                <Button type="submit">
                  Done
                </Button></>) : (<><CancelBack type="button" onClick={onClose}>
              Cancel
            </CancelBack>
              <Button type="button" onClick={() => setisLastStep(true)}>
                Next
              </Button></>)}
            
          </ContainerButton>
             </FormContainer>)
             }}

      </Formik>)
};
