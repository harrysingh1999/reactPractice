import { Outlet, useLocation } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import Home from "./Components/Home";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Home />
      <Suspense fallback={<div>Loading........</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
