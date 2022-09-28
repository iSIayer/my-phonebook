import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selector';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/contacts" />;
};
