import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";
<<<<<<< HEAD
import Header from "./Components/Header/Header";
=======
import Home from "./Components/Home";
>>>>>>> c7085607635bc58b54527ce06efe6e67406aa0ee

function App() {
  return (
    <>
<<<<<<< HEAD
       <Header/>
       <Suspense fallback={<div>Loading........</div>}>
=======
      <Home />
      <Suspense fallback={<div>Loading........</div>}>
>>>>>>> c7085607635bc58b54527ce06efe6e67406aa0ee
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
