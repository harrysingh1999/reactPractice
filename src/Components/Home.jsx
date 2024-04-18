import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl text-blue-600 text-center mt-10">
        All Components of the App
      </h1>
      <div className="flex justify-evenly flex-nowrap mt-10">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/Accordion">
          <p>Accordion</p>
        </NavLink>
        <NavLink to="/Modal">
          <p>Modal</p>
        </NavLink>
        <NavLink to="/DropDowns">
          <p>DropDowns</p>
        </NavLink>
        <NavLink to="/Multipleinputs">
          <p>Multiple Inputs</p>
        </NavLink>
        <NavLink to="/Counter">
          <p> Custom Hook</p>
        </NavLink>
        <NavLink to="/CenterElements">
          <p>Center Elements</p>
        </NavLink>
        <NavLink to="/InputCaseChange">
          <p>Change String Input Case</p>
        </NavLink>
        <NavLink to="/ImageSlider">
          <p>Image Slider/Carousel</p>
        </NavLink>
      </div>
    </div>
  );
}
