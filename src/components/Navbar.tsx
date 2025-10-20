import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-dark-card/80 backdrop-blur-md font-serrat">
      <div className=" mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex-shrink-0 flex items-center gap-2"
            >
              <img src="/images/logo.png" width={85} alt="" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:space-x-8">
              <NavLink
              to="/docs"
              className={({ isActive }) =>
                `text-[16px] font-medium transition-colors hover:text-cyan ${
                  isActive
                    ? "text-cyan"
                    : "text-gray-300"
                }`
              }
            >
              Docs
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-[16px] font-medium transition-colors hover:text-cyan ${
                  isActive
                    ? "text-cyan"
                    : "text-gray-300"
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/demos"
              className={({ isActive }) =>
                `text-[16px] font-medium transition-colors hover:text-cyan ${
                  isActive
                    ? "text-cyan"
                    : "text-gray-300"
                }`
              }
            >
              Demos
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `text-[16px] font-medium transition-colors hover:text-cyan ${
                  isActive
                    ? "text-cyan"
                    : "text-gray-300"
                }`
              }
            >
              Features
            </NavLink>
             <NavLink
              to="/playground"
              className={({ isActive }) =>
                `text-[16px] font-medium transition-colors hover:text-cyan ${
                  isActive
                    ? "text-cyan"
                    : "text-gray-300"
                }`
              }
            >
              Playground
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[16px] font-medium transition-colors hover:text-cyan ${
                  isActive
                    ? "text-cyan"
                    : "text-gray-300"
                }`
              }
            >
              About
            </NavLink>
          
          </nav>

          {/* Right Side (Buttons + Theme) */}
          <div className="flex items-center space-x-3">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 text-gray-300 hover:text-indigo-500 focus:outline-none"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-card ">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <NavLink
              to="/"
              onClick={closeMenu}
              className="text-gray-300 hover:text-indigo-500 text-sm font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/tutorials"
              onClick={closeMenu}
              className="text-gray-300 hover:text-indigo-500 text-sm font-medium"
            >
              Tutorials
            </NavLink>
            <NavLink
              to="/playground"
              onClick={closeMenu}
              className="text-gray-300 hover:text-indigo-500 text-sm font-medium"
            >
              Playground
            </NavLink>
            <NavLink
              to="/docs"
              onClick={closeMenu}
              className="text-gray-300 hover:text-indigo-500 text-sm font-medium"
            >
              Docs
            </NavLink>
{/* 
            {!isAuthenticated && (
              <Link
                to="/signup"
                onClick={closeMenu}
                className="block w-full text-center px-4 py-2 mt-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            )} */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
