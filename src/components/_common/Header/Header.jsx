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
    <Box sx={{ flexGrow: 1, mb: '30px' }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={{ mr: 'auto' }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{ textTransform: 'none' }}
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
