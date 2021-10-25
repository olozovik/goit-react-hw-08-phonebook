import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 15px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LinkStyled = styled(Link)`
  font-size: 46px;
  color: inherit;
  text-decoration: none;
`;

export const WelcomeText = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const ButtonStyled = styled.button`
  flex-shrink: 0;
  padding: 6px 10px;

  font-size: 14px;
  font-weight: 600;

  border: none;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 0 0 transparent inset, 0 0 2px 1px rgba(0, 0, 0, 0.3);
  transition: box-shadow 150ms linear, color 150ms linear;

  &:hover,
  &:active {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3) inset, 0 0 0 transparent;
    color: ${({ theme }) => theme.buttonActiveHover};
  }
`;
