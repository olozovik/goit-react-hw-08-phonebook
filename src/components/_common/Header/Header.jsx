import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/auth-operations';
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
      </HeaderStyled>
    </>
  );
};
