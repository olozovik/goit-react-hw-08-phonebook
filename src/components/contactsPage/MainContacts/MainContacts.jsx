import { Container, Typography, Grid } from '@mui/material';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

export const MainContacts = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography component="h2" variant="h5" sx={{ mb: '10px' }}>
          Contacts
        </Typography>
        <Filter />
      </Container>
      <ContactList />
    </>
  );
};
