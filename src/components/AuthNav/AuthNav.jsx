import { AuthNavItem, NavBtnLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <AuthNavItem>
        <NavBtnLink  to="/login">
        Log In
        </NavBtnLink>
      </AuthNavItem>
      <AuthNavItem>
        <NavBtnLink  to="/register">
        Register
      </NavBtnLink>
      </AuthNavItem>
    </>
  );
};
