import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { validationSchemaAddMyPet } from '../ModalAddNoticeValidation';
import {
  Button,
  CancelBack,
  ContainerButton,
  FormContainer,
} from './AddMyPet.styled';
import { AddMyPetFirstPart } from './AddMyPetFirstPart';
import { AddMyPetSecondPart } from './AddMyPetSecondPart';
const initialValues = {
  name: '',
  birthday: '',
  breed: '',
  petAvatar: null,
  comments: '',
};

export const AddMyPetModal = ({ onClose }) => {
  const [isLastStep, setisLastStep] = useState(false);

  // const dispatch = useDispatch();

  const onhandleSubmit = (values, { resetForm }) => {
    console.log(values);

    // dispatch(addNotice({
    //   name: values.name,
    //   birthday: values.birthday,
    //   breed: values.breed,
    //   petAvatar: values.petAvatar,
    //   comments: values.comments,
    // }))
    resetForm();
    onClose();
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
        console.log(errors);
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
                  <Button type="button" onClick={() => setisLastStep(true)}>
                    Next
                  </Button>
                </>
              )}
            </ContainerButton>
          </FormContainer>
        );
      }}
    </Formik>
  );
};
