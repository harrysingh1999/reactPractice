import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage === 100) {
          clearInterval(interval);
          return 100;
        }
        return prevPercentage + 2;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[70vh] ">
        <h1>Progress Bar</h1>
        <div className="w-[500px] h-8 border border-gray-500 rounded-lg m-4 overflow-hidden relative">
          <span className="absolute w-full h-full flex items-center justify-center">
            {percentage}%
          </span>

          <p
            style={{
              width: `${percentage}%`,
              height: "100%",
              backgroundColor: "#01F802",
            }}
          />
        </div>
      </div>
    </>
  );
}
