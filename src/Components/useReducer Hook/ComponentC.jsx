import React, { useContext } from "react";
import { CountContext } from "./UseReducerHook";

function ComponentC() {
  const context = useContext(CountContext);
  return (
    <div className="flex gap-4">
      <p> Component C:</p>
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
  );
}

export default ComponentC;
