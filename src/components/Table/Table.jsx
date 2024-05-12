import React from "react";
import styles from "./table.module.css";

// directly destructure transactions
const Table = ({ transactions, filter }) => {
  // !show records based on category
  if (filter) {
    transactions = transactions.filter((transaction) => {
      return transaction.category.toLowerCase() === filter.toLowerCase();
    });
  }
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* conditionally render transactions/short-circuit */}

        {transactions &&
          transactions.map((transaction) => {
            const { id, date, description, category, amount } = transaction;
            return (
              // !lists and keys
              <tr key={id}>
                <td>{id}</td>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;