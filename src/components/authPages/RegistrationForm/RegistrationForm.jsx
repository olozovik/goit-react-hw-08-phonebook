import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { authOperations, authSelectors } from 'redux/auth';
import { AuthForm } from '../AuthForm/AuthForm';

export const RegistrationForm = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleNameInput = e => setUser({ ...user, name: e.target.value });
  const handleEmailInput = e => setUser({ ...user, email: e.target.value });
  const handlePasswordInput = e =>
    setUser({ ...user, password: e.target.value });
  const handleConfirmPasswordInput = e =>
    setUser({ ...user, confirmPassword: e.target.value });

  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);
  const userName = useSelector(authSelectors.getUserName);

  const handleSubmit = async e => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    const newUser = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    dispatch(authOperations.registration(newUser));
  };

  useEffect(() => {
    if (error === null) {
      return;
    }
    if (error?.data?.errors?.password?.kind === 'minlength') {
      toast.error('Too short password. A minimum of 7 characters is required');
    }
    if (error?.data?.keyPattern?.email === 1) {
      toast.error('This email is already registered');
    }
  }, [error]);

  useEffect(() => {
    if (!userName) return;
    toast.success('Registration successful');
  }, [userName]);

  const formDescription = {
    inputs: [
      {
        label: 'Name',
        type: 'text',
        name: 'name',
        title: 'Enter your name',
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        value: user.name,
        onChange: handleNameInput,
        required: true,
      },
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
      {
        label: 'Confirm password',
        type: 'password',
        name: 'confirmPassword',
        title: 'Confirm password',
        minLength: '7',
        value: user.confirmPassword,
        onChange: handleConfirmPasswordInput,
        required: true,
      },
    ],
    button: { text: 'Sign Up' },
    handleSubmit: handleSubmit,
  };

  return <AuthForm formDescription={formDescription} />;
};
