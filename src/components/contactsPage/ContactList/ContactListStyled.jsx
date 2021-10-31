import styled from '@emotion/styled';

export const StyledTable = styled.table`
  width: 100%;
  font-size: 20px;
  line-height: 3;

  @media (max-width: 600px) {
    line-height: 2.7;
  }

  & tr {
    display: flex;
    align-items: center;

    & td {
      padding: 0 20px;
      flex-grow: 0;
      overflow: hidden;

      @media (max-width: 600px) {
        padding: 0 15px;
      }
    }

    & td:first-of-type,
    td:nth-of-type(2) {
      flex-basis: 48%;
    }
    }
  }

  & tr:nth-of-type(2n + 1) {
    background-color: #f5f5f5;
  }
`;
