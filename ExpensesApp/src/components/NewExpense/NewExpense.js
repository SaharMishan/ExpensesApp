import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const editingHandler = () => {
    return setIsEditing(true);
  };
  const stopEditingHandler = () => {
    return setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          stopEditingHandler={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
