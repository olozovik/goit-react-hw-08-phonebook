import { lazy, Suspense, useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsLoading,
  getIsLogged,
  getToken,
} from './redux/auth/auth-selectors';
import { getCurrentUser } from './redux/auth/auth-operations';
import { token } from './redux/auth/auth-operations';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

const LoginView = lazy(() => import('views/LoginView/LoginView'));
const RegistrationView = lazy(() =>
  import('views/RegistrationView/RegistrationView'),
);
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

const App = () => {
  const tokenExisting = useSelector(getToken);
  const dispatch = useDispatch();
  const isFirstLoadApp = useRef(true);
  const isLogged = useSelector(getIsLogged);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    if (!isFirstLoadApp.current) return;
    if (!tokenExisting) return;

    token.set(tokenExisting);
    dispatch(getCurrentUser(tokenExisting));

    isFirstLoadApp.current = false;
  }, [dispatch, tokenExisting]);

  return (
    !isLoading && (
      <Suspense fallback={null}>
        <Switch>
          <PublicRoute restricted path="/login">
            <LoginView />
          </PublicRoute>
          <PublicRoute restricted path="/register">
            <RegistrationView />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <ContactsView />
          </PrivateRoute>
          <Route>
            <Redirect to={isLogged ? '/contacts' : '/login'} />
          </Route>
          <Toaster />
        </Switch>
      </Suspense>
    )
  );
};

export default App;
