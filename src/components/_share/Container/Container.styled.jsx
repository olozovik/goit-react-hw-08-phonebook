import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export const StyledContainerMd = styled(Container)`
  max-width: 960px;
`;

export const StyledContainerForm = styled(Container)`
  max-width: 500px;
`;
