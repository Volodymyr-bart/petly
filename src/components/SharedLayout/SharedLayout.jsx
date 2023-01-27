import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { StyledSharedLayout } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <StyledSharedLayout>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </StyledSharedLayout>
  );
};
