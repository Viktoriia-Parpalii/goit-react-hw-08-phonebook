import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReduser';
import css from './UserMenu.module.css';
import { UserEmail } from 'redux/auth.selectors';
import { BiUserCheck } from 'react-icons/bi';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(UserEmail);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className={css.UserMenu}>
      <BiUserCheck />
      <p className={css.User}>{userEmail}</p>
      <button className={css.UserBtn} onClick={onLogOut} type="button">
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
