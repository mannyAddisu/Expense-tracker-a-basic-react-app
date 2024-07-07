import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categroyList from "../categories";
interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expense: Expenses[];
  onSubmit: (newExpenese: Expenses) => void;
}
const schema = z.object({
  description: z.string().min(1, { message: "This Field is required" }),
  amount: z
    .number({ invalid_type_error: "This Field is required" })
    .min(0.01, { message: "Amount must be at least 0.01." }),
  category: z.enum(categroyList, { message: "Please select a category." }),
});

type FormField = z.infer<typeof schema>;

const ExpenseForm = ({ expense, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormField>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (expense.length === 0) onSubmit({ id: 0, ...data });
        else onSubmit({ id: expense[expense.length - 1].id + 1, ...data });
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        <p className="text-danger">{errors.description?.message}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        <p className="text-danger">{errors.amount?.message}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="categories" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="categories"
          className="form-select"
        >
          <option value=""></option>
          {categroyList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <p className="text-danger">{errors.category?.message}</p>
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
