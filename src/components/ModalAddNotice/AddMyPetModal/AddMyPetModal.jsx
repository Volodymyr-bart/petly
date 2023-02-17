import { Formik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import { validationSchemaAddMyPet } from '../ModalAddNoticeValidation';
import {FormContainer} from '../ModalAddNotice.styled';
import { AddMyPetFirstPart } from './AddMyPetFirstPart';
import { AddMyPetSecondPart } from './AddMyPetSecondPart';
import { useDispatch } from 'react-redux';
import { getUserData } from 'redux/account/operations';

const initialValues = {
  name: '',
  birthday: '',
  breed: '',
  photo: null,
  comments: '',
};


const addPet = async (newNotice) => {   
    let formImageData = new FormData();
    
    for (const key in newNotice) {     
      if (newNotice[key]) {
        formImageData.append(key, newNotice[key]);
      }
    }
  try {
    const res = await axios.post('/users/add-pets', formImageData);
    return res.data;
  } catch (error) {
    return console.error('adding error: ', error.message);
  }
};

export const AddMyPetModal = ({ onClose, setChangedData }) => {
  const [isLastStep, setisLastStep] = useState(false);
  const dispatch = useDispatch();

  const onhandleSubmit = async (values, { resetForm }) => {
    await addPet({
      name: values.name,
      birthday: values.birthday,
      breed: values.breed,
      photo: values.photo,
      comments: values.comments,
    });
    resetForm();
    setisLastStep(false);
    onClose();
    setChangedData(dispatch(getUserData()))
  };

  return (
    <Formik
      validationSchema={validationSchemaAddMyPet}
      initialValues={initialValues}
      onSubmit={onhandleSubmit}
    >
      {({
        values,
        errors,
        setFieldValue,
        dirty,
        isValid,
        handleChange,
      }) => {
        const isDisabled = values.name === '' || errors.name;
               
        const isDisabledLastStep =
          values.comments === '' ||
          errors.comments;

        return (
          <FormContainer autoComplete="off">
            {isLastStep ? (
              <AddMyPetSecondPart
                setisLastStep={setisLastStep}
                values={values}
                errors={errors}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                isDisabledLastStep={isDisabledLastStep}
              />
            ) : (
                <AddMyPetFirstPart
                  values={values}
                  errors={errors}
                  isDisabled={isDisabled}
                  onClose={onClose}
                  setisLastStep={setisLastStep} />
            )}

            {/* <ContainerButton>
              {isLastStep ? (
                <>
                <CancelBack
                  type="button"
                  onClick={() => setisLastStep(false)}
                >
                  Back
                </CancelBack>
                <Button type="submit" disabled={isDisabledLastStep} className={isDisabledLastStep ? 'disabled' : ''} >Done</Button>
                </>
              ) : (
                  <>
                  <CancelBack type="button" onClick={onClose}>
                    Cancel
                  </CancelBack>
                  <Button type="button" disabled={isDisabled} className={isDisabled ? 'disabled' : ''} onClick={() => setisLastStep(true)}>
                      Next
                    </Button>
                    </>
                    )}
            </ContainerButton> */}
          </FormContainer>
        );
      }}
    </Formik>
  );
};
