import { ContainerForm } from 'components/_share/Container/Container';
import {
  AuthFormTitleStyled,
  AuthFormWrapperStyled,
} from './AuthFormTitle.styled';

export const AuthFormTitle = ({ children }) => {
  return (
    <>
      <AuthFormWrapperStyled>
        <ContainerForm>
          <AuthFormTitleStyled>{children}</AuthFormTitleStyled>
        </ContainerForm>
      </AuthFormWrapperStyled>
    </>
  );
};
