import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export const PrivateRoute = ({ children, routeProps }) => {
  const isLogged = useSelector(authSelectors.getIsLogged);

  return (
    <Route {...routeProps}>
      {isLogged ? children : <Redirect to="/login" />}
    </Route>
  );
};
