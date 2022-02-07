import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  padding: 16px 15px;
  background-color: ${props => props.theme.headerBgColor};

  @media (min-width: 1200px) {
    padding: 16px 75px;
  }
`;

export const HeaderInnerWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLinkStyled = styled(Link)`
  font-size: 30px;
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
