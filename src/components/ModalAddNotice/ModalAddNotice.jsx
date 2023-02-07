import { Field, Form, Formik } from "formik";
// import { useDispatch } from "react-redux";
import * as yup from 'yup';
import { FormContainer, RadioBtn, RadioBtnBox } from "./ModalAddNotice.styled";

const initialValues = {
    title: '',
    name: '',
    breed: '',
    location: '',
    comments: '',
    price:'',
    // sex: '',
    // birthday: '',
}

const locationRegexp = /[A-Z][a-z]*,\s[A-Z][a-z]*/;
const titleRegexp = /^[a-zA-Z\s]*$/;

const schema = yup.object().shape({
    title: yup.string()
      .trim(true)
      .min(2, 'Too short!')
      .max(48, 'Too long!')
      .matches(titleRegexp, 'Must contain only letters and spaces')
      .required('Title is required'),
    name: yup.string()
      .trim(true)
      .min(2, 'Too short!')
      .max(16, 'Too long!')
      .matches(titleRegexp, 'Must contain only letters and spaces')
      .required('Name is required'),
    breed: yup.string()
      .trim()
      .min(2, 'Too short!')
      .max(24, 'Too long!')
      .matches(titleRegexp, 'Must contain only letters and spaces')
      .required('Breed is required'),
    location: yup.string()
      .trim()
      .matches(
        locationRegexp,
        'For example, "Brovary, Kyiv" or "Dubno, Rivne"'
      )
      .required('Location is required'),
    comments: yup.string()
      .min(8, 'Too short!')
      .max(120, 'Too long!')
      .required('Comments is required'),
    price: yup.number().min(1, 'Price has to be more than 0'),
    // sex: yup.string().required('Choose sex'),
    // birthday: yup.date().required('Choose date of birth'),
  });

export const ModalAddNotice = () => {
    // const dispatch = useDispatch();
    const handleSubmit = (values, {resetForm}) => {
    
      console.log({
        title: values.title,
        name: values.name,
        breed: values.breed,
        comments: values.comments,
        location: values.location,
        price: values.price
      });
    resetForm();   
  };
    return (
        <FormContainer>
            <h1>Add pet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={handleSubmit}>
                <Form>
                    <RadioBtnBox role="group" aria-labelledby="my-radio-group">
                        <RadioBtn>
                            <Field type="radio" name="category" value="lost/found" />
                            lost/found
                        </RadioBtn>
                        <RadioBtn>
                            <Field type="radio" name="category" value="in good hands" />
                            in good hands
                        </RadioBtn>
                        <RadioBtn>
                            <Field type="radio" name="category" value="sell" />
                            sell
                        </RadioBtn>
                    </RadioBtnBox>
                    <Field type='text' name='title' placeholder="Type name" />
                    <Field type='text' name="name" placeholder="Type name pet"/>
                    <Field type="text" name="date" placeholder="Type date of birth" />
                    <Field type="text" name="breed" placeholder="Type breed"/>
                    <button type="button">Cancel</button>
                    <button type="button">Next</button>

                </Form>
            </Formik>
        </FormContainer>
    )
}