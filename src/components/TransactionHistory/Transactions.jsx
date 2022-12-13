import PropTypes from 'prop-types';
import CSS from './Transactions.module.css'

export default function TransactionHistory({ items }) {
  //   const { transaction } = props;

  //   console.log(items);
  return (
    <table className={CSS.transaction_history}>
      <thead>
        <tr>
          <th className={CSS.head_table}>Type</th>
          <th className={CSS.head_table}>Amount</th>
          <th className={CSS.head_table}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={CSS.body_table}>{type}</td>
              <td className={CSS.body_table}>{amount}</td>
              <td className={CSS.body_table}>{currency}</td>
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
