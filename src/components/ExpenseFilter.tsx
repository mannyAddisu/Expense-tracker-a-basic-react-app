import categroyList from "../categories";
interface Props {
  onSelect: (category: string) => void;
}
const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Categories
        </label>
        <select
          className="form-select"
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value="">All Categories</option>
          {categroyList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default ExpenseFilter;
