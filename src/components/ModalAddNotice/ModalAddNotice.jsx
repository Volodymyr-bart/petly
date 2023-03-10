/* eslint-disable no-dupe-keys */
import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
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

    dispatch(
      addNotice({
        title: values.title,
        name: values.name,
        birthday: result,
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
        handleChange,
        touched,
      }) => {
        // console.log(touched.location);
        const saveLocation = (value) => {
          values.location = value;
        }

        return (
          <FormContainer autoComplete="off">
            {isLastStep ? (
              <ModalAddNoticeSecondStep
                setisLastStep={setisLastStep}
                values={values}
                errors={errors}
                handleChange={handleChange}
                setFieldValue={setFieldValue}
                saveLocation={saveLocation}
              />
            ) : (
                <ModalAddNoticeFistStep
                  values={values}
                  errors={errors}
                  setisLastStep={setisLastStep}
                  setFieldValue={setFieldValue}
                  onClose={onClose}
                />
            )}

          </FormContainer>
        );
      }}
    </Formik>
  );
};
