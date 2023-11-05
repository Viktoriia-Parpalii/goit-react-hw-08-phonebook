import React from 'react';
import Phonebook from 'images/phonebook.png';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1 className="tracking-in-expand-fwd">Welcome to your Phone book!</h1>
      <NavLink to={'/login'}>
        <img
          className="heartbeat"
          src={Phonebook}
          alt="phonebook"
          width={250}
        />
      </NavLink>
    </>
  );
};

export default HomePage;
