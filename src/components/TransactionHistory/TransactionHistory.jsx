import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  Thead,
  TrColumnHeader,
  TdStringHeader,
  TrColumn,
  TdString,
} from '../TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <Thead>
        <TrColumnHeader>
          <TdStringHeader>Type</TdStringHeader>
          <TdStringHeader>Amount</TdStringHeader>
          <TdStringHeader>Currency</TdStringHeader>
        </TrColumnHeader>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TrColumn key={id}>
              <TdString>{type}</TdString>
              <TdString>{amount}</TdString>
              <TdString>{currency}</TdString>
            </TrColumn>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.prototype = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
