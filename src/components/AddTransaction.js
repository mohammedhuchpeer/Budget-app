import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalContext";

const AddTransaction = () => {
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: "",
  });

  const { addIncome, addExpense } = useContext(GlobalContext);

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    const { incomeText, incomeAmount } = income;
    e.preventDefault();
    const incomeTransaction = {
      id: uuidv4(),
      incomeText,
      incomeAmount: incomeAmount * 1,
    };
    addIncome(incomeTransaction);
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: "",
  });

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    const { expenseText, expenseAmount } = expense;
    e.preventDefault();
    const expenseTransaction = {
      id: uuidv4(),
      expenseText,
      expenseAmount: expenseAmount * 1,
    };
    addExpense(expenseTransaction);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            placeholder="Add Income...."
            autoComplete="off"
            name="incomeText"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            placeholder="Amount"
            autoComplete="off"
            name="incomeAmount"
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="Add expense..."
            autoComplete="off"
            name="expenseText"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            placeholder="Amount"
            autoComplete="off"
            name="expenseAmount"
            onChange={onChangeExpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
