import { Formik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import { validationSchemaAddMyPet } from '../ModalAddNoticeValidation';
import {
  Button,
  CancelBack,
  ContainerButton,
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
      formImageData.append(key, newNotice[key]);
    }
    try {
      const res = await axios.post('/users/add-pets', formImageData  );
      return res.data;
    } catch (error) {
      return console.error("adding error: ", error.message);
    }
  }


export const AddMyPetModal = ({ onClose }) => {
  const [isLastStep, setisLastStep] = useState(false);

  const onhandleSubmit = (values, { resetForm }) => {
      
    addPet({
      name: values.name,
      birthday: values.birthday,
      breed: values.breed,
      photo: values.photo,
      comments: values.comments,
    })
    resetForm()
    setisLastStep(false)
    onClose()
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
        touched,
        isValid,
        handleChange,
      }) => {
        console.log(values);
        const isDisabled = values.name === '' || errors.name
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
                    <Button disabled={true} className="disabled">
                      Done
                    </Button>
                  )}
                </>
              ) : (
                <>
                  <CancelBack type="button" onClick={onClose}>
                    Cancel
                  </CancelBack>
                  {isDisabled ? (<Button disabled={isDisabled} className="disabled" >Next</Button>) : <Button type="button" onClick={() => setisLastStep(true)}>
                  Next
                </Button>}
                </>
              )}
            </ContainerButton>
          </FormContainer>
        );
      }}
    </Formik>
  );
};
