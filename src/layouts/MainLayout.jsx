import Header from "../components/Header/Header";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        {children}
      </main>
    </>
  );
}
