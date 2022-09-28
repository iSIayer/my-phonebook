import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import Main from './Main/Main.styled';
import authOperations from 'redux/auth/auth-operations';

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
