import { InputStyled } from './InputStyled';

const Input = ({
  id,
  type,
  name,
  pattern,
  title,
  required,
  value,
  onChange,
  autoComplete = 'off',
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
    />
  );
};

export { Input };
