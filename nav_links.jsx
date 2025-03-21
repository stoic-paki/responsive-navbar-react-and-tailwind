import React, { useState } from "react";
import { Menu, X } from "lucide-react";
// import {NavLinks} from "react-router-dom"
function NavLinks() {
  return (
    <div className="flex justify-evenly items-center w-[100%] h-[100%] border-2 border-amber-300">
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
      <a href="">Home</a>
    </div>
  );
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-1/3 h-[100%] border-2 border-blue-400">
        <div className="hidden md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden flex justify-end ">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className=" mt-3 border-2 border-cyan-300 flex gap-1 flex-col items-center basis-full">
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
        </div>
      )}
    </>
  );
};

export default Nav;
