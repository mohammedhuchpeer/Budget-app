import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeList = () => {
  const { expenseTransactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransaction) => (
          <li className="transaction" key={expenseTransaction.id}>
            <span className="transaction-text">
              {expenseTransaction.expenseText}
            </span>
            <span className="transaction-amount">
              ${expenseTransaction.expenseAmount}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(expenseTransaction.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeList;
