import React from "react";
import { NavLink } from "react-router-dom";

export default function LazyLoading() {
  return (
    <div className="text-white text-center">
      <NavLink to="/">
      <h1 className="text-4xl mb-10">Testing lazyLoading /Code Splitting</h1>
      </NavLink>
      <NavLink to="/About">
       <p> About Us</p>
      </NavLink>
      <NavLink to="/Contact">
        <p>Contact</p>
      </NavLink>
    </div>
  );
}
