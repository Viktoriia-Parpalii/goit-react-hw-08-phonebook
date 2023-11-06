import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReduser';
import css from './UserMenu.module.css';

import { BiUserCheck } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { selectUserEmail } from 'redux/auth.selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className={css.UserMenu}>
      <IconContext.Provider value={{ size: 30 }}>
        <BiUserCheck />
      </IconContext.Provider>
      <p className={css.User}>{userEmail}</p>
      <button className={css.UserBtn} onClick={onLogOut} type="button">
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
