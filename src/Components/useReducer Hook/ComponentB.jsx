import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { CountContext } from "./UseReducerHook";

function ComponentB() {
  const context = useContext(CountContext);
  return (
    <>
      <div className="flex gap-4">
        <p> Component B:</p>
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
      <ComponentC />
    </>
  );
}

export default ComponentB;
