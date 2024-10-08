import React, { useState } from "react";
import PlayerScore from "./PlayerScore";

export default function SwitchPlayer() {
  const [isPlayer1, setIsPlayer1] = useState(true);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-8">Key Keyword Usage in React, other than Iterating elements</h1>
      {isPlayer1 ? <PlayerScore key="Harry" name="Harry" /> : <PlayerScore key='Ravi' name="Ravi" />}
      <button onClick={() => setIsPlayer1((prevState) => !prevState)}>
        Switch Player
      </button>
    </div>
  );
}
