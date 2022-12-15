import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th className={css.head_table}>Type</th>
          <th className={css.head_table}>Amount</th>
          <th className={css.head_table}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.body_table}>{type}</td>
              <td className={css.body_table}>{amount}</td>
              <td className={css.body_table}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
