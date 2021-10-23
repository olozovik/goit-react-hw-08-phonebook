import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Redirect, Route, Switch } from 'react-router-dom';

const LoginView = lazy(() => import('views/LoginView/LoginView'));
const RegistrationView = lazy(() =>
  import('views/RegistrationView/RegistrationView'),
);
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

const App = () => {
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
