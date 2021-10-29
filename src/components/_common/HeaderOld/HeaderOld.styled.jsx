import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderOldStyled = styled.header`
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

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 483px) {
    align-items: flex-start;
  }
`;

export const WelcomeText = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonStyled = styled.button`
  flex-shrink: 0;
  padding: 10px 0px;

  font-size: 13px;
  font-weight: 600;

  border: none;
  border-radius: 3px;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  transition: color 150ms linear;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.buttonActiveHover};
  }
`;
