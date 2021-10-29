import { Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const AuthFormText = ({ text, link }) => {
  return (
    <Container sx={{ width: '500px' }}>
      <Button component={RouterLink} to={link}>
        {text}
      </Button>
    </Container>
  );
};
