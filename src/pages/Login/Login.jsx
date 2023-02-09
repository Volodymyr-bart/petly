import { LoginForm } from 'components/LoginForm/LoginForm';
import { AuthContainerStyled } from 'components/AuthContainer/AuthContainer.styled';
import { TitleStyled, Container } from './Login.styled';

export default function Login() {
  return (
    <Container>
      <AuthContainerStyled>
        <TitleStyled>Login</TitleStyled>
        <LoginForm />
      </AuthContainerStyled>
    </Container>
  );
}
