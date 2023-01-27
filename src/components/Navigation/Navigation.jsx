import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        pe<span>t</span>ly
      </NavLink>
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
  );
};
