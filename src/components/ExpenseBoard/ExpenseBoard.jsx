import ExpenseTrackerForm from "./ExpenseTrackerForm";
import IncomeExpenseList from "./IncomeExpenseList";
import TotalBalance from "./TotalBalance";

export default function ExpenseBoard() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Expense Tracker Form */}
      <ExpenseTrackerForm />

      {/* <!-- Right Column --> */}
      <div className="lg:col-span-2">
        {/* Total Balance */}
        <TotalBalance />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          <IncomeExpenseList />
          <IncomeExpenseList />
        </div>
      </div>
    </section>
  );
}
