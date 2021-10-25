import { useSelector } from 'react-redux';
import { getIsLogged } from '../redux/auth/auth-selectors';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ children, routeProps }) => {
  const isLogged = useSelector(getIsLogged);

  return (
    <Route {...routeProps}>
      {isLogged ? children : <Redirect to="/login" />}
    </Route>
  );
};
