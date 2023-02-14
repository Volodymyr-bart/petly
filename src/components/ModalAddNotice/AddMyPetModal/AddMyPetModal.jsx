import { Formik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import { validationSchemaAddMyPet } from '../ModalAddNoticeValidation';
import {
  Button,
  CancelBack,
  ContainerButton,
  DisableBtn,
  FormContainer,
} from '../ModalAddNotice.styled';
import { AddMyPetFirstPart } from './AddMyPetFirstPart';
import { AddMyPetSecondPart } from './AddMyPetSecondPart';

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

  const onhandleSubmit = (values, { resetForm }) => {
    addPet({
      name: values.name,
      birthday: values.birthday,
      breed: values.breed,
      photo: values.photo,
      comments: values.comments,
    });
    resetForm();
    setisLastStep(false);
    onClose();

    // Поміняю на useEffect завтра
    // Пішов спати...
    setTimeout(() => {
      window.location.reload();
    }, 1000);
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
        return (
          <FormContainer autoComplete="off">
            {isLastStep ? (
              <AddMyPetSecondPart
                setisLastStep={setisLastStep}
                onClose={onClose}
                values={values}
                errors={errors}
                dirty={dirty}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
            ) : (
              <AddMyPetFirstPart values={values} errors={errors} />
            )}

            <ContainerButton>
              {isLastStep ? (
                <>
                  <CancelBack
                    type="button"
                    onClick={() => setisLastStep(false)}
                  >
                    Back
                  </CancelBack>
                  {isValid ? (
                    <Button type="submit">Done</Button>
                  ) : (
                    <DisableBtn disabled={true} className="disabled">
                      Done
                    </DisableBtn>
                  )}
                </>
              ) : (
                <>
                  <CancelBack type="button" onClick={onClose}>
                    Cancel
                  </CancelBack>
                  {isDisabled ? (
                    <DisableBtn disabled={isDisabled} className="disabled">
                      Next
                    </DisableBtn>
                  ) : (
                    <Button type="button" onClick={() => setisLastStep(true)}>
                      Next
                    </Button>
                  )}
                </>
              )}
            </ContainerButton>
          </FormContainer>
        );
      }}
    </Formik>
  );
};
