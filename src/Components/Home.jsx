import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../Constants/Constants";

export default function Home() {
  return (
    <div className="mx-10">
      <h1 className="text-4xl text-blue-600 font-semibold text-center mt-10">
        Practice React Concepts
      </h1>
      <div className="flex justify-around gap-10 flex-wrap my-10">
        {navItems.map((nav) => (
          <NavLink to={nav.path} key={nav.path}>
            <p>{nav.title} </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
