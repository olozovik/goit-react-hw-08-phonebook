import { Container, Grid } from '@mui/material';

export const ContainerMd = ({ children }) => {
  return (
    <Container maxWidth="md" sx={{ outline: '1px dotted tomato' }}>
      {children}
    </Container>
  );
};
