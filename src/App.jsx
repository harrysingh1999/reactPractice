import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
       <Header/>
       <Suspense fallback={<div>Loading........</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
