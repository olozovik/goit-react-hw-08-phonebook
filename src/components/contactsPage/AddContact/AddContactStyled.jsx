import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const AddContactStyled = styled.div`
  margin-bottom: 30px;
`;

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: auto min-content;
  gap: 20px;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

export const InputsWrapperStyled = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonStyled = styled(Button)`
  & svg {
    width: 44px;
    margin-top: -4px;
  }

  @media (max-width: 600px) {
    margin-left: auto;
  }
`;

export const TitleStyled = styled.h2`
  margin: 30px 0 15px;
  font-size: 26px;
  font-weight: 400;
`;
