import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#2c2c2c] text-white flex justify-between md:px-[30px] px-[10px] md:py-[25px] py-[15px]">
      <h1 className="logo">Counter App</h1>
      <nav className="flex md:gap-[50px] gap-[20px]">
        <NavLink
          to="/"
          className={
            "hover:text-[#ffffff80] active:text-[#ffffff60] focus:text-[#ffffff90]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/counter"
          className={
            "hover:text-[#ffffff80] active:text-[#ffffff60] focus:text-[#ffffff90]"
          }
        >
          Counter
        </NavLink>
        <NavLink
          to="/about"
          className={
            "hover:text-[#ffffff80] active:text-[#ffffff60] focus:text-[#ffffff90]"
          }
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
