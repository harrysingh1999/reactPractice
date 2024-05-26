import React, { useState } from "react";

export default function Accordion() {
  const [Accordion, setAccordion] = useState(false);
  return (
    <div>
      <h1 className="text-2xl font-semibold m-10 ">Accordion</h1>
      <div className="w-1/2 m-auto flex flex-col shadow-lg cursor-pointer">
        <div
          className="flex justify-between shadow-lg"
          onClick={() => setAccordion(!Accordion)}
        >
          <p className="ms-4 p-2 font-semibold">Accordion</p>
          <span className="p-2 cursor-pointer">⬇️</span>
        </div>
        <div>
          {Accordion && (
            <p className="ms-4 p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              obcaecati repudiandae iusto nesciunt quasi molestias ipsam,
              nostrum explicabo! Officia, ducimus fugit culpa cupiditate
              temporibus illum quaerat minima explicabo? Distinctio, neque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              eius quidem quia nemo at accusantium perspiciatis accusamus
              officiis sit aperiam,nostrum voluptates, nesciunt consequatur
              beatae dolorum exercitationem voluptas maiores reiciendis. Rerum
              inventore suscipit magni quia. Sit, sunt rerum minima recusandae
              voluptatibus ipsa numquam facere libero magni molestiae doloremque
              doloribus similique totam vero reiciendis praesentium odio qui
              architecto? Magnam, ipsam tenetur officiis earum distinctio
              cupiditate animi minus fugit, quasi dolore velit dignissimos est
              eaque perferendis neque quibusdam,
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
