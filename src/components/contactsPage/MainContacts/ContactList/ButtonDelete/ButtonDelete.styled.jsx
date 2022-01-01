import { Clear } from '@mui/icons-material';
import styled from '@emotion/styled';

export const DeleteButtonStyled = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    font-size: 20px;
  }

  &:hover,
  &:active {
    color: ${props => props.theme.deleteButtonColor};
  }
`;
