// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { NavLink } from 'react-router-dom';
import { RiAccountCircleFill } from 'react-icons/ri';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();

  return (
    <NavLink to="/user" className={css.link}>
      <RiAccountCircleFill />
      <p className={css.paragraph}>Account</p>
    </NavLink>
  );
};
