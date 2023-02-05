import { AuthNavItem, NavBtnLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <AuthNavItem>
        <NavBtnLink  to="/register">
        Log In
        </NavBtnLink>
      </AuthNavItem>
      <AuthNavItem>
        <NavBtnLink  to="/login">
        Register
      </NavBtnLink>
      </AuthNavItem>
    </>
  );
};
