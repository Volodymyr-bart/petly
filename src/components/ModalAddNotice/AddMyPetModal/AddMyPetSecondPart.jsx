import {ReactComponent as DefaultImg} from '../../../noticesImage/loadimg.svg'
import {
  CommentField,
  Container,
  DefaultLoadImg,
  ErrorMessageStyled,
  LabelField,
  LabelFieldMyPetPhoto,
  LabelFieldTitle,
  LabelFieldTitleMyPet,
  LoadImgMyPet,
  TitleModal,
} from '../ModalAddNotice.styled';
import { useRef } from 'react';
import { UploadImage } from './UploadMyPet/UploadMyPet';

export const AddMyPetSecondPart = ({
  values,
  setFieldValue,
  handleChange,
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
          <LabelFieldMyPetPhoto>
            <LabelFieldTitleMyPet>Add photo and some comments</LabelFieldTitleMyPet>
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
                <LoadImgMyPet onClick={handlePick}>
                  <DefaultImg />
                </LoadImgMyPet>
              )}
            </div>
          </LabelFieldMyPetPhoto>
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
