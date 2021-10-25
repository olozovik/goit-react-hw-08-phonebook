import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export const PublicRoute = ({ children, restricted = false, routeProps }) => {
  const isLogged = useSelector(authSelectors.getIsLogged);
  const shouldRedirect = isLogged && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};
