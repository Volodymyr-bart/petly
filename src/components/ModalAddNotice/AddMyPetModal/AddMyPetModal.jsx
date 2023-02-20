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
    let result
    if(values.birthday === '') {
      result = '';
    } if(values.birthday !== '') {
      const date = new Date(values.birthday);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    result = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
    }
    
    console.log(values);
    console.log(result);

    await addPet({
      name: values.name,
      birthday: result,
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
                  setFieldValue={setFieldValue}
                  setisLastStep={setisLastStep} />
            )}

          </FormContainer>
        );
      }}
    </Formik>
  );
};
