import Logo from 'components/Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Logo />
        <Navigation />
      </HeaderStyled>
    </>
  );
};
