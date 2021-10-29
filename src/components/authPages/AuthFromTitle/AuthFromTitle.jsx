import { Container, Typography } from '@mui/material';

export const AuthFromTitle = ({ children }) => {
  return (
    <Container sx={{ width: '500px' }}>
      <Typography content="h2" variant="h5" sx={{ mb: '20px' }}>
        {children}
      </Typography>
    </Container>
  );
};
