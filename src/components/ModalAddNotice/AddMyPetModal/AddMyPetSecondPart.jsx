import {ReactComponent as DefaultImg} from '../../../noticesImage/loadimg.svg'
import {
  CommentField,
  Container,
  DefaultLoadImg,
  ErrorMessageStyled,
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
              name="photo"
              onChange={event => {
                setFieldValue('photo', event.currentTarget.files[0]);
              }}
            />

            <div>
              {values.photo ? (
                <UploadImage image={values.photo} />
              ) : (
                <LoadImg onClick={handlePick}>
                  <DefaultImg />
                </LoadImg>
              )}
            </div>
          </LabelField>
          <ErrorMessageStyled name="photo" component="span" />
        </div>

        {/* Comment */}
        <div>
          <LabelField>
            <LabelFieldTitle>Comments<span>*</span></LabelFieldTitle>
            <CommentField as='textarea'
              type="text"
              name="comments"
              placeholder="Type comment"
              onChange={handleChange}
              value={values.comments}
            />
          </LabelField>
          <ErrorMessageStyled name='comments' component='span'/>
        </div>
      </Container>
    </>
  );
};
