import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import LazyLoading from "./LazyLoadingPractice/LazyLoading";
import Counter1 from "./customHookPractice/Counter1";

function App() {
  return (
    <>
      {/* <LazyLoading /> */}
      <Counter1/>
       <Suspense fallback={<div>Laoding........</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
