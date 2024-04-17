import React from "react";

export default function CenterElements() {
  return (
    <div>
      <h1 className="text-2xl font-semibold m-10 ">
        Center an Element using Various Techniques
      </h1>
      <div className="flex justify-center mb-14 ">
        <div className="flex justify-center items-center border border-black h-96 w-96">
          <div className="border border-black h-24 w-16">Flex</div>
        </div>
        <div className="grid justify-center items-center border border-black h-96 w-96">
          <div className="border border-black h-24 w-16">Grid</div>
        </div>
        <div className="relative border border-black h-96 w-96">
          <div className="border border-black h-24 w-20 absolute right-[40%] top-[38%]">
            Positioning
          </div>
        </div>
      </div>
    </div>
  );
}
