import { StyledContainerForm } from './Container.styled';
import { StyledContainerMd } from './Container.styled';

export const ContainerMd = ({ children }) => {
  return <StyledContainerMd>{children}</StyledContainerMd>;
};

export const ContainerForm = ({ children }) => {
  return <StyledContainerForm>{children}</StyledContainerForm>;
};
