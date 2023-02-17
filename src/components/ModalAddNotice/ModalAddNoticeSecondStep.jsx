import { ReactComponent as Male } from '../../noticesImage/male.svg';
import { ReactComponent as Female } from '../../noticesImage/female.svg';
import { ReactComponent as DefaultImg } from '../../noticesImage/loadimg.svg';

import {
  CommentField,
  Container,
  ContainerSex,
  ContainerSexVariant,
  DefaultLoadImg,
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
  setFieldValue,
  handleChange,
  saveLocation,
}) => {
  const filePicker = useRef(null);

  const handlePick = () => {
    filePicker.current.click();
  };

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
        <ErrorMessageStyled name="theSex" component="span" />
      </ContainerSex>
      <Container>
        <div>
          <LabelField>
            <LabelFieldTitle>
              Location<span>*</span>:
            </LabelFieldTitle>
            <PlacesAutocomplete saveAddress={saveLocation} />
          </LabelField>
          <ErrorMessageStyled name="location" component="span" />
        </div>
        {values.category === 'sell' && (
          <div>
            <LabelField>
              <LabelFieldTitle>
                Price<span>*</span>:
              </LabelFieldTitle>
              <FieldStyled name="price" type="text" placeholder="Type price" />
            </LabelField>
            <ErrorMessageStyled name="price" component="span" />
          </div>
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
        <div>
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
         <ErrorMessageStyled name="comments" component="span" />
        </div>
      </Container>
    </>
  );
};
