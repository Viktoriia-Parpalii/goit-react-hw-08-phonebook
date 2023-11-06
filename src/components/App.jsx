import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './Navigation/Navigation';
import { Wrapper } from './Wrapper/Wrapper';
import UserMenu from './UserMenu/UserMenu';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Loader from './CircleLoader/CircleLoader';

import {
  selectAuthError,
  selectAuthIsAuth,
  selectAuthIsLoading,
} from 'redux/auth.selectors';
import { refreshThunk } from 'redux/authReduser';
import { selectError } from 'redux/contacts.selectors';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestrictedRoute>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestrictedRoute>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectAuthIsAuth);
  const isLoading = useSelector(selectAuthIsLoading);
  const errorAuth = useSelector(selectAuthError);
  const errorFetch = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Wrapper>
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
        {isAuth === true && <UserMenu />}
        {isLoading === true && <Loader />}
        {errorAuth || (errorFetch && toast.error('Please try again!'))}
      </Wrapper>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
