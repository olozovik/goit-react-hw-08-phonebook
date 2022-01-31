import { lazy, Suspense, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { authSelectors, authOperations } from './redux/auth';

const LoginView = lazy(() => import('views/LoginView/LoginView'));
const RegistrationView = lazy(() =>
  import('views/RegistrationView/RegistrationView'),
);
const ContactsView = lazy(() => import('views/ContactsView/ContactsView'));

const App = () => {
  const tokenExisting = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();
  const isFirstLoadApp = useRef(true);
  const isLogged = useSelector(authSelectors.getIsLogged);
  const isLoading = useSelector(authSelectors.getIsLoading);

  useEffect(() => {
    if (!isFirstLoadApp.current) return;
    if (!tokenExisting) return;

    authOperations.token.set(tokenExisting);
    dispatch(authOperations.getCurrentUser(tokenExisting));

    isFirstLoadApp.current = false;
  }, [dispatch, tokenExisting]);

  return (
    !isLoading && (
      <Suspense fallback={null}>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginView />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegistrationView />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              isLogged ? <Navigate to="/contacts" /> : <Navigate to="/login" />
            }
          />
        </Routes>
        <Toaster />
      </Suspense>
    )
  );
};

export default App;
