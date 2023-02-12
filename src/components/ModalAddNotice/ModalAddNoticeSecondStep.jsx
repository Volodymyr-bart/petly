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
  TitleInput,
  TitleModal,
} from './ModalAddNotice.styled';
import { UploadImage } from './UploadImage/UploadImage';
import { useRef } from 'react';

export const ModalAddNoticeSecondStep = ({
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
      <ContainerSex>
        <TitleInput>
          The sex<span>*</span>:
        </TitleInput>
        <ContainerSexVariant>
          <SexLabel className={values.theSex === 'male' ? 'active' : ''}>
            <SexRadioInput type="radio" name="theSex" value="male" />
            <Icon>
              <Male box-shadow="inset -1px 2px 3px rgba(255, 255, 255, 0.57), inset 0px -3px 4px rgba(0, 0, 0, 0.25)" />
            </Icon>
            <Sex>Male</Sex>
          </SexLabel>
          <SexLabel className={values.theSex === 'female' ? 'active' : ''}>
            <SexRadioInput type="radio" name="theSex" value="female" />
            <Icon>
              <Female box-shadow="inset -1px 2px 3px rgba(255, 255, 255, 0.57), inset 0px -3px 4px rgba(0, 0, 0, 0.25)" />
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
            <FieldStyled
              name="location"
              type="text"
              placeholder="City, Region"
            />
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

        {/* Comment */}
        <div>
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
          <ErrorMessageStyled name="comments" component="span" />
        </div>
      </Container>
    </>
  );
};
