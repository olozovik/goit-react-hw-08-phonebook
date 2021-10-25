import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 15px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LinkStyled = styled(Link)`
  font-size: 46px;
  color: inherit;
  text-decoration: none;
`;
