import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts';
import { selectFilter } from 'redux/contacts.selectors';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <p className={css.titleFilter}>Find contacts by name</p>
      <input
        className={css.inputFilter}
        type="text"
        value={filter}
        name="filter"
        placeholder="Search"
        onChange={handleFilterChange}
      />
    </>
  );
};
