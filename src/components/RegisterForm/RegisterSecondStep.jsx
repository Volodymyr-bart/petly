import { PlacesAutocomplete } from './Autocomplete';
import { FieldStyled,  ErrorMessageStyled, InputContainer } from './RegisterForm.styled';

export const RegisterSecondStep = ({saveAddress}) => {
  
  return (<div>
            <InputContainer>
              <FieldStyled type="text" name="name" placeholder='Name' />
              <ErrorMessageStyled name="name" component="span"/> 
              <PlacesAutocomplete saveAddress={saveAddress}/>
              <ErrorMessageStyled name="address" component="span"/>
              <FieldStyled type="phone" name="phone" placeholder='Mobile phone' />
              <ErrorMessageStyled name="phone" component="span"/>
              </InputContainer>
              </div>
  );
};