import {
  Container,
  ErrorText,
  FieldStyled,
  LabelField,
  LabelFieldTitle,
  TitleModal,
} from '../ModalAddNotice.styled';


export const AddMyPetFirstPart = ({values,errors}) => {
  return (<>
          <TitleModal>Add pet</TitleModal>
          <Container>
            <div>
              <LabelField>
                <LabelFieldTitle>Name pet</LabelFieldTitle>
                <FieldStyled
                  name="name"
                  type="text"
                  placeholder="Type name pet"
                />
              </LabelField>
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Date of birth</LabelFieldTitle>
                <FieldStyled
                  name="birthday"
                  type="text"
                  placeholder="Type date of birth XX.XX.XXXX"
                />
              </LabelField>
              {errors.birthday && <ErrorText>{errors.birthday}</ErrorText>}
            </div>
            <div>
              <LabelField>
                <LabelFieldTitle>Breed</LabelFieldTitle>
                <FieldStyled
                  name="breed"
                  type="text"
                  placeholder="Type breed"
                />
              </LabelField>
              {errors.breed && <ErrorText>{errors.breed}</ErrorText>}
            </div>
          </Container>
          </>
  );
};
