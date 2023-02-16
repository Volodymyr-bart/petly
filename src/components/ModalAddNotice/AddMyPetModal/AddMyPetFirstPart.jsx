import {
  BoxForInput,
  Button,
  CancelBack,
  Container,
  ContainerButton,
  ErrorMessageStyled,
  FieldStyled,
  LabelField,
  LabelFieldTitle,
  TitleModal,
} from '../ModalAddNotice.styled';


export const AddMyPetFirstPart = ({values,errors,setisLastStep, isDisabled, onClose}) => {
  return (<>
          <TitleModal>Add pet</TitleModal>
          <Container>
            <BoxForInput>
              <LabelField>
                <LabelFieldTitle>Name pet<span>*</span></LabelFieldTitle>
                <FieldStyled
                  name="name"
                  type="text"
                  placeholder="Type name pet"
                />
              </LabelField>
              <ErrorMessageStyled name='name' component='p'/>
            </BoxForInput>
            <BoxForInput>
              <LabelField>
                <LabelFieldTitle>Date of birth</LabelFieldTitle>
                <FieldStyled
                  name="birthday"
                  type="text"
                  placeholder="Type date of birth XX.XX.XXXX"
                />
              </LabelField>
              <ErrorMessageStyled name='birthday' component='span'/>
            </BoxForInput>
            <BoxForInput>
              <LabelField>
                <LabelFieldTitle>Breed</LabelFieldTitle>
                <FieldStyled
                  name="breed"
                  type="text"
                  placeholder="Type breed"
                />
              </LabelField>
              <ErrorMessageStyled name='breed' component='span'/>
            </BoxForInput>
          </Container>
          <ContainerButton>
            <CancelBack type="button" onClick={onClose}>
              Cancel
            </CancelBack>
            <Button type="button" disabled={isDisabled} className={isDisabled ? 'disabled' : ''} onClick={() => setisLastStep(true)}>
              Next
            </Button>
          </ContainerButton>
        </>
  );
};
