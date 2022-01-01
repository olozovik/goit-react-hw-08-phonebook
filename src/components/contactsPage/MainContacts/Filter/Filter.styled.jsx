import { TextField } from '@mui/material';
import styled from '@emotion/styled';

export const TextFieldStyled = styled(TextField)`
  width: 300px;
  margin-bottom: 30px;
  &:focus-within {
    svg {
      color: ${props => props.theme.activeColor};
    }
  }
`;
