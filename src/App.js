import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      Header
      <main className="">
        <Outlet />
      </main>
      Footer
    </>
  );
}

export default App;
