import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import categroyList from "./categories";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}
function App() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const filteredExpense = categoryFilter
    ? expenses.filter((expense) => expense.category === categoryFilter)
    : expenses;
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
