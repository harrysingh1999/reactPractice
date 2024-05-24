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
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-[70vh] ">
        <h1>Progress Bar</h1>
        <div className="w-[500px] border border-gray-500 rounded-lg m-4 overflow-hidden h-[30px] relative">
          <span className="absolute flex justify-center w-[100%]">
            {percentage}%
          </span>
          <p className={`w-${percentage}% h-[100%] bg-green-400`} />
        </div>
      </div>
    </>
  );
}
