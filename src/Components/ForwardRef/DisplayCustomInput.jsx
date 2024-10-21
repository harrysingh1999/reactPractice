import React, { useRef } from "react";
import CustomInput from "./CustomInput";

export default function DisplayCustomInput() {
  const inputRef = useRef(null);

  const handleSubmission = () => {
    try {
      let value = inputRef.current.value;
      value ? alert(value) : inputRef.current.focus();
      inputRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-6">
        Demonstration of Forward Ref{" "}
      </h1>

      <CustomInput ref={inputRef} />

      <button type="submit" onClick={handleSubmission}>
        Submit{" "}
      </button>
      <p> Input Value is: </p>
    </div>
  );
}
