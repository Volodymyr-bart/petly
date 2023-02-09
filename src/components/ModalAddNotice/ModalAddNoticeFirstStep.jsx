import { Field, Formik } from 'formik';
import {
  Button,
  CancelBack,
  ContainerButton,
  ContainerInputs,
  Description,
  ErrorText,
  FieldStyled,
  FormContainer,
  LabelField,
  LabelFieldTitle,
  RadioBtnBox,
  TitleModal,
} from './ModalAddNotice.styled';
import { validationFistStep } from './ModalAddNoticeValidation';

const categories = [
  { name: 'lost', value: 'lost', id: '1' },
  { name: 'found', value: 'found', id: '2' },
  { name: 'In good hands', value: 'for-free', id: '3' },
  { name: 'sell', value: 'sell', id: '4' },
];

export const ModalAddNoticeFistStep = ({
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
          <Description>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </Description>
          <RadioBtnBox>
            {categories.map(category => (
              <li key={category.id}>
                <label
                  className={values.category === category.value ? 'active' : ''}
                >
                  {category.name}
                  <Field type="radio" name="category" value={category.value} />
                </label>
              </li>
            ))}
          </RadioBtnBox>
          {/* <div>{errors.category}</div> */}
          <ContainerInputs>
            <div>
              <LabelField>
                <LabelFieldTitle>
                  Tittle of ad <span>*</span>
                </LabelFieldTitle>
                <FieldStyled
                  name="title"
                  type="text"
                  placeholder="Type name"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </LabelField>
              <ErrorText>{errors.title}</ErrorText>
            </div>
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
          </ContainerInputs>

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
