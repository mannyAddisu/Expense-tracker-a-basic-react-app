import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import categroyList from "./categories";
function App() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "milk",
      amount: 10,
      category: categroyList.find((category) => category === "Grocery") || "-",
    },
    {
      id: 2,
      description: "ice",
      amount: 20,
      category: categroyList.find((category) => category === "Grocery") || "-",
    },
    {
      id: 3,
      description: "wifi",
      amount: 1000,
      category: categroyList.find((category) => category === "Utility") || "-",
    },
    {
      id: 4,
      description: "cinema",
      amount: 100,
      category:
        categroyList.find((category) => category === "Entertainment") || "-",
    },
  ]);
  const filteredExpense = categoryFilter
    ? expenses.filter((expense) => expense.category === categoryFilter)
    : expenses;
  console.log(expenses);
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          expense={expenses}
          onSubmit={(e) => setExpenses([...expenses, e])}
        />
      </div>
      <ExpenseFilter
        onSelect={(e) => {
          setCategoryFilter(e);
        }}
      />
      <ExpenseList
        expenses={filteredExpense}
        onDelete={(id) => {
          setExpenses(expenses.filter((exp) => exp.id !== id));
        }}
      />
    </div>
  );
}

export default App;
