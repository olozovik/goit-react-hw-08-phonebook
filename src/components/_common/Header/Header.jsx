import * as authOperations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { ContainerMd } from 'components/_share/Container/Container';
import {
  HeaderStyled,
  HeaderInnerWrapperStyled,
  LogoLinkStyled,
  HeaderButtonStyled,
  HeaderLinkAuthStyled,
} from './Header.styled';

export const Header = ({ buttonText, link, contactsPage }) => {
  const dispatch = useDispatch();

  const handleLogoutButton = () => {
    dispatch(authOperations.logout());
  };

  return (
    <>
      <HeaderStyled>
        <ContainerMd>
          <HeaderInnerWrapperStyled>
            <LogoLinkStyled to="/">Phonebook</LogoLinkStyled>
            {contactsPage ? (
              <HeaderButtonStyled type="button" onClick={handleLogoutButton}>
                Log out
              </HeaderButtonStyled>
            ) : (
              <HeaderLinkAuthStyled to={link} color="inherit">
                {buttonText}
              </HeaderLinkAuthStyled>
            )}
          </HeaderInnerWrapperStyled>
        </ContainerMd>
      </HeaderStyled>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ p: '8px' }}>
          <Container>
            <Toolbar disableGutters>
              <Button
                component={Link}
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
                <Button component={Link} to={link} color="inherit">
                  {buttonText}
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box> */}
    </>
  );
};
