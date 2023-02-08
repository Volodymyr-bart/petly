import { Field, Formik } from 'formik';
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
        <form onSubmit={handleSubmit}>
          <h1>Add pet</h1>
          <ul>
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
          </ul>
          <div>{errors.category}</div>
          <div>
            <label>
              <div>
                Tittle of ad<span>*</span>
              </div>
              <Field
                name="title"
                type="text"
                placeholder="Type name"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <div>{errors.title}</div>
          </div>
          <div>
            <label>
              <div>Name pet</div>
              <Field
                name="name"
                type="text"
                placeholder="Type name pet"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <div>{errors.name}</div>
          </div>
          <div>
            <label>
              <div>Date of birth</div>
              <Field
                name="date"
                type="text"
                placeholder="Type date of birth"
                value={values.birthday}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
          </div>
          <div className="label">
            <label>
              <div>Breed</div>
              <Field
                name="breed"
                type="text"
                placeholder="Type breed"
                value={values.breed}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <div>{errors.breed && touched.breed}</div>
          </div>
          <div>
            <button
             type="button"
              onClick={onClose}
            >
              Cancel
            </button>
            {dirty && isValid ? (
              <button className="activeNext" type="submit">
                Next
              </button>
            ) : (
              <button className="inactiveNext" disabled={true}>
                Next
              </button>
            )}
          </div>
        </form>
      )}
    </Formik>
  );
};
