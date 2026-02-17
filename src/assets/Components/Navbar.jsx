import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-center gap-5 mt-5">
      <NavLink to="/">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-400" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              Home
            </span>
          );
        }}
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "red" : "",
          };
        }}
        to="/User"
      >
        User
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/About"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/Services"
      >
        Services
      </NavLink>
    </nav>
  );
};

export default Navbar;
