import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  const getPercentage = () => {
    const interval = setInterval(() => {
      setPercentage((pre) => pre + 1);
    }, 100);
    console.log(percentage);
    if (percentage === 100) {
      console.log("idid");
    }
  };

  useEffect(() => {
    // getPercentage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1>Progress Bar</h1>
      <div className="w-80 border border-gray-500 rounded-lg m-4 text-center">
        <span className="text-center">{percentage}%</span>
      </div>
    </div>
  );
}
