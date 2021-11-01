import { Button, TextField } from '@mui/material';
import { ContainerForm } from 'components/_share/Container/Container';
import { AuthFormStyled } from './AuthForm.styled';

export const AuthForm = ({ formDescription }) => {
  return (
    <ContainerForm>
      <AuthFormStyled
        autoComplete="off"
        onSubmit={formDescription.handleSubmit}
      >
        {formDescription.inputs.map(input => {
          const {
            id,
            autocomplete = false,
            name,
            label,
            type,
            required,
            minLength,
            title,
            value,
            onChange,
          } = input;
          return (
            <TextField
              id={id}
              autoComplete={autocomplete}
              key={name}
              fullWidth
              label={label}
              type={type}
              name={name}
              required={required}
              title={title}
              value={value}
              onChange={onChange}
              sx={{ mb: '20px' }}
              inputProps={{ minLength: minLength }}
            />
          );
        })}

        <Button variant="contained" fullWidth type="submit">
          {formDescription.button.text}
        </Button>
      </AuthFormStyled>
    </ContainerForm>
  );
};
