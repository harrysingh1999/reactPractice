import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Me</button>;
});

export default function UseCallbackComp() {
  const [count, setCount] = useState(0);

  
  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
