import React, { useState } from "react";

const NumberCycler = ({ numbers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numbers.length);
  };

  return (
    <div>
      <p>Current Number: {numbers[currentIndex]}</p>
      <button onClick={handleClick}>Next Number</button>
    </div>
  );
};

export default NumberCycler;
