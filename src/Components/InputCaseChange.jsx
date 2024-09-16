import React, { useEffect, useState } from "react";

export default function InputCaseChange() {
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");

  useEffect(() => {
    const handleChange = () => {
      let modifiedText = "";
      for (let i = 0; i < text.length; i++) {
        if (i % 2 === 1) {
          modifiedText += text[i].toUpperCase();
        } else {
          modifiedText += text[i].toLowerCase();
        }
      }
      setNewText(modifiedText);
    };
    handleChange();
  }, [text]);
  return (
    <div className="mx-20">
      <h1 className="text-4xl text-center font-semibold">Change Input Case</h1>
      <input
        className="border border-black"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <p>{text && newText}</p>
    </div>
  );
}
