import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReduser';
import css from './UserMenu.module.css';

import { BiUserCheck } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { selectUserEmail } from 'redux/auth.selectors';
import { toast } from 'react-toastify';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const onLogOut = () => {
    dispatch(logOutThunk())
      .unwrap()
      .then(() => {
        toast.info(' Logout was successful!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
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
