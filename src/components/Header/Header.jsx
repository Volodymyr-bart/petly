import Logo from 'components/Logo/Logo';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') setIsHome(true);
    if (location.pathname !== '/') setIsHome(false);   
  }, [location])

  return (
    <>
      <HeaderStyled isHome={isHome}>
        <Logo />
        <Navigation />
      </HeaderStyled>
    </>
  );
};
