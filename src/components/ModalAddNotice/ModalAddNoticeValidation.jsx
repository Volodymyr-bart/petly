import * as yup from 'yup';

const locationRegexp = /[A-Z][a-z]*,\s[A-Z][a-z]*/;
const titleRegexp = /^[a-zA-Z\s]*$/;

export const validationFistStep = yup.object().shape({
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
    // .required('Name is required'),
  breed: yup
    .string()
    .trim()
    .min(2, 'Too short!')
    .max(24, 'Too long!')
    .matches(titleRegexp, 'Must contain only letters and spaces')
    .required('Breed is required'),
    location: yup
    .string()
    .trim()
    .matches(locationRegexp, 'For example, "Brovary, Kyiv" or "Dubno, Rivne"')
    .required('Location is required'),
  comments: yup
    .string()
    .min(8, 'Too short!')
    .max(120, 'Too long!')
    .required('Comments is required'),
  price: yup.number().min(1, 'Price has to be more than 0'),
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

