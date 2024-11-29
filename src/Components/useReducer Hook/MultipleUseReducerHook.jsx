import React, { useReducer } from "react";

export default function MultipleUseReducerHook() {
  const initialState = {
    firstCounter: 0,
  };

  const reducer = (state, action) => {
    if (action.type === "increment") {
      //   return {...state, firstCounter: state.firstCounter + 3 }; You can use Hardcoded value as well........
      return { ...state, firstCounter: state.firstCounter + action.value };
    } else if (action.type === "decrement") {
      return { ...state, firstCounter: state.firstCounter - action.value };
    } else if (action.type === "reset") {
      return initialState;
    } else {
      return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-semibold text-2xl my-4">
        {" "}
        Using Multiple useReducer Hook with similar Logic{" "}
      </h2>

      <div className="flex gap-6">
        <p>Reducer One = {count.firstCounter}</p>{" "}
        <button onClick={() => dispatch({ type: "increment", value: 4 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 4 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div className="flex gap-6">
        <p>Reducer Two = {count2.firstCounter}</p>

        <button onClick={() => dispatch2({ type: "increment", value: 2 })}>
          Increment 2
        </button>
        <button onClick={() => dispatch2({ type: "decrement", value: 2 })}>
          Decrement 2
        </button>
        <button onClick={() => dispatch2({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
