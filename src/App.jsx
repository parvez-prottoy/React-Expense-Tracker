import ExpenseBoard from "./components/ExpenseBoard/ExpenseBoard";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <ExpenseBoard />
    </MainLayout>
  );
}
