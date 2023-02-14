import { PlacesAutocomplete } from './Autocomplete';
import { FieldStyled,  ErrorMessageStyled, InputContainer, InputBox } from './RegisterForm.styled';

export const RegisterSecondStep = ({saveAddress}) => {
  
  return (<div>
            <InputContainer>
              <InputBox>
              <FieldStyled type="text" name="name" placeholder='Name' />
              <ErrorMessageStyled name="name" component="p"/> 
              </InputBox>
              <InputBox>
              <PlacesAutocomplete saveAddress={saveAddress}/>
              <ErrorMessageStyled name="address" component="p"/>
              </InputBox>
              <InputBox>
              <FieldStyled type="phone" name="phone" placeholder='Mobile phone' />
              <ErrorMessageStyled name="phone" component="p"/>
              </InputBox>
              </InputContainer>
              </div>
  );
};