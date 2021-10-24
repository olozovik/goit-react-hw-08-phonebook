import { InputStyled } from './InputStyled';

const Input = ({
  type,
  name,
  pattern,
  title,
  required,
  value,
  onChange,
  autoComplete = 'off',
  minLength = 1,
}) => {
  return (
    <InputStyled
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required={required}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      minLength={minLength}
    />
  );
};

export { Input };
