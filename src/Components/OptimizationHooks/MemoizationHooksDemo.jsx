import React, { useState, useCallback, useMemo } from "react";

// React.memo higher order component to prevent child component from unnecessary re-rendering............
const ChildComponent = React.memo(({ onClick, obj, num }) => {
  console.log("Child re-rendered");
  console.log("Child", obj);
  console.log("Child", num);
  return <button onClick={onClick}>Click Me</button>;
});

export default function MemoizationHooksDemo() {
  const [count, setCount] = useState(0);

  // UseCallback Demo.....................
  const handleClick = useCallback(() => {
    console.log("Child Button clicked");
  }, []);

  // useMemo Demo with Non primitive Data Type......................
  const obj = useMemo(() => ({ name: 'Harry', age: 44 }), []);

   // useMemo Demo, memoizing Expensive computation result in a number (primitive)
   const expensiveComputation = useMemo(() => {
    console.log("Expensive calculation running...");
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
      result += i;
    }
    return result; 
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Expensive Computation Result: {expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} obj={obj} num={45}  />
    </div>
  );
}
