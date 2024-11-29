import React, { useContext } from "react";
import ComponentB from "./ComponentB";
import { CountContext } from "./UseReducerHook";

function ComponentA() {
  const context = useContext(CountContext);
  return (
    <>
      
      <div className="flex gap-4">  
      <p> Component A:</p>
      <button onClick={() => context.contextDispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => context.contextDispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => context.contextDispatch({ type: "reset" })}>
        Reset
      </button>
      </div>
      <ComponentB />
    </>
  );
}

export default ComponentA;
