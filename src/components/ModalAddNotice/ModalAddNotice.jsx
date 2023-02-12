/* eslint-disable no-dupe-keys */
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, CancelBack, ContainerButton } from './ModalAddNotice.styled';
import { addNotice } from 'redux/notices/operations';
import { FormContainer } from './ModalAddNotice.styled';
import { ModalAddNoticeFistStep } from './ModalAddNoticeFirstStep';
import { ModalAddNoticeSecondStep } from './ModalAddNoticeSecondStep';
import { validationSchemaNotices } from './ModalAddNoticeValidation';

const initialValues = {
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
};

export const ModalAddNotice = ({ onClose }) => {
  const [isLastStep, setisLastStep] = useState(false);

  const dispatch = useDispatch();

  const onhandleSubmit = (values, { resetForm }) => {
    dispatch(
      addNotice({
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
      })
    );
    resetForm();
    setisLastStep(false);
    onClose();
  };

  return (
    <Formik
      validationSchema={validationSchemaNotices}
      initialValues={initialValues}
      onSubmit={onhandleSubmit}
    >
      {({
        values,
        errors,
        setFieldValue,
        isValid,
        handleChange,
      }) => {
        // console.log(errors);

        const isDisabled =
          values.category === '' ||
          values.title === '' ||
          errors.category ||
          errors.title;

        return (
          <FormContainer autoComplete="off">
            {isLastStep ? (
              <ModalAddNoticeSecondStep
                setisLastStep={setisLastStep}
                values={values}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
              />
            ) : (
              <ModalAddNoticeFistStep values={values} />
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
                  {isDisabled ? (
                    <Button disabled={isDisabled} className="disabled">
                      Next
                    </Button>
                  ) : (
                    <Button type="button" onClick={() => setisLastStep(true)}>
                      Next
                    </Button>
                  )}
                </>
              )}
            </ContainerButton>

            {/* <ContainerButton>
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
            </ContainerButton> */}
          </FormContainer>
        );
      }}
    </Formik>
  );
};
