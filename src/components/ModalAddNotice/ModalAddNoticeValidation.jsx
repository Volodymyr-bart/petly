import * as yup from 'yup';

const titleRegexp = /^[a-zA-Z\s]*$/;

export const validationSchemaNotices = yup.object().shape({
  title: yup
    .string()
    .trim(true)
    .min(2, 'Too short!')
    .max(48, 'Too long!')
    .matches(titleRegexp, 'Must contain only letters and spaces')
    .required('Title is required'),
  name: yup
    .string()
    .trim(true)
    .min(2, 'Too short!')
    .max(16, 'Too long!')
    .matches(titleRegexp, 'Must contain only letters and spaces'),
  breed: yup
    .string()
    .trim()
    .min(2, 'Too short!')
    .max(24, 'Too long!')
    .matches(titleRegexp, 'Must contain only letters and spaces'),
    location: yup
    .string()
    .trim()
    .required('Location is required'),
    comments: yup
    .string()
    .min(8, 'Too short!')
    .max(120, 'Too long!')
    .required('Comments is required'),
  price: yup.number().typeError('Price must be a number').min(1, 'Price must be more than 0').required('Price is required'),
  theSex: yup.string().required('Choose sex'),
  petAvatar: yup
    .mixed()
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      value => !value || (value && value.size <= FILE_SIZE)
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file unsupported format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ), 
  //   birthday: yup.date().nullable(),
});

const FILE_SIZE = 5242880;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const validationSchemaAddMyPet = yup.object().shape({
  name: yup
    .string()
    .trim(true)
    .min(2, 'Too short!')
    .max(16, 'Too long!')
    .matches(titleRegexp, 'Must contain only letters and spaces').required("Name is required"),
  breed: yup
    .string()
    .trim()
    .min(2, 'Too short!')
    .max(24, 'Too long!')
    .matches(titleRegexp, 'Must contain only letters and spaces'),
  comments: yup
    .string()
    .min(8, 'Too short!')
    .max(120, 'Too long!').required("Comments is required"),
  petAvatar: yup
    .mixed()
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      value => !value || (value && value.size <= FILE_SIZE)
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file unsupported format',
      value => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ), 
  //   birthday: yup.date().nullable(),
});