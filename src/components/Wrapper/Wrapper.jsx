import css from './Wrapper.module.css';
import React from 'react';

export const Wrapper = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};
