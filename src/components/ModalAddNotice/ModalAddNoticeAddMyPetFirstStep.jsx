import { Formik } from 'formik';
import {
  Button,
  CancelBack,
  Container,
  ContainerButton,
  ErrorText,
  FieldStyled,
  FormContainer,
  LabelField,
  LabelFieldTitle,
  TitleModal,
} from './ModalAddNotice.styled';
import { validationFistStep } from './ModalAddNoticeValidation';

// const categories = [
//   { name: 'lost', value: 'lost', id: '1' },
//   { name: 'found', value: 'found', id: '2' },
//   { name: 'In good hands', value: 'for-free', id: '3' },
//   { name: 'sell', value: 'sell', id: '4' },
// ];

export const ModalAddNoticeAddMyPetFirstStep = ({
  onClose,
  setStepIndex,
  setFormData,
  formData,
}) => {
  return (
    <Formik
      initialValues={{
        title: '',
        name: '',
        birthday: '',
        breed: '',
        category: '',
      }}
      validationSchema={validationFistStep}
      onSubmit={values => {
        const data = { ...formData, ...values };
        setFormData(data);
        setStepIndex(1);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        // setFieldValue,
        handleBlur,
        isValid,
        dirty,
      }) => (
        <FormContainer onSubmit={handleSubmit}>
          <TitleModal>Add pet</TitleModal>
          <Container>
            <div>
              <LabelField>
                <LabelFieldTitle>Name pet</LabelFieldTitle>
                <FieldStyled
                  name="name"
                  type="text"
                  placeholder="Type name pet"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </LabelField>
              <ErrorText>{errors.name}</ErrorText>
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Date of birth</LabelFieldTitle>
                <FieldStyled
                  name="date"
                  type="text"
                  placeholder="Type date of birth"
                  value={values.birthday}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </LabelField>
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Breed</LabelFieldTitle>
                <FieldStyled
                  name="breed"
                  type="text"
                  placeholder="Type breed"
                  value={values.breed}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </LabelField>
              <ErrorText>{errors.breed && touched.breed}</ErrorText>
            </div>
          </Container>
          <ContainerButton>
            <CancelBack type="button" onClick={onClose}>
              Cancel
            </CancelBack>
            {dirty && isValid ? (
              <Button className="activeNext" type="submit">
                Next
              </Button>
            ) : (
              <Button className="inactiveNext" disabled={true}>
                Next
              </Button>
            )}
          </ContainerButton>
        </FormContainer>
      )}
    </Formik>
  );
};
