import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  border: 1px solid ${props => props.theme.tableBorder};
  border-radius: 5px;
  overflow: hidden;
`;

export const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  overflow-wrap: break-word;
  font-size: 20px;

  @media (max-width: 600px) {
    font-size: 14px;
  }

  & tr {
    & td {
      padding: 0 20px;

      @media (max-width: 600px) {
        padding: 0 15px;
      }
    }

    & td:first-of-type,
    td:nth-of-type(2) {
      width: 42%;
    }

    & td:last-of-type {
      padding-right: 10px;
    }

    &:hover {
      color: ${props => props.theme.authLinkColor};
    }
  }

  & tr:nth-of-type(2n + 1) {
    background-color: ${props => props.theme.tableDarkRow};
  }
`;
