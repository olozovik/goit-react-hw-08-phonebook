import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  padding: 15px 0;
  background-color: ${props => props.theme.headerBgColor};
`;

export const StyledInnerWrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLinkLogo = styled(Link)`
  font-size: 40px;
  font-weight: 500;
  color: ${props => props.theme.headerTextColor};
  text-decoration: none;
`;

export const StyledButton = styled.button`
  color: ${props => props.theme.headerTextColor};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
`;

export const StyledLinkAuth = styled(Link)`
  color: ${props => props.theme.headerTextColor};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
`;
