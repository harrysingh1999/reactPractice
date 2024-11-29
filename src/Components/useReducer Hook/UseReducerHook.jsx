import React, { createContext, useReducer } from "react";
import CounterOne from "./CounterOne";
import MultipleUseReducerHook from "./MultipleUseReducerHook";
import ComponentA from "./ComponentA";

export const CountContext = createContext();

const initialState = {
  counter: 0,
};

const reducer = (state, action) => {
  if (action.type === "increment") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "decrement") {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === "reset") {
    return initialState;
  } else {
    return state;
  }
};

export default function UseReducerHook() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="font-bold text-3xl my-4 text-center">
        UseReducer Hook Demonstration
      </h1>
      <CounterOne />
      <MultipleUseReducerHook />
      <CountContext.Provider
        value={{ contextCount: count.counter, contextDispatch: dispatch }}
      >
        <h2 className="font-bold text-3xl my-4 text-center">
          UseReducer with Context API
        </h2>
        count is: {count.counter}
        <ComponentA />
      </CountContext.Provider>
    </div>
  );
}
