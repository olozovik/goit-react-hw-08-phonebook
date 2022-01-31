import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export const PrivateRoute = ({ children, routeProps }) => {
  const isLogged = useSelector(authSelectors.getIsLogged);

  return isLogged ? children : <Navigate to="/login" replace={true} />;
};
