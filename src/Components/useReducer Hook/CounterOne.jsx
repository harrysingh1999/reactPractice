import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 2,
};

const reducer = (state, action) => {
  // You can use Both Switch or If/else statements........

  //   switch (action.type) {
  //     case "increment":
  //       //   return {...state, firstCounter: state.firstCounter + 3 }; You can use Hardcoded value as well........
  //       return {...state, firstCounter: state.firstCounter + action.value };
  //     case "decrement":
  //       return {...state, firstCounter: state.firstCounter - action.value };
  //     case "increment2":
  //       return {...state, secondCounter: state.secondCounter + action.value };
  //     case "decrement2":
  //       return {...state, secondCounter: state.secondCounter - action.value };
  //     case "reset":
  //       return initialState;
  //     default:
  //       return state;
  //   }

  if (action.type === "increment") {
    //   return {...state, firstCounter: state.firstCounter + 3 }; You can use Hardcoded value as well........
    return { ...state, firstCounter: state.firstCounter + action.value };
  } else if (action.type === "decrement") {
    return { ...state, firstCounter: state.firstCounter - action.value };
  } else if (action.type === "increment2") {
    return { ...state, secondCounter: state.secondCounter + action.value };
  } else if (action.type === "decrement2") {
    return { ...state, secondCounter: state.secondCounter - action.value };
  } else if (action.type === "reset") {
    return initialState;
  } else {
    return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-semibold text-2xl my-4">
        {" "}
        Handling Complex State and Action using useReducer Hook{" "}
      </h2>
      <p>First Counter = {count.firstCounter}</p>
      <p>Second Counter = {count.secondCounter}</p>
      <div className="flex gap-6">
        {" "}
        <button onClick={() => dispatch({ type: "increment", value: 4 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 4 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
          Increment 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
          Decrement 2
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default CounterOne;
