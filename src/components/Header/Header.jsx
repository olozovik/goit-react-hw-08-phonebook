import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import {
  ButtonStyled,
  HeaderStyled,
  LinkStyled,
  WelcomeText,
  WelcomeWrapper,
} from './Header.styled';

export const Header = ({ logoutButton = false }) => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  const handleLogoutButton = () => {
    dispatch(authOperations.logout());
  };

  return (
    <HeaderStyled>
      <h1>
        <LinkStyled to="/">Phonebook</LinkStyled>
      </h1>
      {logoutButton && (
        <WelcomeWrapper>
          <WelcomeText>Welcome, {name}</WelcomeText>
          <ButtonStyled type="button" onClick={handleLogoutButton}>
            Log out
          </ButtonStyled>
        </WelcomeWrapper>
      )}
    </HeaderStyled>
  );
};
