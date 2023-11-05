import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectAuthIsAuth } from 'redux/auth.selectors';
import { IconContext } from 'react-icons';
import { BiHomeHeart } from 'react-icons/bi';

const Navigation = () => {
  const isAuth = useSelector(selectAuthIsAuth);

  const addClassAktiveToLink = ({ isActive }) =>
    `${css['navLink']} ${isActive ? css.active : ''}`;

  const addClassAktiveToLinkHome = ({ isActive }) =>
    `${css['navLinkHouse']} ${isActive ? css.active : ''}`;

  return (
    <header>
      <nav>
        <NavLink className={addClassAktiveToLinkHome} to="/">
          <IconContext.Provider value={{ size: 30 }}>
            <BiHomeHeart />
          </IconContext.Provider>
        </NavLink>
        {isAuth ? (
          <>
            <NavLink className={addClassAktiveToLink} to="/contacts">
              Contacts
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className={addClassAktiveToLink} to="/register">
              Register
            </NavLink>
            <NavLink className={addClassAktiveToLink} to="/login">
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
