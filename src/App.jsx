import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from 'components/Routes/PublicRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { Loader } from 'components/Loader/Loader';
import ErrorPage from './components/Pages/ErrorPage/ErrorPage';

const Layout = lazy(() => import('components/Layout/Layout'));

const HomePage = lazy(() => import('components/Pages/HomePage/HomePage'));

const ContactsPage = lazy(() =>
  import('components/Pages/ContactsPage/ContactsPage')
);
const Login = lazy(() => import('components/Pages/LoginPage/LoginPage'));

const Register = lazy(() =>
  import('components/Pages/RegisterPage/RegisterPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Suspense>
  );
};
