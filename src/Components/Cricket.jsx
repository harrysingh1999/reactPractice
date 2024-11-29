import React, { useState } from "react";

export default function Cricket() {
  const [ball, setBall] = useState([]);
  const [score, setScore] = useState([]);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    if (count <= 6) {
      setBall((prevBall) => [...prevBall, count]);
      setScore((prevScore) => [...prevScore, count + 1]);
    } else {
      setCount(1);
      setBall([]);
      setScore([]);
    }
  };

  return (
    <>
      <h1 className="font-bold text-center text-3xl my-6">
        {" "}
        Set Balls and Scores{" "}
      </h1>
      <div className="flex gap-8 justify-center">
        <div className="flex flex-col items-center border-r border-black pr-8">
          <h2>Balls</h2>
          {ball.map((b) => (
            <p key={crypto.randomUUID()}>{b} </p>
          ))}
          <span>
            {count === 7 && ball.reduce((acc, curr) => acc + curr, 0)}{" "}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h2>Scores</h2>
          {score.map((b) => (
            <p key={crypto.randomUUID()}>{b} </p>
          ))}
          <span>
            {count === 7 && score.reduce((acc, curr) => acc + curr, 0)}{" "}
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleClick}
          className="border border-black p-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </>
  );
}
