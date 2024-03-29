import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Home/>
       <Suspense fallback={<div>Loading........</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
