import React, { useState } from "react";

export default function PlayerScore({ name }) {
  const [score, setScore] = useState(0);
  return (
    <>
      <h2 className="text-2xl font-semibold">{name}'s Score</h2>
      <div className="flex justify-center items-center my-6">
        <button
          className="border border-black/40 p-2"
          onClick={() =>
            setScore((prevScore) => prevScore > 0 && prevScore - 1)
          }
        >
          -{" "}
        </button>
        <span className="mx-4">{score}</span>
        <button
          className="border border-black/40 p-2"
          onClick={() => setScore((prevScore) => prevScore + 1)}
        >
          +{" "}
        </button>
      </div>
    </>
  );
}
