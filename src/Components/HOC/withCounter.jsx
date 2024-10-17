import { useState } from "react";

export default function withCounter(WrappedComponent) {
  return function EnhancedComponent() {
    const [count, incrementCount] = useState(0);
    return (
      <WrappedComponent
        count={count}
        incrementCount={() => incrementCount((prevCount) => prevCount + 1)}
      />
    );
  };
}
