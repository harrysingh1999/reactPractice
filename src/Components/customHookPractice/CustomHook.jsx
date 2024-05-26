import React from "react";
import useCustomHook from "./useCustomHook";

export default function CustomHook() {
  const [count, Increment, Decrement] = useCustomHook();
  const [myCount, myIncrement, myDecrement] = useCustomHook(5);

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="my-10 text-4xl"> Implementation of Custom Hook </h1>
      <div className="flex items-center">
        <button
          onClick={Decrement}
          className="bg-orange-600 p-2 rounded-xl mt-2"
        >
          Subtract
        </button>
        <p className="mx-4"> count is: {count}</p>
        <button
          onClick={Increment}
          className="bg-orange-600 p-2 rounded-xl mt-2"
        >     
          Add
        </button>
      </div>

      <div className="flex items-center">
        <button
          onClick={myDecrement}
          className="bg-orange-600 p-2 rounded-xl mt-2"
        >       
          Subtract
        </button>
        <p className="mx-4"> count is: {myCount}</p>
        <button
          onClick={myIncrement}
          className="bg-orange-600 p-2 rounded-xl mt-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}
