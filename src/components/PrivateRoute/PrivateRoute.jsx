import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsAuth } from 'redux/auth.selectors';

const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isAuth = useSelector(selectAuthIsAuth);
  return isAuth ? children : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
