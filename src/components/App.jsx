import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/contacts';

import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { CircleLoader } from 'react-spinners';
import { Wrapper } from './Wrapper/Wrapper';
import { selectAuthIsAuth } from 'redux/auth.selectors';
import UserMenu from './UserMenu/UserMenu';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { refreshThunk } from 'redux/authReduser';

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

  useEffect(() => {
    dispatch(refreshThunk());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Wrapper>
        <Suspense
          fallback={
            <CircleLoader
              color="#670063"
              size={100}
              cssOverride={{
                margin: '30px auto',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            />
          }
        >
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
        {isAuth && <UserMenu />}
      </Wrapper>
    </>
  );
};
