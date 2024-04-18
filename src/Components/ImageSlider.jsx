import React, { useState } from "react";
import { images } from "../Constants/Constants";

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevious = () => {
    setImageIndex((prevIndex) =>
      prevIndex !== 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <h1 className="text-center text-4xl font-semibold my-6">
        Image Slider/Carousel
      </h1>
      <div className="flex justify-center m-10">
        <button className="me-4" onClick={handlePrevious}>
          Previous
        </button>
        {/* This is more optimized way as Browser don't have to make requests to the server
       for the image that was requested before as all the images are requested at once, we are just displaying them 
       according to their Index....... */}
        {images.map((image, i) => (
          <img
            src={image}
            alt="images"
            className={`w-[600px] h-[600px] object-contain ${
              imageIndex === i ? "block" : "hidden"
            } `}
            key={i}
          />
        ))}
        {/* In this method, Browser has to make request for the image that was requested before as well,
       so unnecessary Request being made here........ */}
        {/* <img
        src={images[imageIndex]}
        alt="images"
        className="w-[600px] h-[600px] object-contain"
      /> */}
        <button className="ms-4" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}
