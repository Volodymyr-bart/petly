import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/operations';
import {
  Button,
  CancelBack,
  Container,
  ContainerButton,
  FormContainer,
  LabelFieldMyPetComment,
  LabelFieldMyPetPhoto,
  TitleInput,
  TitleInputMyPet,
  TitleModal,
} from './ModalAddNotice.styled';
import { validationSecondStep } from './ModalAddNoticeValidation';

export const ModalAddNoticeAddMySecondStep = ({
  setStepIndex,
  formData,
  onClose,
}) => {
  const dispatch = useDispatch();

  const submitAddNoticeForm = data => {
    console.log(data);
    dispatch(
      addNotice(
        { data }
        // {
        // title: values.title,
        // name: values.name,
        // birthday: values.birthday,
        // breed: values.breed,
        // sex: values.sex,
        // location: values.location,
        // price: values.price,
        // image: values.image,
        // comments:values.comments,
        // }
      )
    );
  };
  return (
    <div>
      <Formik
        initialValues={{
          sex: '',
          location: '',
          price: '',
          image: null,
          comments: '',
        }}
        validationSchema={validationSecondStep}
        onSubmit={values => {
          const data = { ...formData, ...values };
          submitAddNoticeForm(data);

          // console.log(values);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isValid,
          dirty,
        }) => (
          <FormContainer onSubmit={handleSubmit}>
            <TitleModal>Add pet</TitleModal>
            <Container>
              {/* Load file */}
              <div>
                <LabelFieldMyPetPhoto>
                  <TitleInputMyPet>
                    Add photo and some comments:
                  </TitleInputMyPet>
                  <input
                    type="file"
                    name="image"
                    onChange={event => {
                      setFieldValue('upload', event.currentTarget.files);
                    }}
                  />
                </LabelFieldMyPetPhoto>
                <div>{errors.image}</div>
              </div>

              {/* Comment */}
              <div>
                <LabelFieldMyPetComment>
                  <TitleInput>Comments</TitleInput>
                  <textarea
                    type="text"
                    name="comments"
                    placeholder="Type comment"
                    defaultValue={values.comments}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </LabelFieldMyPetComment>
                {/* <div>{errors.comments}</div> */}
              </div>
            </Container>
            <ContainerButton>
              <CancelBack
                type="button"
                onClick={() => {
                  setStepIndex(0);
                }}
              >
                Back
              </CancelBack>
              {dirty && isValid ? (
                <Button className="activeDone" type="submit">
                  Done
                </Button>
              ) : (
                <Button className="inactiveDone" disabled={true}>
                  Done
                </Button>
              )}
            </ContainerButton>
          </FormContainer>
        )}
      </Formik>
    </div>
  );
};
