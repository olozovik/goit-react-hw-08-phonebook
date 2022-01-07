import styled from '@emotion/styled';

export const DeleteButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 10px;

  border: none;
  background-color: transparent;
  color: gray;
  cursor: pointer;

  & svg {
    font-size: 20px;
  }

  &:hover,
  &:active {
    color: ${props => props.theme.deleteButtonColor};
  }
`;
