import { Outlet } from "react-router-dom";

import { Header, Footer } from "@components/layout";

function App() {
  return (
    <>
      <Header />
      <main className="w-full flex-1 flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
