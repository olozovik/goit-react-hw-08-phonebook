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
          <AuthFormTitleStyled>Enter to your account:</AuthFormTitleStyled>
        </ContainerForm>
      </AuthFormWrapperStyled>
      {/*<Container maxWidth={false} sx={{ maxWidth: '500px', mt: '50px' }}>*/}
      {/*  <Typography content="h2" variant="h5" sx={{ mb: '20px' }}>*/}
      {/*    {children}*/}
      {/*  </Typography>*/}
      {/*</Container>*/}
    </>
  );
};
