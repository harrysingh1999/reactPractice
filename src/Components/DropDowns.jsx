import React, { useState } from "react";
import { states } from "../Constants/Constants";

export default function DropDowns() {
  const [state, setStates] = useState(0);

  return (
    <div>
      <h1 className="text-2xl font-semibold m-10">
        2 dropdowns with State and Cities
      </h1>
      <div className="m-10">
        <select
          onChange={(e) => setStates(e.target.value)}
          value={state}
          className="border-black border"
        >
          {states.map((item, i) => {
            return (
              <option value={i} key={crypto.randomUUID()}>
                {item.state}
              </option>
            );
          })}
        </select>
        <select className="border-black border ms-2">
          {states[state].City.map((item) => (
            <option value={item} key={crypto.randomUUID()}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
