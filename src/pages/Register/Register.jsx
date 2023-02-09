import { AuthContainerStyled } from 'components/AuthContainer/AuthContainer.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container, TitleStyled } from 'pages/Register/Register.styled';

export default function Register() {
  return (
    <Container>
    <AuthContainerStyled>
        <TitleStyled>Registration</TitleStyled>
        <RegisterForm />
    </AuthContainerStyled>
    </Container>
  );
}
