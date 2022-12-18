import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  display: block;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Thead = styled.thead`
  color: white;
  border-collapse: none;
`;
export const TrColumnHeader = styled.tr`
  height: 50px;
  background-color: rgba(7, 182, 182, 0.815);
`;

export const TdStringHeader = styled.th`
  width: 166px;
  font-weight: 400;
  border: 1px solid rgba(92, 95, 95, 0.815);
`;

export const TrColumn = styled.tr`
  height: 50px;
  background-color: white;
  :nth-of-type(even) {
    background-color: rgb(238, 232, 232);
  }
`;

export const TdString = styled.th`
  border: 1px solid rgba(92, 95, 95, 0.815);
  width: 166px;
  font-weight: 400;
`;
