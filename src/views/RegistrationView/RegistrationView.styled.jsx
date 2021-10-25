import styled from '@emotion/styled';

export const CreateAccountHeading = styled.h2`
  margin-bottom: 15px;
  font-size: 20px;
`;

export const ToLogin = styled.p`
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
