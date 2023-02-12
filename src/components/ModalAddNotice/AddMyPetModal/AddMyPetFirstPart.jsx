import {
  Container,
  ErrorMessageStyled,
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
                <LabelFieldTitle>Name pet<span>*</span></LabelFieldTitle>
                <FieldStyled
                  name="name"
                  type="text"
                  placeholder="Type name pet"
                />
              </LabelField>
              <ErrorMessageStyled name='name' component='span'/>
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
              <ErrorMessageStyled name='birthday' component='span'/>
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
              <ErrorMessageStyled name='breed' component='span'/>
            </div>
          </Container>
          </>
  );
};
