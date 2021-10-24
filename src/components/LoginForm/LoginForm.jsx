import { Input } from '../_share/Input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

export const LoginForm = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

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
      <label>
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
      </label>
      <label>
        <p>Password</p>
        <Input
          type="password"
          name="password"
          required
          title="Enter your password"
          value={user.password}
          onChange={handlePasswordInput}
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
