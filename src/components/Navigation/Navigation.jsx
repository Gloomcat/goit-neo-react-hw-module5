import css from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={css['nav-link']}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css['nav-link']}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
