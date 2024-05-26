import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const section = ["CustomHook", "LazyLoading", "UseCallback"];

  return (
    <>
      <div className="flex m-14 text-white">
        {section.map((section, i) => {
          return (
            <p key={i} className="me-4">
              <NavLink to={section}>{section}</NavLink>
            </p>
          );
        })}
      </div>
    </>
  );
}
