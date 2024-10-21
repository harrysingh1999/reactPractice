import React, { useEffect, useState } from "react";
import { faq } from "../Constants/Constants";

export default function Accordion() {
  const [index, setIndex] = useState(0);

  const handleId = (id) => {
    setIndex(id);
  };

  useEffect(() => {
    const asyncCodeExample = async () => {
      const myPromise = new Promise((resolve, rejected) => {
        setTimeout(() => {
          if (true) {
            resolve("Promise Timer Executed");
          } else {
            rejected("rejected");
          }
        }, 2000);
      });

      let response = await myPromise;
      console.log(response);
      console.log("After timer log");
    };

    asyncCodeExample();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold m-10 ">Accordion</h1>
      <h2 className="text-2xl font-semibold m-10 text-center">FAQ</h2>
      {faq.map((item, i) => {
        return (
          <div
            key={item.question}
            className="border border-black p-2 mb-4 w-[50%] mx-auto"
          >
            <div className="flex items-center" onClick={() => handleId(i)}>
              <span className="p-2 cursor-pointer">⬇️</span>
              <p>{item.question}</p>
            </div>
            <p className="ps-10"> {i === index ? item.answer : null}</p>
          </div>
        );
      })}
    </>
  );
}
