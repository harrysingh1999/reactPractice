import React, { useState } from "react";

export default function Modal() {
  const [Modal, setModal] = useState(false);
  return (
    <div>
      <h1 className="text-2xl font-semibold m-10 ">Modal</h1>
      <div className="flex justify-center items-center flex-col">
        <button
          onClick={() => setModal(true)}
          className="border border-black rounded-lg p-1 text-center mb-4"
        >
          Modal
        </button>
        {Modal && (
          <div className="w-screen h-screen bg-black/[0.5] absolute top-0">
            <div className="w-1/2 m-auto relative top-96 bg-white rounded-lg">
              <p className="border border-black p-2 rounded-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
                obcaecati aliquam dicta consequatur rem alias facere pariatur
                consequuntur, autem cupiditate ratione quis minima impedit
                nostrum architecto perferendis? Dolores, quo, aspernatur
                exercitationem ipsa repudiandae iste voluptatem eligendi, cum
                quia unde fuga similique dolorum ipsum non eos! Fuga rem eaque,
                possimus expedita soluta ea cumque itaque totam mollitia sed.
                Repudiandae, possimus facere. Iste excepturi quia eum nesciunt
                minima. Dolorum numquam, architecto, ex debitis sequi, vero
                delectus earum harum doloribus dolorem eveniet! Illum sit,
                eligendi dolor quae et deserunt accusantium deleniti
                repellendus, natus sint vel aliquid atque fugiat tempore
                asperiores minima suscipit laboriosam.
              </p>
              <span
                onClick={() => setModal(false)}
                className="absolute right-4 top-2 cursor-pointer"
              >
                ❌
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
