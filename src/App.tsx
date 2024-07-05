import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "milk", amount: 10, category: "grocery" },
    { id: 2, description: "ice", amount: 20, category: "grocery" },
    { id: 3, description: "wifi", amount: 1000, category: "utility" },
    { id: 4, description: "cinema", amount: 100, category: "entertainment" },
  ]);

  return (
    <div>
      <ExpenseForm />
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((exp) => exp.id !== id));
        }}
      />
    </div>
  );
}

export default App;
