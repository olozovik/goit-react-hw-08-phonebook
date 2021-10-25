import { lazy, Suspense, useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged, getToken } from './redux/auth/auth-selectors';
import { refresh } from './redux/auth/auth-operations';
import { token } from './redux/auth/auth-operations';

const LoginView = lazy(() => import('views/LoginView/LoginView'));
const RegistrationView = lazy(() =>
  import('views/RegistrationView/RegistrationView'),
);
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

const App = () => {
  const tokenExisting = useSelector(getToken);
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();
  const isFirstLoadApp = useRef(true);

  useEffect(() => {
    if (!isFirstLoadApp.current) return;
    if (!tokenExisting) return;

    token.set(tokenExisting);
    dispatch(refresh(tokenExisting));

    isFirstLoadApp.current = false;
  }, [dispatch, tokenExisting]);

  return (
    //Добавить лоадер?
    <Suspense fallback={null}>
      <Switch>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/register">
          <RegistrationView />
        </Route>
        <Route path="/contacts">
          <ContactsView />
        </Route>
        <Route>
          {/*Добавить условие в зависимости от того, залогинен ли пользователь*/}
          <Redirect to="/login" />
        </Route>
        <Toaster />
      </Switch>
    </Suspense>
  );
};

export default App;
