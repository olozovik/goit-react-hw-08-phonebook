import { useSelector } from 'react-redux';
import { getIsLogged } from '../redux/auth/auth-selectors';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false, routeProps }) => {
  const isLogged = useSelector(getIsLogged);
  const shouldRedirect = isLogged && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};
