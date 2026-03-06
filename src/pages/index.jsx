import { Outlet } from "react-router-dom";

import Header from "@components/layout/header";
import Footer from "@components/layout/footer";

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
