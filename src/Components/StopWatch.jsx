import React, { useEffect, useState } from "react";

export default function StopWatch() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      if (text === "restart") {
        setCount(0);
        setText('')
      }
      if (text === "pause") {
        clearInterval(timer);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="mx-20">
      <h1 className="text-4xl text-center font-semibold">StopWatch</h1>
      <p>Count is {count}</p>

      <input
        type="text"
        placeholder="enter"
        className="border border-black mb-4"
        value={text}
        onChange={(e) => handleChange(e)}
      />

      <p>Type 'pause' to pause the count</p>
      <p>Type 'restart' to restart the count</p>
    </div>
  );
}
