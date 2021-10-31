import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import * as authOperations from '../../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

export const Header = ({ buttonText, link, contactsPage }) => {
  const dispatch = useDispatch();

  const handleLogoutButton = () => {
    dispatch(authOperations.logout());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ p: '8px' }}>
        <Container>
          <Toolbar disableGutters>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ mr: 'auto', paddingX: 0 }}
            >
              <Typography
                // variant="h3"
                component="h1"
                sx={{ textTransform: 'none', fontSize: '40px' }}
              >
                Phonebook
              </Typography>
            </Button>
            {contactsPage ? (
              <Button color="inherit" onClick={handleLogoutButton}>
                Log out
              </Button>
            ) : (
              <Button component={RouterLink} to={link} color="inherit">
                {buttonText}
              </Button>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
