import { ReactComponent as Male } from '../../noticesImage/male.svg';
import { ReactComponent as Female } from '../../noticesImage/female.svg';
import { ReactComponent as DefaultImg } from '../../noticesImage/loadimg.svg';

import {
  BoxForInput,
  Button,
  CancelBack,
  CommentField,
  Container,
  ContainerButton,
  ContainerSex,
  ContainerSexVariant,
  DefaultLoadImg,
  ErrorMessageComments,
  ErrorMessageSex,
  ErrorMessageStyled,
  FieldStyled,
  Icon,
  LabelField,
  LabelFieldTitle,
  LoadImg,
  Sex,
  SexLabel,
  SexRadioInput,
  TitleModal,
} from './ModalAddNotice.styled';
import { UploadImage } from './UploadImage/UploadImage';
import { useRef } from 'react';
import { PlacesAutocomplete } from 'components/RegisterForm/Autocomplete';

export const ModalAddNoticeSecondStep = ({
  values,
  errors,
  setFieldValue,
  handleChange,
  saveLocation,
  setisLastStep
}) => {
  const filePicker = useRef(null);

  const handlePick = () => {
    filePicker.current.click();
  };

  const isDisabledLastStep =
          values.theSex === '' ||
          values.location === '' ||
          values.comments === '' ||
          errors.theSex ||
          errors.location ||
          errors.comments;

  return (
    <>
      <TitleModal>Add pet</TitleModal>
      <ContainerSex>
        <LabelFieldTitle>
          The sex<span>*</span>:
        </LabelFieldTitle>
        <ContainerSexVariant>
          <SexLabel className={values.theSex === 'male' ? 'active' : ''}>
            <SexRadioInput type="radio" name="theSex" value="male" />
            <Icon>
              <Male />
            </Icon>
            <Sex>Male</Sex>
          </SexLabel>
          <SexLabel className={values.theSex === 'female' ? 'active' : ''}>
            <SexRadioInput type="radio" name="theSex" value="female" />
            <Icon>
              <Female />
            </Icon>
            <Sex>Female</Sex>
          </SexLabel>
        </ContainerSexVariant>
        <ErrorMessageSex name="theSex" component="span" />
      </ContainerSex>
      <Container>
        <BoxForInput>
          <LabelField>
            <LabelFieldTitle>
              Location<span>*</span>:
            </LabelFieldTitle>
            <PlacesAutocomplete saveAddress={saveLocation} />
          </LabelField>
          <ErrorMessageStyled name="location" component="span" />
        </BoxForInput>
        {values.category === 'sell' && (
          <BoxForInput>
            <LabelField>
              <LabelFieldTitle>
                Price<span>*</span>:
              </LabelFieldTitle>
              <FieldStyled name="price" type="text" placeholder="Type price" />
            </LabelField>
            <ErrorMessageStyled name="price" component="span" />
          </BoxForInput>
        )}
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
          <ErrorMessageStyled name="petAvatar" component="span" />
        </div>
        <BoxForInput>
          <LabelField>
            <LabelFieldTitle>
              Comments<span>*</span>
            </LabelFieldTitle>
            <CommentField
              type="text"
              component="textarea"
              name="comments"
              placeholder="Type comment"
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
