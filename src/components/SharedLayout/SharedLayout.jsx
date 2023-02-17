import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from '../Header/Header';
import { Suspense, useEffect, useState } from 'react';
import { StyledSharedLayout } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') setIsHome(true);
    if (location.pathname !== '/') setIsHome(false);   
  }, [location])

  return (
    <StyledSharedLayout isHome={isHome}>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </StyledSharedLayout>
  );
};
