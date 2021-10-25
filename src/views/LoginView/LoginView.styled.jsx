import styled from '@emotion/styled';

export const ToRegister = styled.p`
  font-size: 15px;
  font-weight: 500;

  & a {
    color: inherit;
    font-size: 16px;
    font-weight: 600;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.buttonActiveHover};
    }
  }
`;
