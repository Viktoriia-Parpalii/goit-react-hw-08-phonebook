import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink className={css.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.navLink} to="/contacts">
          Contacts
        </NavLink>
        <NavLink className={css.navLink} to="/register">
          Register
        </NavLink>
        <NavLink className={css.navLink} to="/login">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
