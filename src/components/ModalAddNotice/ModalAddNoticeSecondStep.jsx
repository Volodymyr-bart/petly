import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNotice } from 'redux/notices/operations';
import {
  Button,
  CancelBack,
  Container,
  ContainerButton,
  // ContainerInputs,
  ContainerSex,
  ContainerSexVariant,
  FormContainer,
  Icon,
  LabelField,
  Sex,
  TitleInput,
  TitleModal,
} from './ModalAddNotice.styled';
import { validationSecondStep } from './ModalAddNoticeValidation';
import { UploadImage } from './UploadImage/UploadImage';

export const ModalAddNoticeSecondStep = ({
  setStepIndex,
  formData,
  onClose,
}) => {

    // const dispatch = useDispatch();

    
    
    const submitAddNoticeForm = async (data) => {

        const formData = new FormData();
        formData.append('image', data.image);
        console.log(formData)
        console.log(data)
        console.log(data.image)
    try {
      await addNotice({ formData })
    } catch (error) {
      console.log(error);
    }
    
  };

//   const submitAddNoticeForm = data => {
//     console.log(data);
//     dispatch(
//       addNotice(
//         { data }
//         // {
//         // title: values.title,
//         // name: values.name,
//         // birthday: values.birthday,
//         // breed: values.breed,
//         // sex: values.sex,
//         // location: values.location,
//         // price: values.price,
//         // image: values.image,
//         // comments:values.comments,
//         // }
//       )
//       );
//       onClose()
//   };
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
            <ContainerSex>
              <TitleInput>
                The sex<span>*</span>:
              </TitleInput>
              <ContainerSexVariant>
                <label className={values.sex === 'male' ? 'active' : ''}>
                  <Field type="radio" name="sex" value="male" />
                  <Icon>icon</Icon>
                  <Sex>Male</Sex>
                </label>
                <label className={values.sex === 'female' ? 'active' : ''}>
                  <Field type="radio" name="sex" value="female" />
                  <Icon>icon</Icon>
                  <Sex>Female</Sex>
                </label>
              </ContainerSexVariant>
              {/* <div>{errors.sex}</div> */}
            </ContainerSex>
            <Container>
              <div>
                <LabelField>
                  <TitleInput>
                    Location<span>*</span>:
                  </TitleInput>
                  <Field
                    name="location"
                    type="text"
                    placeholder="City, Region"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </LabelField>
                <div>{errors.location}</div>
              </div>
              {formData.category === 'sell' && (
                <div>
                  <LabelField>
                    <TitleInput>
                      Price<span>*</span>:
                    </TitleInput>
                    <Field
                      name="price"
                      type="text"
                      value={values.price}
                      placeholder="Type price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </LabelField>
                  <div>{errors.price}</div>
                </div>
              )}
              {/* Load file */}

              <div>
                <LabelField>
                  <TitleInput>Load the pet’s image:</TitleInput>
                  <input
                    type="file"
                    name="image"
                    onChange={event => {
                      setFieldValue('upload', console.log(event.target.files));
                    }}
                  />
                  <div>
                    {values.image && <UploadImage image={values.image} />}
                  </div>
                </LabelField>
                <div>{errors.image}</div>
              </div>

              {/* Comment */}
              <div>
                <LabelField>
                  <TitleInput>Comments</TitleInput>
                  <textarea
                    type="text"
                    name="comments"
                    placeholder="Type comment"
                    defaultValue={values.comments}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </LabelField>
                <div>{errors.comments}</div>
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
