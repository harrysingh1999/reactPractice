import React from "react";
import useCustomHook from "./useCustomHook";

function Counter() {
  const [count, Increment, Decrement] = useCustomHook();
  const [myCount, myIncrement, myDecrement] = useCustomHook(5);


  return (
    <div>
      <h1> Implementation of Custom Hook </h1>
      <p> count is: {count}</p>
      <button onClick={Decrement}> - </button>
      <button onClick={Increment}> + </button>

      <p> My Count is: {myCount}</p>
      <button onClick={myDecrement}> - </button>
      <button onClick={myIncrement}> + </button>
    </div>
  );
}

export default Counter;
