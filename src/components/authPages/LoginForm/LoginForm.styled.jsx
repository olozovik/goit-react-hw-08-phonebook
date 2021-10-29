import styled from '@emotion/styled';

export const LoginFormStyled = styled.form`
  margin-bottom: 30px;
`;

export const LabelStyled = styled.label`
  display: block;

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  &:last-of-type {
    margin-bottom: 20px;
  }

  & p {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;

export const ButtonStyled = styled.button`
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
