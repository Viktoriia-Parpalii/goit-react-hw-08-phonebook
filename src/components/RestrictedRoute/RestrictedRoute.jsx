import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsAuth } from 'redux/auth.selectors';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const isAuth = useSelector(selectAuthIsAuth);
  return isAuth ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
