import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { authOperations, authSelectors } from 'redux/auth';
import { AuthForm } from '../AuthForm/AuthForm';

export const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  useEffect(() => {
    if (!error) return;
    toast.error('Error. Try a different email or password, or try again later');
  }, [error]);

  const handleEmailInput = e => {
    setUser({ ...user, email: e.target.value });
  };
  const handlePasswordInput = e =>
    setUser({ ...user, password: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      authOperations.login({ email: user.email, password: user.password }),
    );
  };

  const formDescription = {
    inputs: [
      {
        label: 'Email',
        type: 'email',
        name: 'email',
        title: 'Enter your email',
        value: user.email,
        onChange: handleEmailInput,
        required: true,
      },
      {
        label: 'Password',
        type: 'password',
        name: 'password',
        title: 'Enter password',
        minLength: '7',
        value: user.password,
        onChange: handlePasswordInput,
        required: true,
      },
    ],
    button: { text: 'login' },
    handleSubmit: handleSubmit,
  };

  return <AuthForm formDescription={formDescription} />;
};
