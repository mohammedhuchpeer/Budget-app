import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const IncomeList = () => {
  const { incomeTransactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransaction) => (
          <li className="transaction" key={incomeTransaction.id}>
            <span className="transaction-text">
              {incomeTransaction.incomeText}
            </span>
            <span className="transaction-amount">
              ${incomeTransaction.incomeAmount}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(incomeTransaction.id)}
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
