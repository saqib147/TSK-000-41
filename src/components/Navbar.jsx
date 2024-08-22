import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 mr-2 " src={logo} alt="" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li
                className="font-semibold hover:text-slate-500 text-base"
                key={index}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="text-lime-600 py-2 px-3 border-2 border-lime-500 rounded-md text-center mr-2 mb-2 text-sm font-medium"
            >
              Internee's Login
            </a>
            <a
              href="#"
              className="text-white bg-gradient-to-r from-lime-400 via-lime-450 to-lime-500 hover:bg-gradient-to-br font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2"
            >
              Job Portal
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isOpen && (
          <div className="fixed right-0 z-20 bg-lime-50 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="font-semibold hover:text-slate-500 text-base py-4 text-center"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-lime-600 py-2 px-3 border-2 border-lime-500 rounded-md text-center mr-2 mb-2 text-sm font-medium"
              >
                Internee's Login
              </a>
              <a
                href="#"
                className="text-white bg-gradient-to-r from-lime-400 via-lime-450 to-lime-500 hover:bg-gradient-to-br font-medium rounded-md text-sm px-3 py-2 text-center mr-2 mb-2"
              >
                Job Portal
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
