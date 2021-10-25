import { Input } from '../_share/Input/Input';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { getError } from '../../redux/auth/auth-selectors';
import toast from 'react-hot-toast';
import { ButtonStyled, LabelStyled } from './LoginForm.styled';

export const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const error = useSelector(getError);

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

    dispatch(login({ email: user.email, password: user.password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabelStyled>
        <p>Email</p>
        <Input
          type="email"
          name="email"
          required
          title="Enter your email"
          minLength="7"
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
          value={user.password}
          onChange={handlePasswordInput}
        />
      </LabelStyled>
      <ButtonStyled type="submit">Log in</ButtonStyled>
    </form>
  );
};
