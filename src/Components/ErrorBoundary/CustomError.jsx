import React, { useEffect, useState } from "react";

export default function CustomError() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((prevValue) => prevValue + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [value]);

  if (value > 3) {
    throw new Error("Value is greater than 3");
  }

  return (
    <>
      <p>Value is: {value} </p>
    </>
  );
}
