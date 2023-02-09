import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addNotice } from "redux/notices/operations";
import { validationSecondStep } from "./ModalAddNoticeValidation";

export const ModalAddNoticeSecondStep = ({ setStepIndex, formData, onClose }) => {
    const dispatch = useDispatch();
    
    const submitAddNoticeForm = (data) => {
        console.log(data)
        dispatch(
            addNotice(
                data
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
    }
    return (
        <div>
            <Formik
                initialValues={{
                theSex: '',
                location: '',
                price: '1',
                petAvatar: null,
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
                <form onSubmit={handleSubmit}>
                <h1>Add pet</h1>
                <label>
                    The sex<span>*</span>:
                </label>
                <div>
                    <label className={values.theSex === 'male' ? 'active' : ''}>
                    <Field type="radio" name="theSex" value="male" />
                    <div>
                        icon
                    </div>
                    <span>Male</span>
                    </label>
                    <label className={values.theSex === 'female' ? 'active' : ''}>
                    <Field type="radio" name="theSex" value="female" />
                    <div>
                        icon
                    </div>
                    <span>Female</span>
                    </label>
                </div>
                <div>{errors.theSex}</div>
                <div>
                    <label>
                    <div>
                        Location<span>*</span>:
                    </div>
                    <Field
                        name="location"
                        type="text"
                        placeholder="City, Region"
                        value={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    </label>
                    <div>{errors.location}</div>
                </div>
                {formData.category === 'sell' && (
                    <div>
                    <label>
                        <div>
                        Price<span>*</span>:
                        </div>
                        <Field
                        name="price"
                        type="text"
                        value={values.price}
                        placeholder="Type price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                    </label>
                    <div>{errors.price}</div>
                    </div>
                )}
                <div className="file">
                    <div>Load the pet’s image:</div>
                    <div>
                    <label>
                        <input
                        type="file"
                        name="petAvatar"
                        onChange={event => {
                            setFieldValue('upload', event.currentTarget.files[0]);
                            
                            console.log(event.currentTarget.files[0]);
                        }}
                        />
                    </label>
                    </div>
                    <div>{errors.petAvatar}</div>
                </div>
                <label>
                    <div>
                    Comments<span>*</span>
                    </div>
                    <textarea
                    type="text"
                    name="comments"
                    placeholder="Type comment"
                    defaultValue={values.comments}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </label>
                <div>{errors.comments}</div>
                <div>
                    {dirty && isValid ? (
                    <button className="activeDone" type="submit">
                        Done
                    </button>
                    ) : (
                    <button className="inactiveDone" disabled={true}>
                        Done
                    </button>
                    )}
                    <button
                    type="button"
                    onClick={() => {
                        setStepIndex(0);
                    }}
                    >
                    Back
                    </button>
                </div>
                </form>
            )}
            </Formik>
        </div>
    )
}