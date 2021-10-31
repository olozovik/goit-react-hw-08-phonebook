import { Box, Button, Container, TextField } from '@mui/material';

export const AuthForm = ({ formDescription }) => {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '500px' }}>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={formDescription.handleSubmit}
        sx={{ mb: '10px' }}
      >
        {formDescription.inputs.map(input => {
          const {
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
      </Box>
    </Container>
  );
};
