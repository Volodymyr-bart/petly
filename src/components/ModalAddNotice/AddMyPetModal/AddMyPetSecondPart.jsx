import { ReactComponent as DefaultImg } from '../../../noticesImage/loadimg.svg';
import {
  BoxForInput,
  Button,
  CancelBack,
  CommentField,
  Container,
  ContainerButton,
  DefaultLoadImg,
  ErrorMessageComments,
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
  setisLastStep,
  isDisabledLastStep
}) => {
  const filePicker = useRef(null);

  const handlePick = () => {
    filePicker.current.click();
  };

  return (
    <>
      <TitleModal>Add pet</TitleModal>
      <Container>
        <BoxForInput>
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
        </BoxForInput>

        {/* Comment */}
        <BoxForInput>
          <LabelField>
            <LabelFieldTitle>
              Comments<span>*</span>
            </LabelFieldTitle>
            <CommentField
              as="textarea"
              type="text"
              name="comments"
              placeholder="Type comment"
              onChange={handleChange}
              value={values.comments}
            />
          </LabelField>
          <ErrorMessageComments name="comments" component="span" />
        </BoxForInput>
      </Container>
      <ContainerButton>
        <CancelBack
          type="button"
          onClick={() => setisLastStep(false)}
        >
           Back
        </CancelBack>
        <Button type="submit" disabled={isDisabledLastStep} className={isDisabledLastStep ? 'disabled' : ''} >Done</Button>
      </ContainerButton>
    </>
  );
};
