import { ErrorMessage } from 'formik';
import {ReactComponent as DefaultImg} from '../../../noticesImage/loadimg.svg'

import {
  CommentField,
  Container,
  DefaultLoadImg,
  LabelField,
  LabelFieldTitle,
  LoadImg,
  TitleModal,
} from '../ModalAddNotice.styled';
import { UploadImage } from '../UploadImage/UploadImage';
import { useRef } from 'react';

export const AddMyPetSecondPart = ({
  values,
  setFieldValue,
  errors,
  dirty,
  handleChange,
  touched,
}) => {
  const filePicker = useRef(null);

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <>
      <TitleModal>Add pet</TitleModal>
      <Container>
        <div>
          <LabelField>
            <LabelFieldTitle>Load the pet’s image:</LabelFieldTitle>
            <DefaultLoadImg
              className="hidden"
              ref={filePicker}
              type="file"
              name="petAvatar"
              onChange={event => {
                setFieldValue('petAvatar', event.currentTarget.files[0]);
              }}
            />

            <div>
              {values.petAvatar ? (
                <UploadImage image={values.petAvatar} />
              ) : (
                <LoadImg onClick={handlePick}>
                  <DefaultImg />
                </LoadImg>
              )}
            </div>
          </LabelField>
          <ErrorMessage name="petAvatar" component="span" />
        </div>

        {/* Comment */}
        <div>
          <LabelField>
            <LabelFieldTitle>Comments</LabelFieldTitle>
            <CommentField as='textarea'
              type="text"
              name="comments"
              placeholder="Type comment"
              onChange={handleChange}
            />
          </LabelField>
          {/* <ErrorMessage name="comments" component="span"/> */}
        </div>
      </Container>
    </>
  );
};
