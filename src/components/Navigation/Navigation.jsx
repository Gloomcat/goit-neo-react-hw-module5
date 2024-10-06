import css from './Navigation.module.css';
import clsx from 'clsx';

import { NavLink } from 'react-router-dom';

const generateActiveClass = ({ isActive }) => {
  return clsx(css['nav-link'], isActive && css['active']);
};

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={generateActiveClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={generateActiveClass}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
