import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  let [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  let showFormButton = (
    <div className="new-expense__actions_add_new">
      <button type="submit" onClick={() => setShowForm(!false)}>
        Add New Expense
      </button>
    </div>
  );

  let cancelButton = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm === false ? (
        showFormButton
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideExpenseForm={cancelButton}
        />
      )}
    </div>
  );
};

export default NewExpense;
