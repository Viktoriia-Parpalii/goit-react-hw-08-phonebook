import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/contacts';

import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { CircleLoader } from 'react-spinners';
import { Wrapper } from './Wrapper/Wrapper';

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/contacts', element: <ContactsPage /> },
];

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Navigation />

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
    </Wrapper>
  );
};
