import React from "react";
import { NavLink } from "react-router-dom";

export default function LazyLoading() {
  return (
    <div>
      <NavLink to="/">
      <h1>Testing lazyLoading /Code Splitting</h1>
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
