import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';
import Logo from 'components/Logo/Logo';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Logo />
      <nav>
        {/* <span>
        pe<span>t</span>ly
      </span> */}
        {/* <NavLink className={css.link} to="/">
        pe<span>t</span>ly
      </NavLink> */}
        <NavLink className={css.link} to="/news">
          News
        </NavLink>
        <NavLink className={css.link} to="/notices">
          Find pet
        </NavLink>
        <NavLink className={css.link} to="/friends">
          Our friends
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.link} to="/tasks">
            Tasks
          </NavLink>
        )}
      </nav>
    </>
  );
};
