import React, { useState } from "react";

const PingPong = () => {
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);
  const [winningScore, setWinningScore] = useState(5);

  const handleChangeWinningScore = (e) => {
    setWinningScore(+e.target.value);
  };

  const handleScoreP1 = () => {
    setScoreP1((prevScore) => prevScore + 1);
  };
  const handleScoreP2 = () => {
    setScoreP2((prevScore) => prevScore + 1);
  };
  const handleReset = () => {
    setScoreP1(0);
    setScoreP2(0);
    setWinningScore(5);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-10">Ping Pong Score Keeper</h1>
      <div className="flex gap-2">
        <span>Player1 Score:</span>
        <span
          className={`${
            scoreP1 === winningScore
              ? "text-green-500"
              : scoreP2 === winningScore
              ? "text-red-500"
              : "text-black"
          }
          } `}
        >
          {scoreP1}
        </span>
        { scoreP1 === winningScore && <span>Wins!!!</span>}
      </div>
      <div className="flex gap-2">
        <span>Player2 Score:</span>
        <span
          className={`${
            scoreP2 === winningScore
              ? "text-green-500"
              : scoreP1 === winningScore
              ? "text-red-500"
              : "text-black"
          }
          } `}
        >
          {scoreP2}
        </span>
        { scoreP2 === winningScore && <span>Wins!!!</span>}
      </div>

      <label className="mt-4">
        Set Winning Score:
        <select
          name=""
          id=""
          className="border border-black/50 ml-2 px-2"
          value={winningScore}
          onChange={(e) => handleChangeWinningScore(e)}
        >
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>
      </label>

      <div className="flex gap-4 mt-4">
        <button
          className={` ${
            scoreP1 === winningScore || scoreP2 === winningScore
              ? "bg-blue-200"
              : "bg-blue-500"
          }  text-white rounded-lg p-2`}
          onClick={handleScoreP1}
          disabled={scoreP1 === winningScore || scoreP2 === winningScore}
        >
          + Player 1
        </button>
        <button
          className={` ${
            scoreP1 === winningScore || scoreP2 === winningScore
              ? "bg-green-200"
              : "bg-green-500"
          }  text-white rounded-lg p-2`}
          onClick={handleScoreP2}
          disabled={scoreP1 === winningScore || scoreP2 === winningScore}
        >
          + Player 2
        </button>
        <button
          className="bg-red-500 text-white rounded-lg px-4 py-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PingPong;
