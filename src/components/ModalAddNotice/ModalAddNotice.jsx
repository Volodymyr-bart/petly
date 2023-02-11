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
  // eslint-disable-next-line no-dupe-keys
  category: ''
}


export const ModalAddNotice = ({ onClose }) => {
  const [isLastStep, setisLastStep] = useState(false);

  const dispatch = useDispatch();
  
  const onhandleSubmit = (values, {resetForm}) => {
    console.log(values);
    
    dispatch(addNotice({
      title: values.title,
      name: values.name,
      birthday: values.birthday,
      category: values.category,
      breed: values.breed,
      theSex: values.theSex,
      location: values.location,
      price: values.price,
      petAvatar: values.petAvatar,
      comments: values.comments,
      category: values.category,
    }))
    resetForm()
    onClose()
  };
  
  return (
 
    <Formik 
      validationSchema={validationSchemaNotices}
      initialValues={initialValues}
      onSubmit={onhandleSubmit}
    >
      {({ values, errors, setFieldValue, dirty, touched, isValid, handleChange}) => { 
          console.log(errors);
        return (<FormContainer autoComplete='off'>
          {isLastStep ? <ModalAddNoticeSecondStep
          setisLastStep={setisLastStep}
          onClose={onClose}
          values={values}
          // errors={errors}
          dirty={dirty}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          /> : <ModalAddNoticeFistStep
              values={values}
              errors={errors}
          />}

          <ContainerButton>
          {isLastStep ? ( <><CancelBack type="button" onClick={() => setisLastStep(false)}>Back</CancelBack>
                {isValid ? (<Button type="submit">Done</Button>) : (<Button disabled={true} className="disabled" >Done</Button>)}</>) : (<><CancelBack type="button" onClick={onClose}>
              Cancel
            </CancelBack>
                <Button type="button" onClick={() => setisLastStep(true)}>
                  Next
                </Button>
              </>)}
            
          </ContainerButton>
      </FormContainer>)}}

    </Formik>)
};
