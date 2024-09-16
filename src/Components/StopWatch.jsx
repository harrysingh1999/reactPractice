import React, { useEffect, useState } from "react";

export default function StopWatch() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (text2 === "restart") {
  //       setCount(0);
  //       setText("");
  //       setText2("");
  //     }
  //     if (text2 === "pause") {
  //       clearInterval(timer);
  //     }
  //     if (text2 === "" || text2 === "start") {
  //       setCount((prevCount) => prevCount + 1);
  //     }
  //   }, 800);

  //   return () => clearInterval(timer);
  // }, [text, text2]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    text === "" ? setText2("hold") : setText2(text);
  };

  return (
    <div className="mx-20">
      <h1 className="text-4xl text-center font-semibold">StopWatch</h1>
      <p>Count is {count}</p>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="enter"
          className="border border-black mb-4"
          value={text}
          onChange={(e) => handleChange(e)}
        />
        <button className="border border-black p-1">Submit</button>
      </form>

      <p>Type 'pause' to pause the count</p>
      <p>Type 'start' to start the count, from where you paused it</p>
      <p>Type 'restart' to restart the count</p>
    </div>
  );
}
