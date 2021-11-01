import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AuthFormTextStyled = styled(Link)`
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.theme.authLinkColor};
  text-decoration: none;
`;
