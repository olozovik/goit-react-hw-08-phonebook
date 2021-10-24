import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { registration } from 'redux/auth/auth-operations';
import { getError, getUserName } from 'redux/auth/auth-selectors';
import { Input } from 'components/_share/Input/Input';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameInput = e => setName(e.target.value);
  const handleEmailInput = e => setEmail(e.target.value);
  const handlePasswordInput = e => setPassword(e.target.value);
  const handleConfirmPasswordInput = e => setConfirmPassword(e.target.value);

  const dispatch = useDispatch();
  const error = useSelector(getError);
  const userName = useSelector(getUserName);

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }
    const newUser = {
      name,
      email,
      password,
    };
    dispatch(registration(newUser));
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
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <Input
            type="text"
            name="name"
            required
            title="Enter your name"
            value={name}
            onChange={handleNameInput}
          />
        </label>
        <label>
          <p>Email</p>
          <Input
            type="email"
            name="email"
            required
            title="Enter your email"
            value={email}
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
            value={password}
            onChange={handlePasswordInput}
          />
        </label>
        <label>
          <p>Confirm password</p>
          <Input
            type="password"
            name="confirmPassword"
            required
            title="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordInput}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
