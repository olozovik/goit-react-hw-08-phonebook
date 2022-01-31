import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export const PublicRoute = ({ children, restricted = false }) => {
  const isLogged = useSelector(authSelectors.getIsLogged);
  const shouldRedirect = isLogged && restricted;

  return shouldRedirect ? <Navigate to="/contacts" replace={true} /> : children;
};
