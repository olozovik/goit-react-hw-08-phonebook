import { Input } from '../_share/Input/Input';
import { useState } from 'react';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameInput = e => setName(e.target.value);
  const handleEmailInput = e => setEmail(e.target.value);
  const handlePasswordInput = e => setPassword(e.target.value);
  const handleConfirmPasswordInput = e => setConfirmPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
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
  );
};
