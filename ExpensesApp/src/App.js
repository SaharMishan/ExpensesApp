import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Welcome to Expense-App
      </h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <>
        <footer
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "16px",
          }}
        >
          &copy; Made By Sahar Mishan 2022
        </footer>
      </>
    </div>
  );
};

export default App;
