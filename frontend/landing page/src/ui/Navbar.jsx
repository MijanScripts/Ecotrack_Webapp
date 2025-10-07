import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Contact Us", path: "/Contactus" },
    { name: "FAQs", path: "/faq" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[120px]">
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeMenu}>
              <img
                src="ecotrackLogo.svg"
                alt="Eco track logo"
                className="h-14 sm:h-[100px] w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-[#3CB42B] transition-colors duration-200 font-medium ${
                      isActive(item.path)
                        ? "text-[#3CB42B] border-b-2 border-[#3CB42B] pb-1"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 rounded-lg bg-[#3CB42B] cursor-pointer text-white font-medium hover:bg-[#2ea024] transition-colors duration-200">
              Sign Up
            </button>
            <button className="px-6 py-2 rounded-lg border-2 border-[#3CB42B] cursor-pointer text-[#3CB42B] font-medium hover:bg-[#3CB42B] hover:text-white transition-colors duration-200">
              Log In
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#3CB42B] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3CB42B] transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 z-50 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMenu}
          ></div>

          <div className="relative bg-white w-full h-full flex flex-col">
            <div className="flex items-center justify-between h-[120px] px-4 sm:px-6 border-b border-gray-200">
              <Link to="/" onClick={closeMenu}>
                <img
                  src="ecotrackLogo.svg"
                  alt="Eco track logo"
                  className="h-5 sm:h-14 w-auto"
                />
              </Link>
              <button
                onClick={closeMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#3CB42B] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3CB42B] transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6">
              <div className="space-y-8">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMenu}
                    className={`block text-2xl sm:text-3xl font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-[#3CB42B]"
                        : "text-gray-800 hover:text-[#3CB42B]"
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button className="w-full px-6 py-4 rounded-lg bg-[#3CB42B] cursor-pointer text-white text-lg font-medium hover:bg-[#2ea024] transition-colors duration-200">
                  Sign Up
                </button>
                <button className="w-full px-6 py-4 rounded-lg border-2 border-[#3CB42B] cursor-pointer text-[#3CB42B] text-lg font-medium hover:bg-[#3CB42B] hover:text-white transition-colors duration-200">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
