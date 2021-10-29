import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Header = ({ buttonText, link }) => {
  return (
    <Box sx={{ flexGrow: 1, mb: '50px' }}>
      <AppBar position="static">
        <Container sx={{ p: 0 }}>
          <Toolbar>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ mr: 'auto' }}
            >
              <Typography
                // variant="h3"
                component="h1"
                sx={{ textTransform: 'none', fontSize: '40px' }}
              >
                Phonebook
              </Typography>
            </Button>
            <Button component={RouterLink} to={link} color="inherit">
              {buttonText}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
