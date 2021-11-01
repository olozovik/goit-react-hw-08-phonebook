import { ContainerForm } from '../../_share/Container/Container';
import { AuthFormTextStyled } from './AuthFormText.styled';

export const AuthFormText = ({ text, link }) => {
  return (
    <ContainerForm>
      <AuthFormTextStyled to={link}>{text}</AuthFormTextStyled>
    </ContainerForm>
  );
};
