import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Input } from 'components/_share/Input/Input';
import { authOperations, authSelectors } from 'redux/auth';
import {
  ButtonStyled,
  FormStyled,
  LabelStyled,
} from './RegistrationForm.styled';

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

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          <p>Name</p>
          <Input
            type="text"
            name="name"
            required
            title="Enter your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={user.name}
            onChange={handleNameInput}
          />
        </LabelStyled>
        <LabelStyled>
          <p>Email</p>
          <Input
            type="email"
            name="email"
            required
            title="Enter your email"
            value={user.email}
            onChange={handleEmailInput}
          />
        </LabelStyled>
        <LabelStyled>
          <p>Password</p>
          <Input
            type="password"
            name="password"
            required
            title="Enter your password"
            minLength="7"
            value={user.password}
            onChange={handlePasswordInput}
          />
        </LabelStyled>
        <LabelStyled>
          <p>Confirm password</p>
          <Input
            type="password"
            name="confirmPassword"
            required
            title="Confirm your password"
            minLength="7"
            value={user.confirmPassword}
            onChange={handleConfirmPasswordInput}
          />
        </LabelStyled>
        <ButtonStyled type="submit">Sign Up</ButtonStyled>
      </FormStyled>
    </>
  );
};
