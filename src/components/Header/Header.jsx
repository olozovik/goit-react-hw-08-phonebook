import { HeaderStyled, LinkStyled } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';

export const Header = ({ logoutButton = false }) => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handleLogoutButton = () => {
    dispatch(logout());
  };

  return (
    <HeaderStyled>
      <h1>
        <LinkStyled to="/">Phonebook</LinkStyled>
      </h1>
      {logoutButton && (
        <div>
          <span>Hello, {name}</span>
          <button type="button" onClick={handleLogoutButton}>
            Log out
          </button>
        </div>
      )}
    </HeaderStyled>
  );
};
