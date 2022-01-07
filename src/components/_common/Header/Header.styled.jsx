import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  padding: 15px 0;
  background-color: ${props => props.theme.headerBgColor};
`;

export const HeaderInnerWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLinkStyled = styled(Link)`
  font-size: 40px;
  font-weight: 500;
  color: ${props => props.theme.headerTextColor};
  text-decoration: none;
`;

export const HeaderButtonStyled = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.headerTextColor};
  text-transform: uppercase;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const HeaderLinkAuthStyled = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => props.theme.headerTextColor};
  text-decoration: none;
`;
